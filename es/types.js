export var EventSourceState;
(function (EventSourceState) {
    EventSourceState[EventSourceState["CONNECTING"] = 0] = "CONNECTING";
    EventSourceState[EventSourceState["OPEN"] = 1] = "OPEN";
    EventSourceState[EventSourceState["CLOSED"] = 2] = "CLOSED";
})(EventSourceState || (EventSourceState = {}));
export var EventSourceEvent;
(function (EventSourceEvent) {
    EventSourceEvent["ERROR"] = "error";
    EventSourceEvent["MESSAGE"] = "message";
    EventSourceEvent["OPEN"] = "open";
    EventSourceEvent["STATE"] = "state";
})(EventSourceEvent || (EventSourceEvent = {}));
export var NetworkingListeners;
(function (NetworkingListeners) {
    NetworkingListeners["DidReceiveNetworkResponse"] = "didReceiveNetworkResponse";
    NetworkingListeners["DidReceiveNetworkIncrementalData"] = "didReceiveNetworkIncrementalData";
    NetworkingListeners["DidCompleteNetworkResponse"] = "didCompleteNetworkResponse";
})(NetworkingListeners || (NetworkingListeners = {}));
;
