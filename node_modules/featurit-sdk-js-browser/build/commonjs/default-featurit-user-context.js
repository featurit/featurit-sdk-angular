"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultFeaturitUserContext = void 0;
var featurit_user_context_1 = require("./featurit-user-context");
var DefaultFeaturitUserContext = /** @class */ (function () {
    function DefaultFeaturitUserContext(userId, sessionId, ipAddress, customAttributes) {
        if (userId === void 0) { userId = null; }
        if (sessionId === void 0) { sessionId = null; }
        if (ipAddress === void 0) { ipAddress = null; }
        if (customAttributes === void 0) { customAttributes = new Map(); }
        this.userId = userId;
        this.sessionId = sessionId;
        this.ipAddress = ipAddress;
        this.customAttributes = customAttributes;
    }
    DefaultFeaturitUserContext.prototype.getUserId = function () {
        return this.userId;
    };
    DefaultFeaturitUserContext.prototype.getSessionId = function () {
        return this.sessionId;
    };
    DefaultFeaturitUserContext.prototype.getIpAddress = function () {
        return this.ipAddress;
    };
    DefaultFeaturitUserContext.prototype.getCustomAttributes = function () {
        return this.customAttributes;
    };
    DefaultFeaturitUserContext.prototype.hasCustomAttribute = function (attributeName) {
        return this.customAttributes.has(attributeName);
    };
    DefaultFeaturitUserContext.prototype.getCustomAttribute = function (attributeName) {
        return this.customAttributes.get(attributeName);
    };
    DefaultFeaturitUserContext.prototype.getAttribute = function (attributeName) {
        switch (attributeName) {
            case featurit_user_context_1.BASE_ATTRIBUTE.USER_ID:
                return this.userId;
            case featurit_user_context_1.BASE_ATTRIBUTE.SESSION_ID:
                return this.sessionId;
            case featurit_user_context_1.BASE_ATTRIBUTE.IP_ADDRESS:
                return this.ipAddress;
            default:
                return this.customAttributes.get(attributeName);
        }
    };
    DefaultFeaturitUserContext.prototype.toArray = function () {
        return [];
    };
    return DefaultFeaturitUserContext;
}());
exports.DefaultFeaturitUserContext = DefaultFeaturitUserContext;
//# sourceMappingURL=default-featurit-user-context.js.map