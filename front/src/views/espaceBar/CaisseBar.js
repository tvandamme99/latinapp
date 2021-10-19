import { Link } from "react-router-dom";
import "./CaisseBar.css";
import PaiementSystem from "../../components/paiementSystem/PaiementSystem"
import CatalogBar from "../../components/espaceBar/CatalogBar"
function CaisseBar() {
  return (
    <div className="caisse_bar">
            <CatalogBar></CatalogBar>
            <PaiementSystem></PaiementSystem>
    </div>
  );
}
export default CaisseBar;