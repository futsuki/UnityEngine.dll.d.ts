declare namespace UnityEditor.Scripting.Compilers {
  class BooCompiler {
    // constructors
    constructor(island: UnityEditor.Scripting.MonoIsland, runUpdater: boolean);
    // methods
    BeginCompiling(): void;
    Dispose(): void;
    Poll(): boolean;
    GetCompilerMessages(): UnityEditor.Scripting.Compilers.CompilerMessage[];
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
