import { React, useState, useEffect } from "react";
import "./HistoriqueVentesBar.css";
import RepartitionBoissons  from "../../components/espaceBar/RepartitionBoissons";
import RepartitionPaiement  from "../../components/espaceBar/RepartitionPaiement";
import PeriodeAchat  from "../../components/espaceBar/PeriodeAchat";
import Histo  from "./HistoriqueTickets";
import axios from "axios";

function HistoriqueVentesBar() {
  
  const token = window.localStorage.getItem("authToken")
  const [role, setRole] = useState(null);
  const url = "http://localhost:8080/user/profil";
  useEffect(() => {
    axios.get(url, { headers: {
      'Authorization': `Token ${token}` 
    }})
      .then(response => {
        setRole(response.data.role)
      })
  }, [url])

  console.log(role)

  if(role === "admin"){
  return (
        <div className='catalogHistoVentesView'>
          <div className="CASoiree">
            <RepartitionBoissons></RepartitionBoissons>
            <RepartitionPaiement></RepartitionPaiement>
            <PeriodeAchat></PeriodeAchat>
          </div>
          <div className="historique">
            <Histo></Histo>
          </div>
            
        </div>
  );
  }else{
    return (
      <div className='catalogHistoVentesView'>
        <div className="historique">
          <Histo></Histo>
        </div>
      </div>
);
  }
}
export default HistoriqueVentesBar;