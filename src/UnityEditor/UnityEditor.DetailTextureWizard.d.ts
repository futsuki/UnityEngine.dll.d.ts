declare namespace UnityEditor {
  class DetailTextureWizard {
    // constructors
    constructor();
    // methods
    OnEnable(): void;
    BeginWindows(): void;
    EndWindows(): void;
    ShowNotification(notification: any): void;
    RemoveNotification(): void;
    ShowTab(): void;
    Focus(): void;
    ShowUtility(): void;
    ShowPopup(): void;
    ShowAsDropDown(buttonRect: any, windowSize: any): void;
    Show(): void;
    Show(immediateDisplay: boolean): void;
    ShowAuxWindow(): void;
    Close(): void;
    Repaint(): void;
    SendEvent(e: any): boolean;
    SetDirty(): void;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    helpString: string;
    errorString: string;
    createButtonName: string;
    otherButtonName: string;
    isValid: boolean;
    wantsMouseMove: boolean;
    autoRepaintOnSceneChange: boolean;
    maximized: boolean;
    minSize: any;
    maxSize: any;
    title: string;
    titleContent: any;
    depthBufferBits: number;
    antiAlias: number;
    position: any;
    name: string;
    hideFlags: any;
    // fields
    m_DetailTexture: any;
    m_MinWidth: number;
    m_MaxWidth: number;
    m_MinHeight: number;
    m_MaxHeight: number;
    m_NoiseSpread: number;
    m_HealthyColor: any;
    m_DryColor: any;
    m_Billboard: boolean;
  }
}
