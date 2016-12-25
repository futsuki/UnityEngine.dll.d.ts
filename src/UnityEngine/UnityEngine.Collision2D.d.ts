declare namespace UnityEngine {
  class Collision2D {
    // constructors
    constructor();
    // methods
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    readonly enabled: boolean;
    readonly rigidbody: UnityEngine.Rigidbody2D;
    readonly collider: UnityEngine.Collider2D;
    readonly transform: UnityEngine.Transform;
    readonly gameObject: UnityEngine.GameObject;
    readonly contacts: UnityEngine.ContactPoint2D[];
    readonly relativeVelocity: UnityEngine.Vector2;
    // fields
  }
}