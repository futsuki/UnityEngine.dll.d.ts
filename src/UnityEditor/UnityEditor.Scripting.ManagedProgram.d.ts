declare namespace UnityEditor.Scripting {
  class ManagedProgram {
    // constructors
    constructor(monodistribution: string, profile: string, executable: string, arguments_: string, setupStartInfo: any);
    constructor(monodistribution: string, profile: string, executable: string, arguments_: string, setMonoEnvironmentVariables: boolean, setupStartInfo: any);
    // methods
    Start(): void;
    GetProcessStartInfo(): any;
    LogProcessStartInfo(): void;
    GetAllOutput(): string;
    Dispose(): void;
    Kill(): void;
    GetStandardInput(): any;
    GetStandardOutput(): string[];
    GetStandardOutputAsString(): string;
    GetErrorOutput(): string[];
    GetErrorOutputAsString(): string;
    WaitForExit(): void;
    WaitForExit(milliseconds: number): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly HasExited: boolean;
    readonly ExitCode: number;
    readonly Id: number;
    // fields
    _process: any;
  }
}
