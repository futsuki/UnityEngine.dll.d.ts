declare namespace UnityEditor.LayerMatrixGUI {
  class SetValueFunc {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(layerA: number, layerB: number, val: boolean): any;
    BeginInvoke(layerA: number, layerB: number, val: boolean, callback: any, object: any): any;
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