import { Link } from "react-router-dom";

export default function NotFound() {
	return(
		<div>
			<Link to="/home" className="button NotFoundSkull">☠️</Link>
			<p className="NotFoundText is-size-1-desktop is-size-2-mobile">NOT FOUND</p>
		</div>
		
	)
}
