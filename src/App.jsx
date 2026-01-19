import React, { Suspense } from "react";
import StyleGlobal from "./StyleGlobal/global.js";
import RouterApp from "./pages/Routes"
import ErrorBoundary from "./components/ErrorBoundary"
import LoadingSpinner from "./components/LoadingSpinner"

function App() {
    return (
        <ErrorBoundary>
            <StyleGlobal />
            <Suspense fallback={<LoadingSpinner />}>
                <RouterApp />
            </Suspense>
        </ErrorBoundary>
    )
}

export default App