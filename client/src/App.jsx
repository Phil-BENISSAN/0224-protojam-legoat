import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<>
		<header>
			<Header/>
		</header>
			<Outlet />
			<Navbar />
		</>
	);
}

export default App;
