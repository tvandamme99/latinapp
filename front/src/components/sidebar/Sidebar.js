import "./Sidebar.css";
import {
    LocalBar,
    LocalPlay,
    Store,
    LineStyle,
    WorkOutline 
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Espace Accueil</h3>
          <ul className="sidebarList">
            <Link to="/caisse-accueil" className="link">
              <li className="sidebarListItem">
                <Store className="sidebarIcon" />
                Caisse
              </li>
            </Link>
            <Link to="/soirées" className="link">
              <li className="sidebarListItem">
                <Store className="sidebarIcon" />
                Soirées
              </li>
            </Link>
            
            <Link to="/historique-ventes-caisse" className="link">
              <li className="sidebarListItem">
                <Store className="sidebarIcon" />
                Historique des ventes
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Espace bar</h3>
          <ul className="sidebarList">
            <Link to="/caisse-bar" className="link">
              <li className="sidebarListItem">
                <Store className="sidebarIcon" />
                Caisse
              </li>
            </Link>
            <Link to="/categorie-produit-bar" className="link">
              <li className="sidebarListItem">
                <LocalBar className="sidebarIcon" />
                Catégories
              </li>
            </Link>
            <Link to="/produit-bar" className="link">
              <li className="sidebarListItem">
                <LocalBar className="sidebarIcon" />
                Produits
              </li>
            </Link>
            <Link to="/historique-ventes-bar" className="link">
              <li className="sidebarListItem">
                <LocalBar className="sidebarIcon" />
                Historique des ventes
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
          <Link to="/benevoles" className="link">
              <li className="sidebarListItem">
                <LocalBar className="sidebarIcon" />
                Bénévoles
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}