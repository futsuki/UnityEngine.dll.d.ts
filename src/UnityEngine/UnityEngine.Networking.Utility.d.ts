declare namespace UnityEngine.Networking {
  class Utility {
    // constructors
    private constructor();
    // methods
    static GetSourceID(): UnityEngine.Networking.Types.SourceID;
    static SetAppID(newAppID: UnityEngine.Networking.Types.AppID): void;
    static GetAppID(): UnityEngine.Networking.Types.AppID;
    static SetAccessTokenForNetwork(netId: UnityEngine.Networking.Types.NetworkID, accessToken: UnityEngine.Networking.Types.NetworkAccessToken): void;
    static GetAccessTokenForNetwork(netId: UnityEngine.Networking.Types.NetworkID): UnityEngine.Networking.Types.NetworkAccessToken;
    // properties
    // fields
  }
}
