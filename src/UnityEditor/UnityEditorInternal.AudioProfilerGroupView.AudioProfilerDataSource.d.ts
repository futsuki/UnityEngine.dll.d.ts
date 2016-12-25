declare namespace UnityEditorInternal.AudioProfilerGroupView {
  class AudioProfilerDataSource {
    // constructors
    constructor(treeView: UnityEditor.IMGUI.Controls.TreeViewController, backend: UnityEditorInternal.AudioProfilerGroupViewBackend);
    // methods
    FetchData(): any;
    CanBeParent(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsRenamingItemAllowed(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    OnInitialize(): any;
    ReloadData(): any;
    FindItem(id: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    IsRevealed(id: number): boolean;
    RevealItem(id: number): any;
    OnSearchChanged(): any;
    GetRow(id: number): number;
    GetItem(row: number): UnityEditor.IMGUI.Controls.TreeViewItem;
    GetRows(): any;
    InitIfNeeded(): any;
    GetExpandedIDs(): number[];
    SetExpandedIDs(ids: number[]): any;
    IsExpanded(id: number): boolean;
    SetExpanded(id: number, expand: boolean): boolean;
    SetExpandedWithChildren(id: number, expand: boolean): any;
    SetExpandedWithChildren(fromItem: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): any;
    SetExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem, expand: boolean): any;
    IsExpanded(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    IsExpandable(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    CanBeMultiSelected(item: UnityEditor.IMGUI.Controls.TreeViewItem): boolean;
    OnExpandedStateChanged(): any;
    InsertFakeItem(id: number, parentID: number, name: string, icon: any): any;
    HasFakeItem(): boolean;
    RemoveFakeItem(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    showRootItem: boolean;
    rootIsCollapsable: boolean;
    alwaysAddFirstItemToSearchResult: boolean;
    readonly root: UnityEditor.IMGUI.Controls.TreeViewItem;
    readonly rowCount: number;
    // fields
    onVisibleRowsChanged: any;
  }
}
