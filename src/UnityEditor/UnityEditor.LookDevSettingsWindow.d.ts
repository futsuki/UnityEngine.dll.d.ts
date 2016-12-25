declare namespace UnityEditor {
  class LookDevSettingsWindow {
    // constructors
    constructor(lookDevView: UnityEditor.LookDevView);
    // methods
    GetWindowSize(): any;
    OnGUI(rect: any): any;
    OnOpen(): any;
    OnClose(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static readonly styles: UnityEditor.LookDevSettingsWindow.Styles;
    readonly editorWindow: UnityEditor.EditorWindow;
    // fields
  }
}
