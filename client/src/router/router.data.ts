import HomePage from "../components/screens/HomePage";
import AboutPage from "../components/screens/AboutPage";

import { IRoutesItem } from "./router.interface";


const publicRoutesArr: IRoutesItem[] = [
    {
        path: '/',
        Component: HomePage
    },
    {
        path: '/about',
        Component: AboutPage
    }
]

export const routes = publicRoutesArr;