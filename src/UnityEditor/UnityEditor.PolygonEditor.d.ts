declare namespace UnityEditor {
  class PolygonEditor {
    // constructors
    constructor();
    // methods
    static StartEditing(collider: any): any;
    static ApplyEditing(collider: any): any;
    static StopEditing(): any;
    static GetNearestPoint(point: any, pathIndex: any, pointIndex: any, distance: any): boolean;
    static GetNearestEdge(point: any, pathIndex: any, pointIndex0: any, pointIndex1: any, distance: any, loop: boolean): boolean;
    static GetPathCount(): number;
    static GetPointCount(pathIndex: number): number;
    static GetPoint(pathIndex: number, pointIndex: number, point: any): boolean;
    static SetPoint(pathIndex: number, pointIndex: number, value: any): any;
    static InsertPoint(pathIndex: number, pointIndex: number, value: any): any;
    static RemovePoint(pathIndex: number, pointIndex: number): any;
    static TestPointMove(pathIndex: number, pointIndex: number, movePosition: any, leftIntersect: any, rightIntersect: any, loop: boolean): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
  }
}
