declare namespace UnityEngine {
  class AnimationClip {
    // constructors
    constructor();
    // methods
    SampleAnimation(go: UnityEngine.GameObject, time: number): any;
    SetCurve(relativePath: string, type: any, propertyName: string, curve: UnityEngine.AnimationCurve): any;
    EnsureQuaternionContinuity(): any;
    ClearCurves(): any;
    AddEvent(evt: UnityEngine.AnimationEvent): any;
    ValidateIfRetargetable(val: boolean): boolean;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly length: number;
    frameRate: number;
    wrapMode: UnityEngine.WrapMode;
    localBounds: UnityEngine.Bounds;
    legacy: boolean;
    readonly humanMotion: boolean;
    events: UnityEngine.AnimationEvent[];
    readonly averageDuration: number;
    readonly averageAngularSpeed: number;
    readonly averageSpeed: UnityEngine.Vector3;
    readonly apparentSpeed: number;
    readonly isLooping: boolean;
    readonly isHumanMotion: boolean;
    readonly isAnimatorMotion: boolean;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
