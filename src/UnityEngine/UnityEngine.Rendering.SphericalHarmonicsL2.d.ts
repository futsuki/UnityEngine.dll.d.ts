declare namespace UnityEngine.Rendering {
  class SphericalHarmonicsL2 {
    // constructors
    private constructor();
    // methods
    Clear(): any;
    AddAmbientLight(color: UnityEngine.Color): any;
    AddDirectionalLight(direction: UnityEngine.Vector3, color: UnityEngine.Color, intensity: number): any;
    GetHashCode(): number;
    Equals(other: any): boolean;
    ToString(): string;
    GetType(): any;
    // properties
    get_Item(rgb: number, coefficient: number): number;
    set_Item(rgb: number, coefficient: number, value: number): any;
    // fields
  }
}
