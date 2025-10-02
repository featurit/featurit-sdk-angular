import { Provider } from '@angular/core';
import { FeaturitService } from './featurit-sdk-angular.service';
import { FEATURIT_CONFIG, FeaturitConfig } from './featurit-sdk-angular.config';

/**
 * Functional provider for Featurit SDK
 * @param config Featurit configuration object
 * @returns Array of providers for Featurit SDK
 */
export function provideFeaturit(config: FeaturitConfig): Provider[] {
  return [
    FeaturitService,
    {
      provide: FEATURIT_CONFIG,
      useValue: config,
    },
  ];
}
