import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SupabaseProvider } from "./Providers/SupabaseProvider.jsx";
import { AuthProvider } from "./Providers/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<SupabaseProvider>
			<AuthProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AuthProvider>
		</SupabaseProvider>
	</React.StrictMode>
);
