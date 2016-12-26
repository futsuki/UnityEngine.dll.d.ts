declare namespace UnityEditor {
  class AvatarMaskUtility {
    // constructors
    constructor();
    // methods
    static GetAvatarHumanTransform(so: UnityEditor.SerializedObject, refTransformsPath: string[]): string[];
    static UpdateTransformMask(mask: UnityEditor.Animations.AvatarMask, refTransformsPath: string[], humanTransforms: string[]): void;
    static UpdateTransformMask(transformMask: UnityEditor.SerializedProperty, refTransformsPath: string[], humanTransforms: string[]): void;
    static SetActiveHumanTransforms(mask: UnityEditor.Animations.AvatarMask, humanTransforms: string[]): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
