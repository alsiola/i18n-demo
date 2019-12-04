import React from "react";
import { Trans, Plural } from "@lingui/macro";

const App: React.FC<{ name: string }> = ({ name }) => {
    const count = 0;

    return (
        <div>
            <Trans>Hello my name is Alex!</Trans>
            <br />
            <Trans>Hello my name is {name}</Trans>
            <br />
            <Plural
                value={count}
                _0="Boo, no apples"
                one="I have # apple"
                other="I have # apples"
            />
        </div>
    );
};

export default App;
