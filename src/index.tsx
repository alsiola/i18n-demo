import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { I18nProvider } from "@lingui/react";

const Main: React.FC = () => (
    <I18nProvider language="en">
        <App name="Steve" />
    </I18nProvider>
);

ReactDOM.render(<Main />, document.getElementById("root"));
