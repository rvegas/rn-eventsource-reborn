var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./RNEventSource", "./types"], function (require, exports, RNEventSource_1, types_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EventSourceState = exports.EventSourceEvent = exports.RNEventSource = void 0;
    RNEventSource_1 = __importDefault(RNEventSource_1);
    exports.RNEventSource = RNEventSource_1.default;
    Object.defineProperty(exports, "EventSourceEvent", { enumerable: true, get: function () { return types_1.EventSourceEvent; } });
    Object.defineProperty(exports, "EventSourceState", { enumerable: true, get: function () { return types_1.EventSourceState; } });
});
