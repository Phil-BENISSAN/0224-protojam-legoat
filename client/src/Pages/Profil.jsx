import { Link } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";

function Profil() {
	const { user } = useUserAuth();
	const { logOut } = useUserAuth();

	const handleLogout = () => {
		logOut();
	};

	return (
		<section className="p-4 h-96 mt-20 flex justify-center items-center">
			<div className="flex flex-col gap-24">
				<Link
					to="/signin"
					className="px-8 py-4 rounded-xl text-center bg-[#01762a] text-white">
					Se connecter
				</Link>
				<Link
					to="/signup"
					className="px-8 py-4 rounded-xl text-center bg-[#01762a] text-white">
					Se créer un compte
				</Link>
				{user ? (
					<div>
						<p>Utilisateur : {user.displayName}</p>
						<p>Email : {user.email}</p>
						<button
							onClick={handleLogout}
							className="px-9 py-4 mt-4 rounded-xl text-center bg-[#01762a] text-white">
							Se déconnecter
						</button>
					</div>
				) : (
					<p>Aucun utilisateur connecté</p>
				)}
			</div>
		</section>
	);
}

export default Profil;
