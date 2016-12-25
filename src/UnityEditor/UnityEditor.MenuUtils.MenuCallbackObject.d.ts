declare namespace UnityEditor.MenuUtils {
  class MenuCallbackObject {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    menuItemPath: string;
    temporaryContext: any[];
    onBeforeExecuteCallback: any;
    onAfterExecuteCallback: any;
    userData: number;
  }
}
