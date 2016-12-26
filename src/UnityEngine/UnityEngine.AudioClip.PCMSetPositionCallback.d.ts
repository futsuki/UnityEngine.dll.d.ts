declare namespace UnityEngine.AudioClip {
  class PCMSetPositionCallback {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(position: number): void;
    BeginInvoke(position: number, callback: any, object: any): any;
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
