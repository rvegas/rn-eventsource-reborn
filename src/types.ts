export type Headers = Record<string, string>;

export type EventSourceInitDict = EventSourceInit & {
    headers: Headers,
}

export enum EventSourceState {
    CONNECTING = 0,
    OPEN,
    CLOSED,
}

export enum EventSourceEvent {
    ERROR = 'error',
    MESSAGE = 'message',
    OPEN = 'open',
    STATE = 'state',
}

export interface ExtendedEventSource extends EventSource {
    setTrackingName(trackingName: string): this;

    connect(): void;
    reconnect(reason?: string): void;
    changeReadyState(state: EventSourceState): void;
}

export enum NetworkingListeners {
    DidReceiveNetworkResponse = 'didReceiveNetworkResponse',
    DidReceiveNetworkIncrementalData = 'didReceiveNetworkIncrementalData',
    DidCompleteNetworkResponse = 'didCompleteNetworkResponse',
}

export type DidReceiveNetworkResponse = [
    number,
    number,
    Headers,
    string,
];

export type DidReceiveNetworkIncrementalData = [
    number,
    string,
    number,
    number,
]

export type DidCompleteNetworkResponse = [
    number,
    string,
    boolean,
]

export declare class RNEventSource extends EventSource implements ExtendedEventSource {
    setTrackingName(trackingName: string): this;

    connect(): void;
    reconnect(reason?: string): void;
    changeReadyState(state: EventSourceState): void;
    test(): void;
};