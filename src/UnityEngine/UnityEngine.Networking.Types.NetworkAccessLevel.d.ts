declare namespace UnityEngine.Networking.Types {
  class NetworkAccessLevel {
    // constructors
    private constructor();
    // methods
    GetTypeCode(): any;
    CompareTo(target: any): number;
    ToString(): string;
    ToString(provider: any): string;
    ToString(format: string): string;
    ToString(format: string, provider: any): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    // fields
    value__: number;
    static Invalid: UnityEngine.Networking.Types.NetworkAccessLevel;
    static User: UnityEngine.Networking.Types.NetworkAccessLevel;
    static Owner: UnityEngine.Networking.Types.NetworkAccessLevel;
    static Admin: UnityEngine.Networking.Types.NetworkAccessLevel;
  }
}
