import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { UserAuthContextProvider } from "./Context/UserAuthContext";

function App() {
	return (
		<>
			<UserAuthContextProvider>
				<header>
					<Header />
				</header>
				<Outlet />
				<Navbar />
			</UserAuthContextProvider>
		</>
	);
}

export default App;
