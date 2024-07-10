import React from "react";
import { Link } from "react-router-dom";


const LandingComponent = () => {

    return (
        <div>
            test
            <label>
                this is landing page for us
            </label>
            <Link to="/pricing">
                navigate to pricing!!!!
            </Link>
        </div>
    )
}

export default LandingComponent;