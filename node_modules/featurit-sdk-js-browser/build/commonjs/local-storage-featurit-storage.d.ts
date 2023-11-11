import { FeaturitStorage } from "./featurit-storage";
export declare class LocalStorageFeaturitStorage implements FeaturitStorage {
    private prefix;
    get(key: string, defaultValue?: string): any | null;
    set(key: string, value: any): void;
    remove(key: string): void;
    private prepareKey;
}
//# sourceMappingURL=local-storage-featurit-storage.d.ts.map