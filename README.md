# Featurit SDK for Angular

Angular wrapper of the Javascript client for the FeaturIT Feature Flag management platform.

## Description

This package aims to simplify the integration of the FeaturIT API in an Angular project.

## Getting started

### Dependencies

* "tslib": "^2.3.0"
* "featurit-sdk-js-browser": "^0.0.4"

### Installing

`npm install featurit-sdk-angular --save`

Inside your app.module.ts add:

```
@NgModule({
  ...,
  imports: [
    ...,
    FeaturitModule.forRoot({
      tenantIdentifier: "your_tenant_subdomain",
      frontendApiKey: "your_frontend_api_key",
      refreshIntervalMinutes: 5,
      enableAnalytics: false,
    }),
  ],
```

### Basic Usage

That's how you would use Featurit in one of your Angular components:

```
featureFlag: FeatureFlag = {
  name: 'Feat',
  active: false,
  version: 'default',
};

constructor(private featurit: FeaturitService) {
  ...
}

async ngOnInit() {
  this.featurit.setUserContext(this.userContext);

  await this.listenFeatureFlag();
}

private async listenFeatureFlag() {
  await this.featurit.init();

  this.featureFlag.active = this.featurit.isActive("YOUR_FEATURE_NAME");
  this.featureFlag.version = this.featurit.version("YOUR_FEATURE_NAME");

  // This part is optional but it will allow for automatic updates 
  // on the application when the feature flag changes 
  // are synced from the server.
  
  this.featurit.onChange(this.featureFlag).subscribe({
    next: (newFeatureFlag: FeatureFlag) => {
      console.log('AngularComponent: ', `Observed change, updating my value to ${JSON.stringify(newFeatureFlag)}`);
      this.featureFlag = newFeatureFlag;
    }
  });
}
```

### Defining your FeaturitUserContext

In order to show different versions of a feature to different users,
Featurit needs to know about the attributes your user has in a certain context.

You can define the context using the as follows:

```
const contextData: FeaturitUserContext = get_your_user_context_data();

this.featurit.setUserContext(contextData);

await this.featurit.refresh();
```

### Authors

FeaturIT

https://www.featurit.com

featurit.tech@gmail.com
