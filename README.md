# rn-eventsource-reborn

This package that implements the [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) web standard with **`some improvements`** over forked library using low-level React Native networking primitives.

There are several `EventSource` polyfills today, but none of them satisfy the following three goals:

* Don't depend on the Node.js standard library
    - The Node.js standard library isn't supported by React Native.
* Don't depend on a native module
    - This makes it harder to work with simple Expo-based apps.
* Don't implement with XmlHttpRequest
    - Existing polyfills that use XmlHttpRequest are not optimal for streaming sources because they cache the entire stream of data until the request is over.

Thanks to the low-level network primitives exposed in React Native 0.62, it became possible to build this native `EventSource` implementation for React Native. See [this thread in react-native-community](https://github.com/react-native-community/discussions-and-proposals/issues/99#issue-404506330) for a longer discussion around the motivations of this implementation.

## Usage

Install the package in your React Native project with:

```bash
npm install --save git+https://github.com/NepeinAV/rn-eventsource-reborn
```

To import the library in your project:
```js
import EventSource from 'rn-eventsource-reborn';
```

Once imported, you can use it like any other `EventSource`. See the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) for more usage examples.
```js
const source = new EventSource(
    'https://www.example.com/stream?token=blah',
    { 
        headers: {
            Authorization: 'Bearer hsd8shs8chs89dvsdhv9sdhvs9duvshv23vd',
        },
    }
);

source.addEventListener('open', (event) => {
    console.log('Connection was opened!');
});
```

# Improvements over the Standard
### **`New "state" event`** 
It triggers on every **readyState** change. That can be useful, for example, if you want to store the state of your EventSource in Redux and change your app interface based on this value.
```js
source.addEventListener('state', (event) => {
    // event.data: 0 | 1 | 2
    console.log('Received new state: ', event.data);
});
```
### **`Exposed "connect", "reconnect" and "changeReadyState" methods`**
1. **connect()** - creates new connection with the same EventSource instance if `readyState` isn't `CLOSED`. It uses previous options, headers, etc.
2. **reconnect(reason: string)** - change `readyState` value to `CONNECTING` state, dispatch `error` event and call `connect()`. It uses previous options, headers, etc.
3. **changeReadyState(state: 0 | 1 | 2)** - dispatch `state` event and change `readyState` value.

# Troubleshooting

## "EventSource don't works on Android in debug mode"
Try to disable Flipper network interceptor. Go to **android/app/src/debug/java/<your app name>/ReactNativeFlipper.java** and comment next lines of code:

```java
...
public class ReactNativeFlipper {
  public static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {
    if (FlipperUtils.shouldEnableFlipper(context)) {
      final FlipperClient client = AndroidFlipperClient.getInstance(context);

      client.addPlugin(new InspectorFlipperPlugin(context, DescriptorMapping.withDefaults()));
      client.addPlugin(new ReactFlipperPlugin());
      client.addPlugin(new DatabasesFlipperPlugin(context));
      client.addPlugin(new SharedPreferencesFlipperPlugin(context));
      client.addPlugin(CrashReporterPlugin.getInstance());

      NetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();
      
      
      // try to comment this code
      ________________________
      |  NetworkingModule.setCustomClientBuilder(
      |    new NetworkingModule.CustomClientBuilder() {
      |      @Override
      |      public void apply(OkHttpClient.Builder builder) {
      |        builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));
      |      }
      |    }
      |  );
      |_______________________


      client.addPlugin(networkFlipperPlugin);
      client.start();
      ...
    }
    ...
  }
```
