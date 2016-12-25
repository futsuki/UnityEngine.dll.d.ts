declare namespace UnityEditorInternal {
  class AudioProfilerClipViewBackend {
    // constructors
    constructor(state: UnityEditorInternal.AudioProfilerClipTreeViewState);
    // methods
    SetData(data: any): any;
    UpdateSorting(): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly items: any;
    // fields
    OnUpdate: UnityEditorInternal.AudioProfilerClipViewBackend.DataUpdateDelegate;
    m_TreeViewState: UnityEditorInternal.AudioProfilerClipTreeViewState;
  }
}