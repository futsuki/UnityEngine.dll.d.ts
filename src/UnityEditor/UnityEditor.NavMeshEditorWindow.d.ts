declare namespace UnityEditor {
  class NavMeshEditorWindow {
    // constructors
    constructor();
    // methods
    static SetupWindow(): any;
    OnEnable(): any;
    OnDisable(): any;
    OnGUI(): any;
    OnBecameVisible(): any;
    OnBecameInvisible(): any;
    OnSceneViewGUI(sceneView: UnityEditor.SceneView): any;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): any;
    static BackgroundTaskStatusChanged(): any;
    BeginWindows(): any;
    EndWindows(): any;
    ShowNotification(notification: any): any;
    RemoveNotification(): any;
    ShowTab(): any;
    Focus(): any;
    ShowUtility(): any;
    ShowPopup(): any;
    ShowAsDropDown(buttonRect: any, windowSize: any): any;
    Show(): any;
    Show(immediateDisplay: boolean): any;
    ShowAuxWindow(): any;
    Close(): any;
    Repaint(): any;
    SendEvent(e: any): boolean;
    SetDirty(): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
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
  }
}
