export declare const BASE_ATTRIBUTE: {
    USER_ID: string;
    SESSION_ID: string;
    IP_ADDRESS: string;
};
export interface FeaturitUserContext {
    getUserId: () => string | null;
    getSessionId: () => string | null;
    getIpAddress: () => string | null;
    getCustomAttributes: () => Map<string, any>;
    hasCustomAttribute: (attributeName: string) => boolean;
    getCustomAttribute: (attributeName: string) => any | null;
    getAttribute: (attributeName: string) => any | null;
    toArray: () => string[];
}
//# sourceMappingURL=featurit-user-context.d.ts.map