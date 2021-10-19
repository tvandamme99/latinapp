
import React, {useState} from 'react';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/login/Login"
import Home from "./views/home/Home";
import CaisseAccueil from "./views/espaceAccueil/CaisseAccueil";
import SoireeList from "./views/soireeList/SoireeList";
import CaisseBar from "./views/espaceBar/CaisseBar";
import CategorieList from "./views/categorieList/CategorieList";
import ProduitList from "./views/produitList/ProduitList";
import Produit from "./views/product/Product";
import HistoriqueVentesBar from "./views/espaceBar/HistoriqueVentesBar";
import BenevoleList from "./views/benevoleList/BenevoleList";
import AuthContext from "./contexts/AuthContext";
import authAPI from './services/AuthAPI';
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const [isAuthentificated,setIsAuthentificated]= useState(authAPI.isAuthentificated)
  
  return (
    <AuthContext.Provider
    value={{
      isAuthentificated,
      setIsAuthentificated
    }}
    >
      <Router>
      <Route exact path="/login">
              <Login/>
            </Route>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/caisse-accueil">
              <CaisseAccueil />
            </Route>
            <Route path="/soirées">
              <SoireeList />
            </Route>
            <Route path="/caisse-bar">
              <CaisseBar />
            </Route>
            <Route path="/categorie-produit-bar">
              <CategorieList />
            </Route>
            <Route path="/produit-bar" component={ProduitList} />
            <Route path="/produit/:produitId">
              <Produit />
            </Route>
            <PrivateRoute path="/historique-ventes-bar" component={HistoriqueVentesBar}/>
            <Route path="/benevoles">
              <BenevoleList />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}
export default App;