declare namespace UnityEngine {
  class CanvasRenderer {
    // constructors
    constructor();
    // methods
    SetColor(color: UnityEngine.Color): void;
    GetColor(): UnityEngine.Color;
    GetAlpha(): number;
    SetAlpha(alpha: number): void;
    SetVertices(vertices: any): void;
    SetVertices(vertices: UnityEngine.UIVertex[], size: number): void;
    EnableRectClipping(rect: UnityEngine.Rect): void;
    DisableRectClipping(): void;
    SetMaterial(material: UnityEngine.Material, index: number): void;
    SetMaterial(material: UnityEngine.Material, texture: UnityEngine.Texture): void;
    GetMaterial(): UnityEngine.Material;
    GetMaterial(index: number): UnityEngine.Material;
    SetPopMaterial(material: UnityEngine.Material, index: number): void;
    GetPopMaterial(index: number): UnityEngine.Material;
    SetTexture(texture: UnityEngine.Texture): void;
    SetAlphaTexture(texture: UnityEngine.Texture): void;
    SetMesh(mesh: UnityEngine.Mesh): void;
    Clear(): void;
    static SplitUIVertexStreams(verts: any, positions: any, colors: any, uv0S: any, uv1S: any, normals: any, tangents: any, indicies: any): void;
    static CreateUIVertexStream(verts: any, positions: any, colors: any, uv0S: any, uv1S: any, normals: any, tangents: any, indicies: any): void;
    static AddUIVertexStream(verts: any, positions: any, colors: any, uv0S: any, uv1S: any, normals: any, tangents: any): void;
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
    isMask: boolean;
    readonly hasRectClipping: boolean;
    hasPopInstruction: boolean;
    materialCount: number;
    popMaterialCount: number;
    readonly relativeDepth: number;
    cull: boolean;
    readonly absoluteDepth: number;
    readonly hasMoved: boolean;
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
