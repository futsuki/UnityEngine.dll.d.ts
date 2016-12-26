declare namespace UnityEditor {
  class ProjectBrowserColumnOneTreeViewGUI {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController);
    // methods
    GetTotalSize(): any;
    GetRowRect(row: number, rowWidth: number): any;
    GetNumRowsOnPageUpDown(fromItem: UnityEditor.IMGUI.Controls.TreeViewItem, pageUp: boolean, heightOfTreeView: number): number;
    GetFirstAndLastRowVisible(firstRowVisible: any, lastRowVisible: any): void;
    OnRowGUI(rowRect: any, item: UnityEditor.IMGUI.Controls.TreeViewItem, row: number, selected: boolean, focused: boolean): void;
    static GetListAreaGridSize(): number;
    BeginRowGUI(): void;
    BeginCreateNewAsset(instanceID: number, endAction: UnityEditor.ProjectWindowCallback.EndNameEditAction, pathName: string, icon: any, resourceFile: string): void;
    OnInitialize(): void;
    EndRowGUI(): void;
    GetRenameRect(rowRect: any, row: number, item: UnityEditor.IMGUI.Controls.TreeViewItem): any;
    GetRectForFraming(row: number): any;
    BeginPingItem(item: UnityEditor.IMGUI.Controls.TreeViewItem, topPixelOfRow: number, availableWidth: number): void;
    EndPingItem(): void;
    BeginRename(item: UnityEditor.IMGUI.Controls.TreeViewItem, delay: number): boolean;
    EndRename(): void;
    DoRenameOverlay(): void;
    GetFoldoutIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    GetContentIndent(item: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    iconLeftPadding: number;
    iconRightPadding: number;
    readonly iconTotalPadding: number;
    iconOverlayGUI: any;
    readonly indentWidth: number;
    readonly halfDropBetweenHeight: number;
    readonly topRowMargin: number;
    readonly bottomRowMargin: number;
    // fields
    k_LineHeight: number;
    k_BaseIndent: number;
    k_IndentWidth: number;
    k_IconWidth: number;
    k_SpaceBetweenIconAndText: number;
    k_TopRowMargin: number;
    k_BottomRowMargin: number;
    k_HalfDropBetweenHeight: number;
    foldoutYOffset: number;
    extraInsertionMarkerIndent: number;
  }
}
