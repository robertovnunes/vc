import "./css/baseLayout.css";
import NavBar from "./navbar";

const BaseLayout = ({ children }) => {

    return (
        <div>
            < NavBar />
                {children}
        </div>
    );
}

export default BaseLayout;
