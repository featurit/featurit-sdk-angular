export interface FeaturitStorage {
    get: (key: string, defaultValue?: string) => any | null;
    set: (key: string, value: any) => void;
    remove: (key: string) => void;
}
//# sourceMappingURL=featurit-storage.d.ts.map