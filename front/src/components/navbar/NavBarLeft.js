import "./NavBarLeft.css";

const NavBarLeft = ({ click }) => {
let hours = new Date();
  return (
    <div>
        <nav className="navbar__left">
          <div className="navbar__link">
            <h4>Espace accueil</h4>
          </div>
          <div className="navbar__link">
            <h4>Espace bar</h4>
          </div>
          <div className="navbar__link">
            <h4>Historique des ventes</h4>
          </div>
          <div className="navbar__link">
            <h4>Espace accueil</h4>
          </div>
          <div className="navbar__link">
            <h4>Gestion des stocks</h4>
          </div>
          <div className="cloture">
            <button>Cloturer la soirée</button>
          </div>
        </nav>
        
    </div>
  );
};

export default NavBarLeft;