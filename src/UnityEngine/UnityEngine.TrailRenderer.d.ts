declare namespace UnityEngine {
  class TrailRenderer {
    // constructors
    constructor();
    // methods
    Clear(): void;
    SetPropertyBlock(properties: UnityEngine.MaterialPropertyBlock): void;
    GetPropertyBlock(dest: UnityEngine.MaterialPropertyBlock): void;
    GetClosestReflectionProbes(result: any): void;
    GetComponent(type: any): UnityEngine.Component;
    GetComponent(type: string): UnityEngine.Component;
    GetComponentInChildren(t: any, includeInactive: boolean): UnityEngine.Component;
    GetComponentInChildren(t: any): UnityEngine.Component;
    GetComponentsInChildren(t: any): UnityEngine.Component[];
    GetComponentsInChildren(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponentInParent(t: any): UnityEngine.Component;
    GetComponentsInParent(t: any): UnityEngine.Component[];
    GetComponentsInParent(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponents(type: any): UnityEngine.Component[];
    GetComponents(type: any, results: any): void;
    CompareTag(tag: string): boolean;
    SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessageUpwards(methodName: string, value: any): void;
    SendMessageUpwards(methodName: string): void;
    SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): void;
    SendMessage(methodName: string, value: any): void;
    SendMessage(methodName: string): void;
    SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): void;
    BroadcastMessage(methodName: string, parameter: any): void;
    BroadcastMessage(methodName: string): void;
    BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    time: number;
    startWidth: number;
    endWidth: number;
    widthCurve: UnityEngine.AnimationCurve;
    widthMultiplier: number;
    startColor: UnityEngine.Color;
    endColor: UnityEngine.Color;
    colorGradient: UnityEngine.Gradient;
    autodestruct: boolean;
    numCornerVertices: number;
    numCapVertices: number;
    minVertexDistance: number;
    textureMode: UnityEngine.LineTextureMode;
    readonly isPartOfStaticBatch: boolean;
    readonly worldToLocalMatrix: UnityEngine.Matrix4x4;
    readonly localToWorldMatrix: UnityEngine.Matrix4x4;
    enabled: boolean;
    shadowCastingMode: UnityEngine.Rendering.ShadowCastingMode;
    castShadows: boolean;
    receiveShadows: boolean;
    material: UnityEngine.Material;
    sharedMaterial: UnityEngine.Material;
    materials: UnityEngine.Material[];
    sharedMaterials: UnityEngine.Material[];
    readonly bounds: UnityEngine.Bounds;
    lightmapIndex: number;
    realtimeLightmapIndex: number;
    lightmapScaleOffset: UnityEngine.Vector4;
    motionVectorGenerationMode: UnityEngine.MotionVectorGenerationMode;
    realtimeLightmapScaleOffset: UnityEngine.Vector4;
    readonly isVisible: boolean;
    useLightProbes: boolean;
    lightProbeUsage: UnityEngine.Rendering.LightProbeUsage;
    lightProbeProxyVolumeOverride: UnityEngine.GameObject;
    probeAnchor: UnityEngine.Transform;
    reflectionProbeUsage: UnityEngine.Rendering.ReflectionProbeUsage;
    sortingLayerName: string;
    sortingLayerID: number;
    sortingOrder: number;
    lightmapTilingOffset: UnityEngine.Vector4;
    lightProbeAnchor: UnityEngine.Transform;
    readonly transform: UnityEngine.Transform;
    readonly gameObject: UnityEngine.GameObject;
    tag: string;
    readonly rigidbody: UnityEngine.Component;
    readonly rigidbody2D: UnityEngine.Component;
    readonly camera: UnityEngine.Component;
    readonly light: UnityEngine.Component;
    readonly animation: UnityEngine.Component;
    readonly constantForce: UnityEngine.Component;
    readonly renderer: UnityEngine.Component;
    readonly audio: UnityEngine.Component;
    readonly guiText: UnityEngine.Component;
    readonly networkView: UnityEngine.Component;
    readonly guiElement: UnityEngine.Component;
    readonly guiTexture: UnityEngine.Component;
    readonly collider: UnityEngine.Component;
    readonly collider2D: UnityEngine.Component;
    readonly hingeJoint: UnityEngine.Component;
    readonly particleEmitter: UnityEngine.Component;
    readonly particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}
