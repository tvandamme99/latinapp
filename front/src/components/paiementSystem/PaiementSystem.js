import { render } from "@testing-library/react";
import React, { Fragment, Component } from "react";
import './PaiementSystem.css'

class PaiementSystem extends Component{
render() {
    return (
            <div className='widgetSm_paiementSystem'>
                <div className='detailsOrder'>
                    <div className='headerDetailsOrder'>
                    <p>Désignation</p>
                    <p>Qté</p>
                    <p>Prix</p>
                    </div>
                    <div className='bodyDetailsOrder'>
                    <p>cocaCola</p>
                    <p>1</p>
                    <p>2€</p>
                    </div>
                </div>
                <div className='lineTotal'>
                    <p>Total :</p>
                    <p>2.00</p>
                    <p>€</p>
                </div>
                <div className='colCalculate'>
                    <div className='colCalculateChild'>
                        <div className='lineCalculate'>
                            <button className='number' onClick="{}">1</button>
                            <button className='number' onClick="{}">2</button>
                            <button className='number' onClick="{}">3</button> 
                        </div>
                        <div className='lineCalculate'>
                            <button className='number' onClick="{}">4</button>
                            <button className='number' onClick="{}">5</button>
                            <button className='number' onClick="{}">6</button> 
                        </div>
                        <div className='lineCalculate'>
                            <button className='number' onClick="{}">7</button>
                            <button className='number' onClick="{}">8</button>
                            <button className='number' onClick="{}">9</button> 
                        </div>
                        <div className='lineCalculate'>
                            <button className='number' onClick="{}">.</button>
                            <button className='number' onClick="{}">0</button>
                            <button className='number' onClick="{}">effacer</button> 
                        </div>
                    </div>
                    <div className='colCalculateChild'>
                        <button className='typePaiement'>Espèce</button>
                        <button className='typePaiement'>Carte Bleu</button>
                        <button className='typePaiement'>Offert</button>
                        <button className='typePaiement'>Cassé</button>
                    </div>
                </div>
            </div>
    )
    }
}

export default PaiementSystem