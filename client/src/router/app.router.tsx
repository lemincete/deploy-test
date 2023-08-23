import { routes } from "./router.data";

import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({ path, Component }) =>
                <Route path={path} element={<Component />} key={path} />
            )}
        </Routes>
    );
}

export default AppRouter;