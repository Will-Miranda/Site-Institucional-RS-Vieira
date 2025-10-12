import React, { Fragment } from "react";
import StyleGlobal from "./StyleGlobal/global.js";
import RouterApp from "./pages/Routes"

function App () {
    return (
        <Fragment>
            <RouterApp />
            <StyleGlobal />
        </Fragment>
    )
}

export default App