declare namespace UnityEditor.AssetStoreUtils {
  class DownloadDoneCallback {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(package_id: string, message: string, bytes: number, total: number): void;
    BeginInvoke(package_id: string, message: string, bytes: number, total: number, callback: any, object: any): any;
    EndInvoke(result: any): void;
    GetObjectData(info: any, context: any): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetInvocationList(): any[];
    DynamicInvoke(args: any[]): any;
    Clone(): any;
    GetType(): any;
    ToString(): string;
    // properties
    readonly Method: any;
    readonly Target: any;
    // fields
  }
}
