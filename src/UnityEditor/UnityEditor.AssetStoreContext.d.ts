declare namespace UnityEditor {
  class AssetStoreContext {
    // constructors
    constructor();
    // methods
    static SessionSetString(key: string, value: string): any;
    static SessionGetString(key: string): string;
    static SessionRemoveString(key: string): any;
    static SessionHasString(key: string): boolean;
    static GetInstance(): UnityEditor.AssetStoreContext;
    GetInitialOpenURL(): string;
    GetAuthToken(): string;
    GetLicenseFlags(): number[];
    GetString(key: string): string;
    GetInt(key: string): number;
    GetFloat(key: string): number;
    SetString(key: string, value: string): any;
    SetInt(key: string, value: number): any;
    SetFloat(key: string, value: number): any;
    HasKey(key: string): boolean;
    DeleteKey(key: string): any;
    GetSkinIndex(): number;
    GetDockedStatus(): boolean;
    OpenPackage(id: string): boolean;
    OpenPackage(id: string, action: string): boolean;
    static OpenPackageInternal(id: string): boolean;
    OpenBrowser(url: string): any;
    Download(package_: UnityEditor.AssetStoreContext.Package, downloadInfo: UnityEditor.AssetStoreContext.DownloadInfo): any;
    static Download(package_id: string, url: string, key: string, package_name: string, publisher_name: string, category_name: string, doneCallback: UnityEditor.AssetStoreUtils.DownloadDoneCallback): any;
    static PackageStorePath(publisher_name: string, category_name: string, package_name: string, package_id: string, url: string): string[];
    GetPackageList(): UnityEditor.AssetStoreContext.PackageList;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}