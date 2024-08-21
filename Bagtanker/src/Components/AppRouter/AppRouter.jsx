import { Route, Router, Routes } from "react-router-dom";
import { LoginPage } from "../../Pages/LoginPage.jsx";
import { FallbackPage } from "../../Pages/FallbackPage.jsx";
import { NewsPage } from "../../Pages/NewsPage.jsx";
import { ContactPage } from "../../Pages/ContactPage.jsx";
import { ProductsPage } from "../../Pages/ProductsPage.jsx";
import { CreateUser } from "../Customers/Login/CreateUser.jsx";
import { Login } from "../Customers/Login/Login.jsx";
import { News } from "../Customers/News/News.jsx";
import { Categorys } from "../Customers/Products/Categorys.jsx";
import { Product } from "../Customers/Products/Product.jsx";
import { HomePage } from "../../Pages/HomePage.jsx";

export const AppRouter = () => {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="/home" element={<HomePage />} />
			<Route path="/produkter" element={<ProductsPage />}>
				<Route index element={<Product />} />
				<Route path="/produkter/:produkt" element={<Product />} />
			</Route>
			<Route path="/login" element={<LoginPage />}>
				<Route index element={<Login />} />
				{/* <Route path="/login" element={<Login />} /> */}
				<Route path="/login/createUser" element={<CreateUser />} />
			</Route>

			<Route path="/news" element={<NewsPage />}>
				<Route index element={<News />} />
				<Route path=":id" element={<News />} />
			</Route>

			<Route path="/contact" element={<ContactPage />} />
			<Route path="*" element={<FallbackPage />} />
		</Routes>
	);
};
// <Route path="/products" element={<ProductsPage />}>
// 		<Route index element={<ProductsPage />} />
// 		<Route path=":categorys" element={<Categorys />} />
// 		<Route path=":categorys/:product" element={<Product />} />
// 	</Route>

//nested router
// 			{
// 				path: "/login",
// 				element: <LoginPage />,
// 				children: [
// 					{
// 						path: "/login",
// 						element: <Login />,
// 					},
// 					{
// 						path: "/login/createUser",
// 						element: <CreateUser />,
// 					},
// 				],

// export const routes = createBrowserRouter([
// 	{
// 		path: "/",
// 		element: <HomeLayout />,
// 		children: [
// 			{
// 				index: true,
// 				element: <HomePage />,
// 			},
// 		],
// 	},
// 	{
// 		path: "/news",
// 		element: <DefaultLayout />,
// 		children: [
// 			{
// 				index: true,
// 				element: <NewsPage />,
// 			},
// 			// nested router
// 			{
// 				path: "products",
// 				element: <ProductsPage />,
// 				children: [
// 					{
// 						path: ":categorys",
// 						element: <Categorys />,
// 					},
// 					{
// 						path: ":categorys/:product",
// 						element: <Product />,
// 					},
// 				],
// 			},
// 			{
// 				path: "/contact",
// 				element: <ContactPage />,
// 			},
// 			//nested router
// 			{
// 				path: "/login",
// 				element: <LoginPage />,
// 				children: [
// 					{
// 						path: "/login",
// 						element: <Login />,
// 					},
// 					{
// 						path: "/login/createUser",
// 						element: <CreateUser />,
// 					},
// 				],
// 			},

// 			{
// 				path: "/*",
// 				element: <FallbackPage />,
// 			},
// 		],
// 	},
// ]);
