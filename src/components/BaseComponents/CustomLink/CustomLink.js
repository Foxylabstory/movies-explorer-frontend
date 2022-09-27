import { Link, useMatch } from "react-router-dom";

function CustomLink({ children, to, className, ...params }) {
const match = useMatch(to);

    return (
        <Link 
        to={to}
        className={match ? className + '_active' : className }
        {...params}>
            {children}
        </Link>
    )
}

export default CustomLink;