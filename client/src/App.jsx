import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import { IntroProvider } from "./Context/LoaderContext";

function App() {
	return (
		<>
		<IntroProvider>
			<UserAuthContextProvider>
				<header>
					<Header />
				</header>
				<Outlet />
				<Navbar />
			</UserAuthContextProvider>
			</IntroProvider>
		</>
	);
}

export default App;
