declare namespace UnityEditor {
  class ParticleSystemUI {
    // constructors
    constructor();
    // methods
    Init(owner: UnityEditor.ParticleEffectUI, ps: any): any;
    GetName(): string;
    GetEmitterDuration(): number;
    OnGUI(root: any, width: number, fixedWidth: boolean): any;
    OnSceneGUI(): any;
    ApplyProperties(): any;
    UpdateProperties(): any;
    static GetUIModuleNames(): string[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_ParticleEffectUI: UnityEditor.ParticleEffectUI;
    m_Modules: UnityEditor.ModuleUI[];
    m_ParticleSystem: any;
    m_ParticleSystemSerializedObject: UnityEditor.SerializedObject;
    m_RendererSerializedObject: UnityEditor.SerializedObject;
  }
}
