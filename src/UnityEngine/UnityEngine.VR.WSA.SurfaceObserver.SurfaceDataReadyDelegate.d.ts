declare namespace UnityEngine.VR.WSA.SurfaceObserver {
  class SurfaceDataReadyDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(bakedData: UnityEngine.VR.WSA.SurfaceData, outputWritten: boolean, elapsedBakeTimeSeconds: number): any;
    BeginInvoke(bakedData: UnityEngine.VR.WSA.SurfaceData, outputWritten: boolean, elapsedBakeTimeSeconds: number, callback: any, object: any): any;
    EndInvoke(result: any): any;
    GetObjectData(info: any, context: any): any;
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