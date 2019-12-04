import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { I18nProvider } from "@lingui/react";

import enCatalog from "../locale/en/messages.js";

const catalogs: Record<string, any> = {
    en: enCatalog
};

const Main: React.FC = () => {
    const [language, setLanguage] = useState("en");
    const [languageLoaded, setLanguageLoaded] = useState(true);

    const changeLanguage = (newLanguage: string) => () => {
        if (catalogs[newLanguage]) {
            setLanguage(newLanguage);
        } else {
            setLanguageLoaded(false);
            import(`./locales/${newLanguage}/messages.js`).then(catalog => {
                catalogs[newLanguage] = catalog.default;
                setLanguageLoaded(true);
                setLanguage(newLanguage);
            });
        }
    };

    return (
        <I18nProvider language={language} catalogs={catalogs}>
            {languageLoaded ? (
                <>Current language is {language}</>
            ) : (
                <>Language loading</>
            )}
            <br />
            <button onClick={changeLanguage("en")}>English</button>
            <button onClick={changeLanguage("fr")}>French</button>
            <App name="Steve" />
        </I18nProvider>
    );
};

ReactDOM.render(<Main />, document.getElementById("root"));
