import "./RepartitionBoissons.css";
import PieChart  from "../chart/PieChartView";

export default function RepartitionBoissons() {
 
  return (
    <div className="widgetRepartitionBoissons">
        <h2>Répartition des boissons</h2>
      <div className="contentRepartitionBoissons">
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
            <th className="widgetLgTh">Désignation</th>
            <th className="widgetLgTh">Quantité</th>
            <th className="widgetLgTh">Prix</th>
            </tr>     
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">Soft</span>
            </td>
            <td className="widgetLgDate">72</td>
            <td className="widgetLgAmount">119.75</td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">Bière</span>
            </td>
            <td className="widgetLgDate">67</td>
            <td className="widgetLgAmount">135.44</td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">Cocktail</span>
            </td>
            <td className="widgetLgDate">64</td>
            <td className="widgetLgAmount">179.84</td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">Mocktail</span>
            </td>
            <td className="widgetLgDate">16</td>
            <td className="widgetLgAmount">32.20</td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">Au verre</span>
            </td>
            <td className="widgetLgDate">3</td>
            <td className="widgetLgAmount">-6</td>
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