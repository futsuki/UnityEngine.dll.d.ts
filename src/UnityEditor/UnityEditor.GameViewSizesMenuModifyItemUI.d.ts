declare namespace UnityEditor {
  class GameViewSizesMenuModifyItemUI {
    // constructors
    constructor();
    // methods
    OnClose(): void;
    GetWindowSize(): any;
    OnGUI(rect: any): void;
    Init(menuType: UnityEditor.FlexibleMenuModifyItemUI.MenuType, obj: any, acceptedCallback: any): void;
    Accepted(): void;
    IsShowing(): boolean;
    OnOpen(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
    m_Object: any;
  }
}
