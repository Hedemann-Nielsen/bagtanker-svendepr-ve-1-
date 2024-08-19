import { RouterProvider } from "react-router-dom";
import { routes } from "./Components/Routes/Routes";
import "./App.scss";

function App() {
	return <RouterProvider router={routes} />;
}

export default App;
