declare namespace SimpleJson.Reflection.ReflectionUtils {
  class GetDelegate {
    // constructors
    constructor(object: any, method: any);
    // methods
    Invoke(source: any): any;
    BeginInvoke(source: any, callback: any, object: any): any;
    EndInvoke(result: any): any;
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
