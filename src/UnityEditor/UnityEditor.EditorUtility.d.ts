declare namespace UnityEditor {
  class EditorUtility {
    // constructors
    constructor();
    // methods
    static RevealInFinder(path: string): any;
    static SetDirty(target: any): any;
    static LoadWindowLayout(path: string): boolean;
    static IsPersistent(target: any): boolean;
    static DisplayDialog(title: string, message: string, ok: string, cancel: string): boolean;
    static DisplayDialog(title: string, message: string, ok: string): boolean;
    static DisplayDialogComplex(title: string, message: string, ok: string, cancel: string, alt: string): number;
    static OpenFilePanel(title: string, directory: string, extension: string): string;
    static OpenFilePanelWithFilters(title: string, directory: string, filters: string[]): string;
    static SaveFilePanel(title: string, directory: string, defaultName: string, extension: string): string;
    static NaturalCompare(a: string, b: string): number;
    static OpenFolderPanel(title: string, folder: string, defaultName: string): string;
    static SaveFolderPanel(title: string, folder: string, defaultName: string): string;
    static SaveFilePanelInProject(title: string, defaultName: string, extension: string, message: string): string;
    static SaveFilePanelInProject(title: string, defaultName: string, extension: string, message: string, path: string): string;
    static WarnPrefab(target: any, title: string, warning: string, okButton: string): boolean;
    static FindAsset(path: string, type: any): any;
    static InstanceIDToObject(instanceID: number): any;
    static CompressTexture(texture: any, format: any, quality: number): any;
    static CompressTexture(texture: any, format: any, quality: any): any;
    static InvokeDiffTool(leftTitle: string, leftFile: string, rightTitle: string, rightFile: string, ancestorTitle: string, ancestorFile: string): string;
    static CopySerialized(source: any, dest: any): any;
    static CopySerializedIfDifferent(source: any, dest: any): any;
    static GetAssetPath(asset: any): string;
    static CollectDependencies(roots: any[]): any[];
    static CollectDeepHierarchy(roots: any[]): any[];
    static UnloadUnusedAssets(): any;
    static UnloadUnusedAssetsIgnoreManagedReferences(): any;
    static UnloadUnusedAssetsImmediate(): any;
    static UnloadUnusedAssetsImmediate(includeMonoReferencesAsRoots: boolean): any;
    static BuildResourceFile(selection: any[], pathName: string): boolean;
    static DisplayPopupMenu(position: any, menuItemPath: string, command: UnityEditor.MenuCommand): any;
    static DisplayCustomMenu(position: any, options: any[], selected: number, callback: UnityEditor.EditorUtility.SelectMenuItemFunction, userData: any): any;
    static DisplayCustomMenu(position: any, options: any[], selected: number, callback: UnityEditor.EditorUtility.SelectMenuItemFunction, userData: any, showHotkey: boolean): any;
    static FocusProjectWindow(): any;
    static FormatBytes(bytes: number): string;
    static FormatBytes(bytes: number): string;
    static DisplayProgressBar(title: string, info: string, progress: number): any;
    static DisplayCancelableProgressBar(title: string, info: string, progress: number): boolean;
    static ClearProgressBar(): any;
    static GetObjectEnabled(target: any): number;
    static SetObjectEnabled(target: any, enabled: boolean): any;
    static SetSelectedWireframeHidden(renderer: any, enabled: boolean): any;
    static SetSelectedRenderState(renderer: any, renderState: UnityEditor.EditorSelectedRenderState): any;
    static ExtractOggFile(obj: any, path: string): boolean;
    static CreateGameObjectWithHideFlags(name: string, flags: any, components: any[]): any;
    static CompileCSharp(sources: string[], references: string[], defines: string[], outputFile: string): string[];
    static OpenWithDefaultApp(fileName: string): any;
    static InstantiatePrefab(target: any): any;
    static ReplacePrefab(go: any, targetPrefab: any, options: UnityEditor.ReplacePrefabOptions): any;
    static ReplacePrefab(go: any, targetPrefab: any): any;
    static CreateEmptyPrefab(path: string): any;
    static ReconnectToLastPrefab(go: any): boolean;
    static GetPrefabType(target: any): UnityEditor.PrefabType;
    static GetPrefabParent(source: any): any;
    static FindPrefabRoot(source: any): any;
    static ResetToPrefabState(source: any): boolean;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    static audioMasterMute: boolean;
    // fields
  }
}