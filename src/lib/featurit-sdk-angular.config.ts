import { InjectionToken } from '@angular/core';
import { FeaturitSetup } from 'featurit-sdk-js-browser';

/**
 * Injection token for Featurit configuration
 */
export const FEATURIT_CONFIG = new InjectionToken<FeaturitSetup>('featurit.config');

/**
 * Type alias for Featurit configuration
 */
export type FeaturitConfig = FeaturitSetup;
