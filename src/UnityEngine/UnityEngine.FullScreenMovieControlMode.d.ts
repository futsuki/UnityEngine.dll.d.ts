declare namespace UnityEngine {
  class FullScreenMovieControlMode {
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
    static Full: UnityEngine.FullScreenMovieControlMode;
    static Minimal: UnityEngine.FullScreenMovieControlMode;
    static CancelOnInput: UnityEngine.FullScreenMovieControlMode;
    static Hidden: UnityEngine.FullScreenMovieControlMode;
  }
}