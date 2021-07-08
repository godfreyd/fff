import AppDesktop from "./App@desktop";
import Routes from "./Routes";

export default [
    {
        ...AppDesktop,
        routes: Routes
    }
];