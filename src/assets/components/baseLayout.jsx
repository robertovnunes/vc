import PropTypes from "prop-types";
import "./css/baseLayout.css";
import NavBar from "./navbar";

BaseLayout.propTypes = {
    children: PropTypes.node.isRequired
};

function BaseLayout ({ children })  {

    return (
        <div>
            < NavBar />
                {children}
        </div>
    );
}

export default BaseLayout;
