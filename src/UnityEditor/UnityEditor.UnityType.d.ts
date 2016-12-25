declare namespace UnityEditor {
  class UnityType {
    // constructors
    constructor();
    // methods
    IsDerivedFrom(baseClass: UnityEditor.UnityType): boolean;
    static FindTypeByPersistentTypeID(id: number): UnityEditor.UnityType;
    static FindTypeByName(name: string): UnityEditor.UnityType;
    static FindTypeByNameCaseInsensitive(name: string): UnityEditor.UnityType;
    static GetTypes(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly name: string;
    readonly nativeNamespace: string;
    readonly persistentTypeID: number;
    readonly baseClass: UnityEditor.UnityType;
    readonly flags: UnityEditor.UnityTypeFlags;
    readonly isAbstract: boolean;
    readonly isSealed: boolean;
    readonly isEditorOnly: boolean;
    readonly isDeprecated: boolean;
    readonly qualifiedName: string;
    readonly hasNativeNamespace: boolean;
    // fields
  }
}