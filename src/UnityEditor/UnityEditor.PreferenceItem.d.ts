declare namespace UnityEditor {
  class PreferenceItem {
    // constructors
    constructor(name: string);
    // methods
    GetHashCode(): number;
    IsDefaultAttribute(): boolean;
    Match(obj: any): boolean;
    Equals(obj: any): boolean;
    GetType(): any;
    ToString(): string;
    // properties
    readonly TypeId: any;
    // fields
    name: string;
  }
}