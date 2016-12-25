declare namespace UnityEngine {
  class Rigidbody {
    // constructors
    constructor();
    // methods
    SetDensity(density: number): any;
    AddForce(force: UnityEngine.Vector3, mode: UnityEngine.ForceMode): any;
    AddForce(force: UnityEngine.Vector3): any;
    AddForce(x: number, y: number, z: number): any;
    AddForce(x: number, y: number, z: number, mode: UnityEngine.ForceMode): any;
    AddRelativeForce(force: UnityEngine.Vector3, mode: UnityEngine.ForceMode): any;
    AddRelativeForce(force: UnityEngine.Vector3): any;
    AddRelativeForce(x: number, y: number, z: number): any;
    AddRelativeForce(x: number, y: number, z: number, mode: UnityEngine.ForceMode): any;
    AddTorque(torque: UnityEngine.Vector3, mode: UnityEngine.ForceMode): any;
    AddTorque(torque: UnityEngine.Vector3): any;
    AddTorque(x: number, y: number, z: number): any;
    AddTorque(x: number, y: number, z: number, mode: UnityEngine.ForceMode): any;
    AddRelativeTorque(torque: UnityEngine.Vector3, mode: UnityEngine.ForceMode): any;
    AddRelativeTorque(torque: UnityEngine.Vector3): any;
    AddRelativeTorque(x: number, y: number, z: number): any;
    AddRelativeTorque(x: number, y: number, z: number, mode: UnityEngine.ForceMode): any;
    AddForceAtPosition(force: UnityEngine.Vector3, position: UnityEngine.Vector3, mode: UnityEngine.ForceMode): any;
    AddForceAtPosition(force: UnityEngine.Vector3, position: UnityEngine.Vector3): any;
    AddExplosionForce(explosionForce: number, explosionPosition: UnityEngine.Vector3, explosionRadius: number, upwardsModifier: number, mode: UnityEngine.ForceMode): any;
    AddExplosionForce(explosionForce: number, explosionPosition: UnityEngine.Vector3, explosionRadius: number, upwardsModifier: number): any;
    AddExplosionForce(explosionForce: number, explosionPosition: UnityEngine.Vector3, explosionRadius: number): any;
    ClosestPointOnBounds(position: UnityEngine.Vector3): UnityEngine.Vector3;
    GetRelativePointVelocity(relativePoint: UnityEngine.Vector3): UnityEngine.Vector3;
    GetPointVelocity(worldPoint: UnityEngine.Vector3): UnityEngine.Vector3;
    MovePosition(position: UnityEngine.Vector3): any;
    MoveRotation(rot: UnityEngine.Quaternion): any;
    Sleep(): any;
    IsSleeping(): boolean;
    WakeUp(): any;
    ResetCenterOfMass(): any;
    ResetInertiaTensor(): any;
    SweepTest(direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): boolean;
    SweepTest(direction: UnityEngine.Vector3, hitInfo: any, maxDistance: number): boolean;
    SweepTest(direction: UnityEngine.Vector3, hitInfo: any): boolean;
    SweepTestAll(direction: UnityEngine.Vector3, maxDistance: number, queryTriggerInteraction: UnityEngine.QueryTriggerInteraction): UnityEngine.RaycastHit[];
    SweepTestAll(direction: UnityEngine.Vector3, maxDistance: number): UnityEngine.RaycastHit[];
    SweepTestAll(direction: UnityEngine.Vector3): UnityEngine.RaycastHit[];
    SetMaxAngularVelocity(a: number): any;
    GetComponent(type: any): UnityEngine.Component;
    GetComponent(type: string): UnityEngine.Component;
    GetComponentInChildren(t: any, includeInactive: boolean): UnityEngine.Component;
    GetComponentInChildren(t: any): UnityEngine.Component;
    GetComponentsInChildren(t: any): UnityEngine.Component[];
    GetComponentsInChildren(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponentInParent(t: any): UnityEngine.Component;
    GetComponentsInParent(t: any): UnityEngine.Component[];
    GetComponentsInParent(t: any, includeInactive: boolean): UnityEngine.Component[];
    GetComponents(type: any): UnityEngine.Component[];
    GetComponents(type: any, results: any): any;
    CompareTag(tag: string): boolean;
    SendMessageUpwards(methodName: string, value: any, options: UnityEngine.SendMessageOptions): any;
    SendMessageUpwards(methodName: string, value: any): any;
    SendMessageUpwards(methodName: string): any;
    SendMessageUpwards(methodName: string, options: UnityEngine.SendMessageOptions): any;
    SendMessage(methodName: string, value: any, options: UnityEngine.SendMessageOptions): any;
    SendMessage(methodName: string, value: any): any;
    SendMessage(methodName: string): any;
    SendMessage(methodName: string, options: UnityEngine.SendMessageOptions): any;
    BroadcastMessage(methodName: string, parameter: any, options: UnityEngine.SendMessageOptions): any;
    BroadcastMessage(methodName: string, parameter: any): any;
    BroadcastMessage(methodName: string): any;
    BroadcastMessage(methodName: string, options: UnityEngine.SendMessageOptions): any;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    velocity: UnityEngine.Vector3;
    angularVelocity: UnityEngine.Vector3;
    drag: number;
    angularDrag: number;
    mass: number;
    useGravity: boolean;
    maxDepenetrationVelocity: number;
    isKinematic: boolean;
    freezeRotation: boolean;
    constraints: UnityEngine.RigidbodyConstraints;
    collisionDetectionMode: UnityEngine.CollisionDetectionMode;
    centerOfMass: UnityEngine.Vector3;
    readonly worldCenterOfMass: UnityEngine.Vector3;
    inertiaTensorRotation: UnityEngine.Quaternion;
    inertiaTensor: UnityEngine.Vector3;
    detectCollisions: boolean;
    useConeFriction: boolean;
    position: UnityEngine.Vector3;
    rotation: UnityEngine.Quaternion;
    interpolation: UnityEngine.RigidbodyInterpolation;
    solverIterations: number;
    solverIterationCount: number;
    solverVelocityIterations: number;
    solverVelocityIterationCount: number;
    sleepVelocity: number;
    sleepAngularVelocity: number;
    sleepThreshold: number;
    maxAngularVelocity: number;
    readonly transform: UnityEngine.Transform;
    readonly gameObject: UnityEngine.GameObject;
    tag: string;
    readonly rigidbody: UnityEngine.Component;
    readonly rigidbody2D: UnityEngine.Component;
    readonly camera: UnityEngine.Component;
    readonly light: UnityEngine.Component;
    readonly animation: UnityEngine.Component;
    readonly constantForce: UnityEngine.Component;
    readonly renderer: UnityEngine.Component;
    readonly audio: UnityEngine.Component;
    readonly guiText: UnityEngine.Component;
    readonly networkView: UnityEngine.Component;
    readonly guiElement: UnityEngine.Component;
    readonly guiTexture: UnityEngine.Component;
    readonly collider: UnityEngine.Component;
    readonly collider2D: UnityEngine.Component;
    readonly hingeJoint: UnityEngine.Component;
    readonly particleEmitter: UnityEngine.Component;
    readonly particleSystem: UnityEngine.Component;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}