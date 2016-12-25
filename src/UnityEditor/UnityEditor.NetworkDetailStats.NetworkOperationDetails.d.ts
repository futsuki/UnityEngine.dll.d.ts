declare namespace UnityEditor.NetworkDetailStats {
  class NetworkOperationDetails {
    // constructors
    constructor();
    // methods
    NewProfilerTick(tickId: number): any;
    Clear(): any;
    SetStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, entryName: string, amount: number): any;
    IncrementStat(direction: UnityEditor.NetworkDetailStats.NetworkDirection, entryName: string, amount: number): any;
    Equals(obj: any): boolean;
    GetHashCode(): number;
    GetType(): any;
    ToString(): string;
    // properties
    // fields
    MsgId: number;
    totalIn: number;
    totalOut: number;
    m_Entries: any;
  }
}