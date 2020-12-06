/**
 * Copyright (c) 2020 Adam Chelminski
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */
import { EventSourceInitDict, ExtendedEventSource } from './types';
declare const RNEventSource_base: import("event-target-shim").EventTargetConstructor<{}, {}, "loose">;
/**
 * An RCTNetworking-based implementation of the EventSource web standard.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/EventSource
 *     https://html.spec.whatwg.org/multipage/server-sent-events.html
 *     https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
 */
declare class RNEventSource extends RNEventSource_base implements ExtendedEventSource {
    static CONNECTING: number;
    static OPEN: number;
    static CLOSED: number;
    CONNECTING: number;
    OPEN: number;
    CLOSED: number;
    readyState: number;
    url: string;
    withCredentials: boolean;
    onerror: null;
    onmessage: null;
    onopen: null;
    private _isFirstChunk;
    private _discardNextLineFeed;
    private _lineBuf;
    private _dataBuf;
    private _eventTypeBuf;
    private _lastEventIdBuf;
    private _headers;
    private _lastEventId;
    private _reconnectIntervalMs;
    private _requestId?;
    private _subscriptions;
    private _trackingName;
    private _retryAttempts;
    setTrackingName(trackingName: string): this;
    constructor(url: string, eventSourceInitDict?: EventSourceInitDict);
    close(): void;
    connect(): void;
    reconnect(reason?: string): void;
    changeReadyState(state: number): void;
    private __createSubscriptions;
    private __connect;
    private __reconnect;
    private __changeReadyState;
    private __mergeHeaders;
    private __processEventStreamChunk;
    private __processEventStreamLine;
    private __dispatchBufferedEvent;
    private __didCreateRequest;
    private __didReceiveResponse;
    private __didReceiveIncrementalData;
    private __didCompleteResponse;
}
export default RNEventSource;
