export declare type Headers = Record<string, string>;
export declare type EventSourceInitDict = EventSourceInit & {
    headers?: Headers;
};
export declare enum EventSourceState {
    CONNECTING = 0,
    OPEN = 1,
    CLOSED = 2
}
export declare enum EventSourceEvent {
    ERROR = "error",
    MESSAGE = "message",
    OPEN = "open",
    STATE = "state"
}
export interface ExtendedEventSource extends EventSource {
    setTrackingName(trackingName: string): this;
    connect(): void;
    reconnect(reason?: string): void;
    changeReadyState(state: EventSourceState): void;
}
export declare enum NetworkingListeners {
    DidReceiveNetworkResponse = "didReceiveNetworkResponse",
    DidReceiveNetworkIncrementalData = "didReceiveNetworkIncrementalData",
    DidCompleteNetworkResponse = "didCompleteNetworkResponse"
}
export declare type DidReceiveNetworkResponse = [
    number,
    number,
    Headers,
    string
];
export declare type DidReceiveNetworkIncrementalData = [
    number,
    string,
    number,
    number
];
export declare type DidCompleteNetworkResponse = [
    number,
    string,
    boolean
];
