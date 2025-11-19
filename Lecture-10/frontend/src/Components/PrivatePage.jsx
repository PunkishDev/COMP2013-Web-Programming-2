import {Link} from "react-router-dom";

export default function PrivatePage() {
    return <div>
        <h1>This is a private page</h1>
        <Link to="/">Back to Home Page</Link>
    </div>
}