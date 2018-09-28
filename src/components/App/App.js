import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import HeaderContent from '../Header/HeaderContent';
import HomeArea from '../Home/HomeArea';

const App = () => {
    return(
        <BrowserRouter>
            <div>
                <HeaderContent />
                <Switch>
                    <Route path="/home" component={ HomeArea } />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;
