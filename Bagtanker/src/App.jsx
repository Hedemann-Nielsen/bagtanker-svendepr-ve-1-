import { AppRouter } from "./Components/AppRouter/AppRouter";
// import { Loader } from "./Components/Loader/Loader.jsx";
import "./App.scss";
import { useEffect, useState } from "react";

function App() {
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	// setter loadern til at vare i 1,5 sekunder
	// 	const timer = setTimeout(() => {
	// 		setLoading(false);
	// 	}, 500);

	// 	return () => clearTimeout(timer);
	// }, []);

	return (
		<>
			{/* {loading ? <Loader /> : <AppRouter />} */}
			<AppRouter />
		</>
	);
}

export default App;
