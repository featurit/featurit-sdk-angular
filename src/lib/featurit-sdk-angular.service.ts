import { Inject, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import {
  DefaultFeaturitUserContext,
  FeatureFlag,
  FeatureFlagList,
  Featurit,
  FEATURIT_EVENTS,
  FeaturitSetup,
  FeaturitUserContext
} from "featurit-sdk-js-browser";

@Injectable({
  providedIn: 'root'
})
export class FeaturitService {

  private featurit: Featurit;

  constructor(@Inject('config') config: FeaturitSetup) {
    this.featurit = new Featurit(config);
  }

  async init() {
    await this.featurit.init();
  }

  async refresh() {
    await this.featurit.refresh();
  }

  isActive(featureName: string): boolean {
    return this.featurit.isActive(featureName);
  }

  version(featureName: string): string {
    return this.featurit.version(featureName);
  }

  getUserContext(): FeaturitUserContext {
    return this.featurit.getUserContext();
  }

  setUserContext(featuritUserContext: {
    userId: string,
    sessionId: string,
    ipAddress: string,
    customAttributes?: {
      [name: string]: string | number
    }
  }): void {
    const customAttributesMap = new Map(Object.entries(featuritUserContext.customAttributes || {}));
    this.featurit.setUserContext(
      new DefaultFeaturitUserContext(
        featuritUserContext.userId,
        featuritUserContext.sessionId,
        featuritUserContext.ipAddress,
        customAttributesMap,
      )
    );
  }

  track(eventName: string, properties?: Record<string, string | number>): void {
    this.featurit.track(eventName, properties);
  }

  trackPerson(): void {
    this.featurit.trackPerson();
  }

  register(propertyName: string, propertyValue: any): void {
    this.featurit.register(propertyName, propertyValue);
  }

  async flush(): Promise<void> {
    await this.featurit.flush();
  }

  onChange(featureFlag: FeatureFlag): Observable<FeatureFlag> {
    return new Observable<FeatureFlag>((observer: Observer<FeatureFlag>) => {
      this.featurit.on(FEATURIT_EVENTS.CHANGED, (featureFlags: FeatureFlagList) => {
        const newFeatureFlag = !featureFlags[featureFlag.name] ? {
          name: featureFlag.name,
          active: false,
          version: 'default'
        } : {
          name: featureFlag.name,
          active: this.isActive(featureFlag.name), // TODO: If we use the raw version instead of the methods we won't register analytics, what do we prefer?
          version: this.version(featureFlag.name),
        };
        if (JSON.stringify(featureFlag) != JSON.stringify(newFeatureFlag)) {
          observer.next(newFeatureFlag);
        }
      });
    });
  }
}
