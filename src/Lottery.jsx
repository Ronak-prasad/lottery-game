import { useState } from "react";
import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket"
import Button from "./button";


export default function Lottery({n = 3, winCondition}){
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = winCondition(ticket);


    let buyTicket = () => {
        setTicket(genTicket(n));
    }

    return(
        <div>
            <h1>Lottery Game!</h1>
            <p>HINT:- sum of 3 digits should be 20</p>
                <Ticket ticket={ticket}/>
                <Button action={buyTicket} />
                <h2>{isWinning && "Congratulation, you won!!"}</h2>
        </div>
    )
}