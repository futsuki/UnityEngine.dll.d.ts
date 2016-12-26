declare namespace UnityEngine.VR.WSA.WorldAnchor {
  class OnTrackingChangedDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(self: UnityEngine.VR.WSA.WorldAnchor, located: boolean): void;
    BeginInvoke(self: UnityEngine.VR.WSA.WorldAnchor, located: boolean, callback: any, object: any): any;
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
