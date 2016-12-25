declare namespace UnityEditor.MaterialEditor {
  class PreviewType {
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
    static Mesh: UnityEditor.MaterialEditor.PreviewType;
    static Plane: UnityEditor.MaterialEditor.PreviewType;
    static Skybox: UnityEditor.MaterialEditor.PreviewType;
  }
}
