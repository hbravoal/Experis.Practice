import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter,Redirect, Switch   } from 'react-router-dom';

import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/BounceLoader';
import Dashboard from 'Components/Layout/Dashboard';

import  Home  from 'Components/Home';



 
 const PrivateRoute = ({component:Component,...rest})=>(
    
    
    <Route {...rest} render={(props)=>(
         <Component {...props}> </Component>
    )}></Route>
   

    
)
const Router = () => {

 
    return ( 
    <BrowserRouter >
    <Suspense fallback={<LoadingOverlay active={true} spinner={<BounceLoader />}></LoadingOverlay>}>
        <Switch>
            <Route path = '/Home' exact >
                <Dashboard title="Home">
                    <Home/>
                </Dashboard>
            </Route>
            
            
            <Route path = '/' exact >      
                <Dashboard title="Home">
                    <Home/>
                </Dashboard>
            </Route>

        </Switch>
    </Suspense>
    </BrowserRouter>
    );
}
export default Router;