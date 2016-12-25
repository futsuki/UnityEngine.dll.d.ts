declare namespace UnityEditor {
  class MaterialEditor {
    // constructors
    constructor();
    // methods
    SetShader(shader: any): any;
    SetShader(newShader: any, registerUndo: boolean): any;
    Awake(): any;
    OnInspectorGUI(): any;
    PropertiesChanged(): any;
    GetFloat(propertyName: string, hasMixedValue: any): number;
    SetFloat(propertyName: string, value: number): any;
    GetColor(propertyName: string, hasMixedValue: any): any;
    SetColor(propertyName: string, value: any): any;
    GetVector(propertyName: string, hasMixedValue: any): any;
    SetVector(propertyName: string, value: any): any;
    GetTexture(propertyName: string, hasMixedValue: any): any;
    SetTexture(propertyName: string, value: any): any;
    GetTextureScale(propertyName: string, hasMixedValueX: any, hasMixedValueY: any): any;
    GetTextureOffset(propertyName: string, hasMixedValueX: any, hasMixedValueY: any): any;
    SetTextureScale(propertyName: string, value: any, coord: number): any;
    SetTextureOffset(propertyName: string, value: any, coord: number): any;
    RangeProperty(prop: UnityEditor.MaterialProperty, label: string): number;
    RangeProperty(position: any, prop: UnityEditor.MaterialProperty, label: string): number;
    FloatProperty(prop: UnityEditor.MaterialProperty, label: string): number;
    FloatProperty(position: any, prop: UnityEditor.MaterialProperty, label: string): number;
    ColorProperty(prop: UnityEditor.MaterialProperty, label: string): any;
    ColorProperty(position: any, prop: UnityEditor.MaterialProperty, label: string): any;
    VectorProperty(prop: UnityEditor.MaterialProperty, label: string): any;
    VectorProperty(position: any, prop: UnityEditor.MaterialProperty, label: string): any;
    TextureScaleOffsetProperty(property: UnityEditor.MaterialProperty): any;
    TextureScaleOffsetProperty(position: any, property: UnityEditor.MaterialProperty): number;
    TextureScaleOffsetProperty(position: any, property: UnityEditor.MaterialProperty, partOfTexturePropertyControl: boolean): number;
    TextureProperty(prop: UnityEditor.MaterialProperty, label: string): any;
    TextureProperty(prop: UnityEditor.MaterialProperty, label: string, scaleOffset: boolean): any;
    HelpBoxWithButton(messageContent: any, buttonContent: any): boolean;
    TextureCompatibilityWarning(prop: UnityEditor.MaterialProperty): any;
    TexturePropertyMiniThumbnail(position: any, prop: UnityEditor.MaterialProperty, label: string, tooltip: string): any;
    GetTexturePropertyCustomArea(position: any): any;
    TextureProperty(position: any, prop: UnityEditor.MaterialProperty, label: string): any;
    TextureProperty(position: any, prop: UnityEditor.MaterialProperty, label: string, scaleOffset: boolean): any;
    TextureProperty(position: any, prop: UnityEditor.MaterialProperty, label: string, tooltip: string, scaleOffset: boolean): any;
    static TextureScaleOffsetProperty(position: any, scaleOffset: any): any;
    static TextureScaleOffsetProperty(position: any, scaleOffset: any, partOfTexturePropertyControl: boolean): any;
    GetPropertyHeight(prop: UnityEditor.MaterialProperty): number;
    GetPropertyHeight(prop: UnityEditor.MaterialProperty, label: string): number;
    static GetDefaultPropertyHeight(prop: UnityEditor.MaterialProperty): number;
    BeginAnimatedCheck(prop: UnityEditor.MaterialProperty): any;
    EndAnimatedCheck(): any;
    ShaderProperty(prop: UnityEditor.MaterialProperty, label: string): any;
    ShaderProperty(prop: UnityEditor.MaterialProperty, label: any): any;
    ShaderProperty(prop: UnityEditor.MaterialProperty, label: string, labelIndent: number): any;
    ShaderProperty(prop: UnityEditor.MaterialProperty, label: any, labelIndent: number): any;
    ShaderProperty(position: any, prop: UnityEditor.MaterialProperty, label: string): any;
    ShaderProperty(position: any, prop: UnityEditor.MaterialProperty, label: any): any;
    ShaderProperty(position: any, prop: UnityEditor.MaterialProperty, label: string, labelIndent: number): any;
    ShaderProperty(position: any, prop: UnityEditor.MaterialProperty, label: any, labelIndent: number): any;
    LightmapEmissionProperty(): any;
    LightmapEmissionProperty(labelIndent: number): any;
    LightmapEmissionProperty(position: any, labelIndent: number): any;
    DefaultShaderProperty(prop: UnityEditor.MaterialProperty, label: string): any;
    DefaultShaderProperty(position: any, prop: UnityEditor.MaterialProperty, label: string): any;
    RangeProperty(propertyName: string, label: string, v2: number, v3: number): number;
    FloatProperty(propertyName: string, label: string): number;
    ColorProperty(propertyName: string, label: string): any;
    VectorProperty(propertyName: string, label: string): any;
    TextureProperty(propertyName: string, label: string, texDim: UnityEditor.ShaderUtil.ShaderPropertyTexDim): any;
    TextureProperty(propertyName: string, label: string, texDim: UnityEditor.ShaderUtil.ShaderPropertyTexDim, scaleOffset: boolean): any;
    ShaderProperty(shader: any, propertyIndex: number): any;
    static GetMaterialProperties(mats: any[]): UnityEditor.MaterialProperty[];
    static GetMaterialProperty(mats: any[], name: string): UnityEditor.MaterialProperty;
    static GetMaterialProperty(mats: any[], propertyIndex: number): UnityEditor.MaterialProperty;
    static PrepareMaterialPropertiesForAnimationMode(properties: UnityEditor.MaterialProperty[], isMaterialEditable: boolean): any;
    SetDefaultGUIWidths(): any;
    PropertiesGUI(): boolean;
    PropertiesDefaultGUI(props: UnityEditor.MaterialProperty[]): any;
    static ApplyMaterialPropertyDrawers(material: any): any;
    static ApplyMaterialPropertyDrawers(targets: any[]): any;
    RegisterPropertyChangeUndo(label: string): any;
    OnPreviewSettings(): any;
    DefaultPreviewSettingsGUI(): any;
    RenderStaticPreview(assetPath: string, subAssets: any[], width: number, height: number): any;
    HasPreviewGUI(): boolean;
    RequiresConstantRepaint(): boolean;
    OnInteractivePreviewGUI(r: any, background: any): any;
    OnPreviewGUI(r: any, background: any): any;
    DefaultPreviewGUI(r: any, background: any): any;
    OnEnable(): any;
    UndoRedoPerformed(): any;
    OnDisable(): any;
    RenderQueueField(): any;
    RenderQueueField(r: any): any;
    TexturePropertySingleLine(label: any, textureProp: UnityEditor.MaterialProperty): any;
    TexturePropertySingleLine(label: any, textureProp: UnityEditor.MaterialProperty, extraProperty1: UnityEditor.MaterialProperty): any;
    TexturePropertySingleLine(label: any, textureProp: UnityEditor.MaterialProperty, extraProperty1: UnityEditor.MaterialProperty, extraProperty2: UnityEditor.MaterialProperty): any;
    TexturePropertyWithHDRColor(label: any, textureProp: UnityEditor.MaterialProperty, colorProperty: UnityEditor.MaterialProperty, hdrConfig: UnityEditor.ColorPickerHDRConfig, showAlpha: boolean): any;
    TexturePropertyTwoLines(label: any, textureProp: UnityEditor.MaterialProperty, extraProperty1: UnityEditor.MaterialProperty, label2: any, extraProperty2: UnityEditor.MaterialProperty): any;
    static GetRightAlignedFieldRect(r: any): any;
    static GetLeftAlignedFieldRect(r: any): any;
    static GetFlexibleRectBetweenLabelAndField(r: any): any;
    static GetFlexibleRectBetweenFieldAndRightEdge(r: any): any;
    static GetRectAfterLabelWidth(r: any): any;
    DrawDefaultInspector(): boolean;
    Repaint(): any;
    GetPreviewTitle(): any;
    GetInfoString(): string;
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
    readonly isVisible: boolean;
    target: any;
    readonly targets: any[];
    readonly serializedObject: UnityEditor.SerializedObject;
    name: string;
    hideFlags: any;
    // fields
    static kMiniTextureFieldLabelIndentLevel: number;
  }
}