import {Link} from "react-router-dom";

function NotFound(props) {
    return (
        <>
            <div className='notFound'><h1>Page not found</h1></div>
            <Link to='/'>Home page</Link>
        </>

    );
}

export default NotFound;