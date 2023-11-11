"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFeaturitUserContextProvider = void 0;
var default_featurit_user_context_1 = require("./default-featurit-user-context");
var DefaultFeaturitUserContextProvider = /** @class */ (function () {
    function DefaultFeaturitUserContextProvider(featuritUserContext) {
        if (featuritUserContext === void 0) { featuritUserContext = new default_featurit_user_context_1.DefaultFeaturitUserContext(); }
        this.featuritUserContext = featuritUserContext;
        this.featuritUserContext = featuritUserContext;
    }
    DefaultFeaturitUserContextProvider.prototype.getUserContext = function () {
        return this.featuritUserContext;
    };
    return DefaultFeaturitUserContextProvider;
}());
exports.DefaultFeaturitUserContextProvider = DefaultFeaturitUserContextProvider;
//# sourceMappingURL=default-featurit-user-context-provider.js.map