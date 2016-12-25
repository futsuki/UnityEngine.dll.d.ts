declare namespace UnityEngine {
  class DrivenTransformProperties {
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
    static None: UnityEngine.DrivenTransformProperties;
    static All: UnityEngine.DrivenTransformProperties;
    static AnchoredPositionX: UnityEngine.DrivenTransformProperties;
    static AnchoredPositionY: UnityEngine.DrivenTransformProperties;
    static AnchoredPositionZ: UnityEngine.DrivenTransformProperties;
    static Rotation: UnityEngine.DrivenTransformProperties;
    static ScaleX: UnityEngine.DrivenTransformProperties;
    static ScaleY: UnityEngine.DrivenTransformProperties;
    static ScaleZ: UnityEngine.DrivenTransformProperties;
    static AnchorMinX: UnityEngine.DrivenTransformProperties;
    static AnchorMinY: UnityEngine.DrivenTransformProperties;
    static AnchorMaxX: UnityEngine.DrivenTransformProperties;
    static AnchorMaxY: UnityEngine.DrivenTransformProperties;
    static SizeDeltaX: UnityEngine.DrivenTransformProperties;
    static SizeDeltaY: UnityEngine.DrivenTransformProperties;
    static PivotX: UnityEngine.DrivenTransformProperties;
    static PivotY: UnityEngine.DrivenTransformProperties;
    static AnchoredPosition: UnityEngine.DrivenTransformProperties;
    static AnchoredPosition3D: UnityEngine.DrivenTransformProperties;
    static Scale: UnityEngine.DrivenTransformProperties;
    static AnchorMin: UnityEngine.DrivenTransformProperties;
    static AnchorMax: UnityEngine.DrivenTransformProperties;
    static Anchors: UnityEngine.DrivenTransformProperties;
    static SizeDelta: UnityEngine.DrivenTransformProperties;
    static Pivot: UnityEngine.DrivenTransformProperties;
  }
}