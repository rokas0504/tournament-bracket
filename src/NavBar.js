import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
    return (
        <div className="NavBarContainer">
            <h1>Tournament brackets</h1>
            <div className="NavBarButtonContainer">
                <Link className="NavBarButton">Create Bracket</Link>
                <Link className="NavBarButton">View Brackets</Link>
            </div>
        </div>
    );
}
 
export default NavBar;