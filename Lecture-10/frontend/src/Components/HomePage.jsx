import {Link} from "react-router-dom";

export default function HomePage() {
    return <div>
        <h1>Home Page</h1>
        <Link to="/register">Go To Register page with a link</Link>
    </div>
}