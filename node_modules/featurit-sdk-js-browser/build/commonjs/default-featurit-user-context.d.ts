import { FeaturitUserContext } from "./featurit-user-context";
export declare class DefaultFeaturitUserContext implements FeaturitUserContext {
    private userId;
    private sessionId;
    private ipAddress;
    private customAttributes;
    constructor(userId?: string | null, sessionId?: string | null, ipAddress?: string | null, customAttributes?: Map<string, any>);
    getUserId(): string | null;
    getSessionId(): string | null;
    getIpAddress(): string | null;
    getCustomAttributes(): Map<string, any>;
    hasCustomAttribute(attributeName: string): boolean;
    getCustomAttribute(attributeName: string): any | null;
    getAttribute(attributeName: string): any | null;
    toArray(): string[];
}
//# sourceMappingURL=default-featurit-user-context.d.ts.map