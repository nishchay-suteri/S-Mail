import React from "react";

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">S-Mail</a>
                    <ul className="right">
                        <li>
                            <a href="/auth/google">Login with google</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
