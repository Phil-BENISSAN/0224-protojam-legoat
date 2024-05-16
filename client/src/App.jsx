import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

function App() {
	return (
		<>
		<header>
			<Header/>
		</header>
			<Outlet />
		</>
	);
}

export default App;
