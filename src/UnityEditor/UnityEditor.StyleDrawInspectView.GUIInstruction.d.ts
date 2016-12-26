declare namespace UnityEditor.StyleDrawInspectView {
  class GUIInstruction {
    // constructors
    constructor();
    // methods
    Reset(): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    rect: any;
    usedGUIStyle: any;
    usedGUIContent: any;
    stackframes: UnityEditor.StackFrame[];
  }
}
