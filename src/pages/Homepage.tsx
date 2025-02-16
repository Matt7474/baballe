import { Link } from "react-router-dom";

export default function Homepage() {
	return (
		<div className="justify-between">
			<Link to={"/"}>Accueil</Link>
			<Link to={"/about"}>A propos</Link>
		</div>
	);
}
