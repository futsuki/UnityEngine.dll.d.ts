declare namespace UnityEditor {
  class AsyncHTTPClient {
    // constructors
    constructor(_toUrl: string);
    constructor(_toUrl: string, _method: string);
    // methods
    static AbortByTag(tag: string): any;
    static CurlRequestCheck(): any;
    Abort(): any;
    IsAborted(): boolean;
    IsDone(): boolean;
    static IsDone(state: UnityEditor.AsyncHTTPClient.State): boolean;
    IsSuccess(): boolean;
    static IsSuccess(state: UnityEditor.AsyncHTTPClient.State): boolean;
    Begin(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly url: string;
    readonly text: string;
    readonly bytes: number[];
    readonly texture: any;
    readonly state: UnityEditor.AsyncHTTPClient.State;
    readonly responseCode: number;
    tag: string;
    // fields
    statusCallback: UnityEditor.AsyncHTTPClient.StatusCallback;
    doneCallback: UnityEditor.AsyncHTTPClient.DoneCallback;
    header: any;
  }
}
