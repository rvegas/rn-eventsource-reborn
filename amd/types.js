define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NetworkingListeners = exports.EventSourceEvent = exports.EventSourceState = void 0;
    var EventSourceState;
    (function (EventSourceState) {
        EventSourceState[EventSourceState["CONNECTING"] = 0] = "CONNECTING";
        EventSourceState[EventSourceState["OPEN"] = 1] = "OPEN";
        EventSourceState[EventSourceState["CLOSED"] = 2] = "CLOSED";
    })(EventSourceState = exports.EventSourceState || (exports.EventSourceState = {}));
    var EventSourceEvent;
    (function (EventSourceEvent) {
        EventSourceEvent["ERROR"] = "error";
        EventSourceEvent["MESSAGE"] = "message";
        EventSourceEvent["OPEN"] = "open";
        EventSourceEvent["STATE"] = "state";
    })(EventSourceEvent = exports.EventSourceEvent || (exports.EventSourceEvent = {}));
    var NetworkingListeners;
    (function (NetworkingListeners) {
        NetworkingListeners["DidReceiveNetworkResponse"] = "didReceiveNetworkResponse";
        NetworkingListeners["DidReceiveNetworkIncrementalData"] = "didReceiveNetworkIncrementalData";
        NetworkingListeners["DidCompleteNetworkResponse"] = "didCompleteNetworkResponse";
    })(NetworkingListeners = exports.NetworkingListeners || (exports.NetworkingListeners = {}));
});
