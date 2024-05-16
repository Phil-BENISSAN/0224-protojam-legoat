import { Link } from "react-router-dom";
import "../Styles/Header.css";

function Header() {
	return (
		<>
			<Link to="/">
				<img className="logo" src="/Img/logo_RandoZen.svg" alt="" />
			</Link>
			<Link to="/profil">
				<img className="profilPicture" src="/Img/avatar.png" alt="" />
			</Link>
		</>
	);
}
export default Header;
