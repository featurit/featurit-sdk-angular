import { FeaturitUserContextProvider } from "./featurit-user-context-provider";
import { FeaturitUserContext } from "./featurit-user-context";
export declare class DefaultFeaturitUserContextProvider implements FeaturitUserContextProvider {
    private readonly featuritUserContext;
    constructor(featuritUserContext?: FeaturitUserContext);
    getUserContext(): FeaturitUserContext;
}
//# sourceMappingURL=default-featurit-user-context-provider.d.ts.map