import "./NavbarTop.css";
const NavBarTop = ({ click }) => {
let hours = new Date();

  return (
    <nav className="navbar">
      <div className="navbar__hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="navbar__name">
        <h2>Caisse enregistreuse</h2>
      </div>
      <div className="navbar__hours">
        <h2>{hours.getHours()} : {(hours.getMinutes()<10?'0':'')+(hours.getMinutes())}</h2>
      </div>
    </nav>
    
  );
};

export default NavBarTop;