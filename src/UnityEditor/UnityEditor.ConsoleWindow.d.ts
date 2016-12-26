declare namespace UnityEditor {
  class ConsoleWindow {
    // constructors
    constructor();
    // methods
    static ShowConsoleWindow(immediate: boolean): void;
    static LogChanged(): void;
    DoLogChanged(): void;
    static GetConsoleErrorPause(): boolean;
    static SetConsoleErrorPause(enabled: boolean): void;
    ToggleLogStackTraces(userData: any): void;
    ToggleLogStackTracesForAll(userData: any): void;
    AddItemsToMenu(menu: UnityEditor.GenericMenu): void;
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
