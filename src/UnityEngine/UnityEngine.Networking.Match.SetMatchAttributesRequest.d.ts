declare namespace UnityEngine.Networking.Match {
  class SetMatchAttributesRequest {
    // constructors
    constructor();
    // methods
    ToString(): string;
    IsValid(): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    networkId: UnityEngine.Networking.Types.NetworkID;
    isListed: boolean;
    version: number;
    sourceId: UnityEngine.Networking.Types.SourceID;
    projectId: string;
    appId: UnityEngine.Networking.Types.AppID;
    accessTokenString: string;
    domain: number;
    // fields
  }
}