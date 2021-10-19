import "./RepartitionBoissons.css";
import PieChart  from "../chart/PieChartView";

export default function RepartitionBoissons() {
 
  return (
    <div className="widgetRepartitionBoissons">
        <h2>Répartition des moyens de paiement</h2>
      <div className="contentRepartitionBoissons">
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
            <th className="widgetLgTh">Désignation</th>
            <th className="widgetLgTh">Nombre</th>
            <th className="widgetLgTh">Prix</th>
            </tr>     
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">Espèce</span>
            </td>
            <td className="widgetLgDate">72</td>
            <td className="widgetLgAmount">119.75</td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">Carte bleu</span>
            </td>
            <td className="widgetLgDate">67</td>
            <td className="widgetLgAmount">135.44</td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">Offert</span>
            </td>
            <td className="widgetLgDate">64</td>
            <td className="widgetLgAmount">179.84</td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">Cassé</span>
            </td>
            <td className="widgetLgDate">16</td>
            <td className="widgetLgAmount">32.20</td>
            </tr>
            <tr className="widgetLgTr">
            <th className="widgetLgTh">Total</th>
            <th className="widgetLgTh">223</th>
            <th className="widgetLgTh">467.23</th>
            </tr>
        </table>
            <PieChart></PieChart>
        </div>
    </div>
  );
}