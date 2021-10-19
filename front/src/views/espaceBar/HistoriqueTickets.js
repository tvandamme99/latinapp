import "./HistoriqueTickets.css";
import HistoTicket  from "../../components/espaceBar/Ticket";

export default function HistoriqueTickets() {
 
  return (
    <div className="widgetTicket">
        <h2>Historique des ventes</h2>
      <div className="contentHistoVentes">
            <HistoTicket className="block"></HistoTicket>
            <HistoTicket></HistoTicket>
            <HistoTicket></HistoTicket>
            <HistoTicket></HistoTicket>
            <HistoTicket></HistoTicket>
        </div>
    </div>
  );
}