import { ModuleWithProviders, NgModule } from '@angular/core';
import { FeaturitService } from "./featurit-sdk-angular.service";
import { FeaturitSetup } from "featurit-sdk-js-browser";

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
          provide: 'config',
          useValue: config,
        }
      ]
    };
  }
}
