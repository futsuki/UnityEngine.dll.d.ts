declare namespace UnityEditor.AssetsTreeViewDataSource {
  class NonFolderTreeItem {
    // constructors
    constructor(id: number, depth: number, parent: UnityEditor.IMGUI.Controls.TreeViewItem, displayName: string);
    // methods
    CompareTo(other: UnityEditor.IMGUI.Controls.TreeViewItem): number;
    ToString(): string;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    // properties
    id: number;
    displayName: string;
    depth: number;
    readonly hasChildren: boolean;
    children: any;
    parent: UnityEditor.IMGUI.Controls.TreeViewItem;
    icon: any;
    // fields
  }
}
