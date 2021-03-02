import React from "react";
import { connect } from "react-redux";

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login with google</a>
                    </li>
                );
            default:
                return (
                    <li>
                        <a href="/">Logout</a>
                    </li>
                );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">S-Mail</a>
                    <ul className="right">{this.renderContent()}</ul>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
    /*
    combineReducers({
        auth: authReducer,
    });
    */
};

export default connect(mapStateToProps)(Header);
