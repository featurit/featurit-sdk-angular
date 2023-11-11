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
    // await this.ngZone.runOutsideAngular(async () => {
    console.log('FeaturitService: init()', 'start');
    await this.featurit.init();
    console.log('FeaturitService: init()', 'end');
    // });
  }

  async refresh() {
    console.log('FeaturitService: ', `refresh()`);
    await this.featurit.refresh();
  }

  isActive(featureName: string): boolean {
    console.log('FeaturitService: ', `isActive(${featureName})`);
    return this.featurit.isActive(featureName);
  }

  version(featureName: string): string {
    console.log('FeaturitService: ', `version(${featureName})`);
    return this.featurit.version(featureName);
  }

  getUserContext(): FeaturitUserContext {
    console.log('FeaturitService: ', `getUserContext()`);
    return this.featurit.getUserContext();
  }

  setUserContext(featuritUserContext: { userId: string, sessionId: string, ipAddress: string, customAttributes?: { [name: string]: string | number } }): void {
    console.log('FeaturitService: ', `setUserContext(${JSON.stringify(featuritUserContext)})`);
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
        console.log('FeaturitService: ', `Checking for new changes on feature ${featureFlag.name}`);
        if (JSON.stringify(featureFlag) != JSON.stringify(newFeatureFlag)) {
          console.log('FeaturitService: ', `Changes detected on feature ${featureFlag.name}, notifying observers`);
          observer.next(newFeatureFlag);
        }
      });
    });
  }
}
