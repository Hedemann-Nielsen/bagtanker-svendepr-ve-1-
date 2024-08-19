import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout.jsx";
import { HomePage } from "../../Pages/HomePage.jsx";
import { LoginPage } from "../../Pages/LoginPage.jsx";
import { FallbackPage } from "../../Pages/FallbackPage.jsx";
import { Login } from "../LoginComponent/Login.jsx";
import { CreateUser } from "../LoginComponent/CreateUser.jsx";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/home",
				element: <HomePage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
				children: [
					{
						index: true,
						element: <Login />,
					},
					{
						path: "/login/createUser",
						element: <CreateUser />,
					},
				],
			},

			{
				path: "/*",
				element: <FallbackPage />,
			},
		],
	},
]);
