import "./Ticket.css";
import PieChart  from "../chart/PieChartView";


export default function Ticket() {
 
  return (
      < div className="contentTicket">
        <h3>Ticket du 03/08/2021 à 20:32</h3>
        <table className="widgetLgTable">
            <tr className="widgetLgTr">
            <th className="widgetLgTh">Désignation</th>
            <th className="widgetLgTh">Quantité</th>
            <th className="widgetLgTh">Prix</th>
            </tr>     
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">Coca-cola</span>
            </td>
            <td className="widgetLgDate">1</td>
            <td className="widgetLgAmount">2€</td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">Desperados</span>
            </td>
            <td className="widgetLgDate">2</td>
            <td className="widgetLgAmount">6€</td>
            </tr>
            <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <span className="widgetLgName">Ice Tea</span>
            </td>
            <td className="widgetLgDate">1</td>
            <td className="widgetLgAmount">2€</td>
            </tr>
            <tr className="widgetLgTr">
            <th className="widgetLgTh">Total</th>
            <th className="widgetLgTh">4</th>
            <th className="widgetLgTh">10€</th>
            </tr>
        </table>
        <div className="headerRow">
            <p>Règlement en espèce</p>
            <p>Modifier le ticket</p>
        </div>
    </div>
  );
}