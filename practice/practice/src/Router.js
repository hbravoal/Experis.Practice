import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter,Redirect, Switch   } from 'react-router-dom';
import { createHistory } from 'history';


import Dashboard from 'Components/Layout/Dashboard';

const Home = lazy(() => import('Components/Home'));



 
 const PrivateRoute = ({component:Component,...rest})=>(
    
    IsAuth()  
    ?<Route {...rest} render={(props)=>(
         <Component {...props}> </Component>
    )}></Route>
    :<Redirect to="/Login"></Redirect>

    
)
const Router = () => {
    // const appHistory = useRouterHistory(createHistory)({
    //     basename: "/Mastercard/ATuLado/Site/"
    //   });
      
 
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