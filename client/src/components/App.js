import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return (
    <div>
        PageOne
        <Link to="/pageTwo">Navigate to PageTwo</Link>
    </div>)
}
const PageTwo = () => {
    return (
        <div>
            PageTwo
            <Link to="/">Navigate to Pageone</Link>
        </div>)
}
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/" exact={true} component={PageOne} />
                    <Route path="/PageTwo" component={PageTwo} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;