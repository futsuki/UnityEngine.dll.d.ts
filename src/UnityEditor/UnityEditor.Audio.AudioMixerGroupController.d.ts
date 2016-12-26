declare namespace UnityEditor.Audio {
  class AudioMixerGroupController {
    // constructors
    constructor(owner: any);
    // methods
    PreallocateGUIDs(): void;
    GetGUIDForVolume(): UnityEditor.GUID;
    GetValueForVolume(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController): number;
    SetValueForVolume(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController, value: number): void;
    GetGUIDForPitch(): UnityEditor.GUID;
    GetValueForPitch(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController): number;
    SetValueForPitch(controller: UnityEditor.Audio.AudioMixerController, snapshot: UnityEditor.Audio.AudioMixerSnapshotController, value: number): void;
    HasDependentMixers(): boolean;
    InsertEffect(effect: UnityEditor.Audio.AudioMixerEffectController, index: number): void;
    HasAttenuation(): boolean;
    DumpHierarchy(title: string, level: number): void;
    GetDisplayString(): string;
    ToString(): string;
    GetInstanceID(): number;
    GetHashCode(): number;
    Equals(other: any): boolean;
    GetType(): any;
    // properties
    readonly groupID: UnityEditor.GUID;
    userColorIndex: number;
    readonly controller: UnityEditor.Audio.AudioMixerController;
    children: UnityEditor.Audio.AudioMixerGroupController[];
    effects: UnityEditor.Audio.AudioMixerEffectController[];
    mute: boolean;
    solo: boolean;
    bypassEffects: boolean;
    readonly audioMixer: any;
    name: string;
    hideFlags: any;
    // fields
  }
}
