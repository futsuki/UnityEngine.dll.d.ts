declare namespace UnityEditor.NetworkDetailStats {
  class NetworkOperationEntryDetails {
    // constructors
    constructor();
    // methods
    NewProfilerTick(tickId: number): void;
    Clear(): void;
    AddStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, amount: number): void;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    m_EntryName: string;
    m_IncomingTotal: number;
    m_OutgoingTotal: number;
    m_IncomingSequence: UnityEditor.NetworkDetailStats.NetworkStatsSequence;
    m_OutgoingSequence: UnityEditor.NetworkDetailStats.NetworkStatsSequence;
  }
}
