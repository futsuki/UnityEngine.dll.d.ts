declare namespace UnityEditor.ShapeEditor {
  class SelectionType {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Normal: UnityEditor.ShapeEditor.SelectionType;
    static Additive: UnityEditor.ShapeEditor.SelectionType;
    static Subtractive: UnityEditor.ShapeEditor.SelectionType;
  }
}
