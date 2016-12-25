declare namespace UnityEditor {
  class Texture3DInspector {
    // constructors
    constructor();
    // methods
    OnInspectorGUI(): any;
    GetInfoString(): string;
    OnPreviewSettings(): any;
    OnPreviewGUI(r: any, background: any): any;
    GetMipLevelForRendering(): number;
    HasPreviewGUI(): boolean;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    DrawDefaultInspector(): boolean;
    RequiresConstantRepaint(): boolean;
    Repaint(): any;
    GetPreviewTitle(): any;
    OnInteractivePreviewGUI(r: any, background: any): any;
    ReloadPreviewInstances(): any;
    DrawHeader(): any;
    DrawPreview(previewArea: any): any;
    UseDefaultMargins(): boolean;
    Initialize(targets: any[]): any;
    MoveNextTarget(): boolean;
    ResetTarget(): any;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    mipLevel: number;
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
    m_PreviewDir: any;
  }
}
