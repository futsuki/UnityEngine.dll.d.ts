declare namespace UnityEngine.Networking.Match {
  class ListMatchResponse {
    // constructors
    constructor();
    constructor(otherMatches: any);
    // methods
    ToString(): string;
    Parse(obj: any): void;
    SetSuccess(): void;
    SetFailure(info: string): void;
    ParseJSONString(name: string, obj: any, dictJsonObj: any): string;
    ParseJSONInt16(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONInt32(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONInt64(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONUInt16(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONUInt32(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONUInt64(name: string, obj: any, dictJsonObj: any): number;
    ParseJSONBool(name: string, obj: any, dictJsonObj: any): boolean;
    ParseJSONDateTime(name: string, obj: any, dictJsonObj: any): any;
    ParseJSONListOfStrings(name: string, obj: any, dictJsonObj: any): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    matches: any;
    readonly success: boolean;
    readonly extendedInfo: string;
    // fields
  }
}
