import { ModuleWithProviders, NgModule } from '@angular/core';
import { FeaturitService } from "./featurit-sdk-angular.service";
import { FeaturitSetup } from "featurit-sdk-js-browser";
import { FEATURIT_CONFIG } from './featurit-sdk-angular.config';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  exports: [
  ],
  providers: [
    FeaturitService,
  ],
})
export class FeaturitModule {

  public static forRoot(config: FeaturitSetup): ModuleWithProviders<FeaturitModule> {
    return {
      ngModule: FeaturitModule,
      providers: [
        FeaturitService,
        {
          provide: FEATURIT_CONFIG,
          useValue: config,
        }
      ]
    };
  }
}
