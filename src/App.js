import React from "react"
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home } from "./views/Home";
import { HeaderApp } from "./components/header_app";
import { ProductView } from "./views/ProductView";
import { PurchaseView } from "./views/PurchaseView";


const App = () => {
  return (
    <>
    <HeaderApp />
    <Switch>
      <Route path={'/'} exact component={Home}/>
      <Route path={'/product/:id'} exact component={ProductView}/>
      <Route patch={"/purchase"} exact component={PurchaseView} />
      <Route render={()=> <Redirect to={'/'}/> }/>
      </Switch>
    </>
  );
}

export default App;
