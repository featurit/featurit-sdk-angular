# FeaturIT SDK for Javascript/Typescript (Browser version)

Javascript/Typescript client for the FeaturIT Feature Flag management platform.

## Description

This package aims to simplify the integration of the FeaturIT API in a frontend project.

## Getting started

### Dependencies

* fetch
* setInterval
* Object.fromEntries

### Installing

In your package.json directory run

`npm install featurit-sdk-js-browser --save`

### Basic Usage

```javascript
const featurit = new Featurit({
    tenantIdentifier: "my-tenant-subdomain",
    frontendApiKey: "my-frontend-api-key",
    refreshIntervalMinutes: 5,
    sendAnalyticsIntervalMinutes: 1,
    enableAnalytics: true,
});

// Start the syncronization with the FeaturIT API.
await featurit.init(); 

if (featurit.isActive('MY_FEATURE_NAME')) {
    my_feature_code();
}
```

### Segmentation Usage

This is useful when you want to show different versions of your features
to your users depending on certain attributes.

```javascript
// First we define our UserContext with the attributes 
// we have available in our application.
const myFeaturitUserContext = new DefaultFeaturitUserContext(
    'my-user-id',
    'my-session-id',
    'my-ip-address',
    new Map([
        ['role', 'ADMIN'],
        ['email', 'featurit.tech@gmail.com'],
    ])
);

// Then we can pass it to the Featurit client constructor.
const featurit = new Featurit({
    tenantIdentifier: "my-tenant-subdomain",
    frontendApiKey: "my-frontend-api-key",
    featuritUserContext: myFeaturitUserContext,
    refreshIntervalMinutes: 5,
    sendAnalyticsIntervalMinutes: 1,
    enableAnalytics: true,
});

// Alternatively, we can pass it after constructing
// the Featurit client.

// We should always set the user context before calling
// the init() method.
featurit.setUserContext(myFeaturitUserContext);

// Start the syncronization with the FeaturIT API.
await featurit.init(); 

if (featurit.isActive('MY_FEATURE_NAME')) {
    if (featurit.version('MY_FEATURE_NAME') == 'v1') {
        my_feature_v1_code();
    } else if (featurit.version('MY_FEATURE_NAME') == 'v2') {
        my_feature_v2_code();
    }
}
```

### Creating a UserContextProvider

In some cases you want to fill the UserContext data once and
forget about it when checking for feature flags.

If that is your case you can implement your own UserContextProvider
and pass it to the Featurit client constructor.

```typescript
// In Typescript
class MyFeaturitUserContextProvider 
    implements FeaturitUserContextProvider {
    
    getContext(): FeaturitUserContext {
        contextData = get_my_context_data();
        
        return new DefaultFeaturitUserContext(
            contextData['userId'],
            contextData['sessionId'],
            contextData['ipAddress'],
            new Map([
                ['role', contextData['role']],
                ['email', contextData['email']],
            ])
        );
    }
}

// In Javascript
class MyFeaturitUserContextProvider {

    getContext() {
        contextData = get_my_context_data();

        return new DefaultFeaturitUserContext(
            contextData['userId'],
            contextData['sessionId'],
            contextData['ipAddress'],
            new Map([
                ['role', contextData['role']],
                ['email', contextData['email']],
            ])
        );
    }
}
```