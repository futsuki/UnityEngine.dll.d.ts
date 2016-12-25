declare namespace UnityEditor {
  class PreviewResizer {
    // constructors
    constructor();
    // methods
    Init(prefName: string): any;
    ResizeHandle(windowPosition: any, minSize: number, minRemainingSize: number, resizerHeight: number): number;
    ResizeHandle(windowPosition: any, minSize: number, minRemainingSize: number, resizerHeight: number, dragRect: any): number;
    GetExpanded(): boolean;
    GetPreviewSize(): number;
    GetExpandedBeforeDragging(): boolean;
    SetExpanded(expanded: boolean): any;
    ToggleExpanded(): any;
    static PixelPreciseCollapsibleSlider(id: number, position: any, value: number, min: number, max: number, expanded: any): number;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
