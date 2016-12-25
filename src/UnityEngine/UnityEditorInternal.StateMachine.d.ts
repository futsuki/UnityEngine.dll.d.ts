declare namespace UnityEditorInternal {
  class StateMachine {
    // constructors
    constructor();
    // methods
    GetState(index: number): UnityEditorInternal.State;
    AddState(stateName: string): UnityEditorInternal.State;
    GetStateMachine(index: number): UnityEditorInternal.StateMachine;
    AddStateMachine(stateMachineName: string): UnityEditorInternal.StateMachine;
    AddTransition(src: UnityEditorInternal.State, dst: UnityEditorInternal.State): UnityEditorInternal.Transition;
    AddAnyStateTransition(dst: UnityEditorInternal.State): UnityEditorInternal.Transition;
    GetStateMachinePosition(i: number): UnityEngine.Vector3;
    GetTransitionsFromState(srcState: UnityEditorInternal.State): UnityEditorInternal.Transition[];
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    defaultState: UnityEditorInternal.State;
    anyStatePosition: UnityEngine.Vector3;
    parentStateMachinePosition: UnityEngine.Vector3;
    name: string;
    hideFlags: UnityEngine.HideFlags;
    // fields
  }
}