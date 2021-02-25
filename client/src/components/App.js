import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
    return (
        <div>
            <BrowserRouter>
                {/* BrowserRouter only expects atmost 1 children */}
                <div>
                    {/* Always visible route */}
                    <Header />
                    {/* exact={true} and exact both are same */}
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/surveys" component={Dashboard} />
                    <Route path="/surveys/new" component={SurveyNew} />
                </div>
            </BrowserRouter>
        </div>
    );
};
export default App;
