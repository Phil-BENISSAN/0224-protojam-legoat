import { Link } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";

function Profil() {
	const { user, logOut } = useUserAuth();

	const handleLogout = () => {
		logOut();
	};

	return (
		<section className="p-4 h-[40rem] mt-20 flex justify-center items-center">
			<div className="flex flex-col gap-24">
				{user ? (
					<div>
						<div className="flex flex-col justify-center">
							<Link
								to="/picture"
								className="px-9 py-4 mb-24 rounded-xl text-center bg-[#01762a] text-white active:opacity-75">
								Créer un souvenir
							</Link>
							<p>Utilisateur : {user.email}</p>
							<button
								onClick={handleLogout}
								className="px-9 py-4 mt-4 rounded-xl text-center bg-[#01762a] text-white active:opacity-75">
								Se déconnecter
							</button>
						</div>
					</div>
				) : (
					<>
						<Link
							to="/signin"
							className="px-8 py-4 rounded-xl text-center bg-[#01762a] text-white active:opacity-75">
							Se connecter
						</Link>
						<Link
							to="/signup"
							className="px-8 py-4 rounded-xl text-center bg-[#01762a] text-white active:opacity-75">
							Se créer un compte
						</Link>
						<p>Aucun utilisateur connecté</p>
					</>
				)}
			</div>
		</section>
	);
}

export default Profil;
