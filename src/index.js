import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: "https://app-sht1osnoqhoj.frontegg.com",
  clientId: "b5603634-e653-4528-a205-45dfbb50d6f9",
};

ReactDOM.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
  </FronteggProvider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
