import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react"
import {Integrations} from "@sentry/tracing"
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";




Sentry.init({
  dsn: "https://1b0a949e7e8044cdbef56edae4db4dbb@o1084969.ingest.sentry.io/6095286",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
