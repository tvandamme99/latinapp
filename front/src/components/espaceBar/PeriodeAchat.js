import "./RepartitionBoissons.css";
import BarChart from "../chart/BarChartView";
export default function RepartitionBoissons() {
 
  return (
    <div className="widgetRepartitionBoissons">
        <h2>Période d'achat</h2>
      <div className="contentRepartitionBoissons">
            <BarChart></BarChart>
        </div>
    </div>
  );
}
