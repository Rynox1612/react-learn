import { useState } from "react";
import "./App.css";
import { getTicket, sum } from "./helper";

function App() {
  let [Ticket, setTicket] = useState(getTicket(3));

  return (
    <div>
      <h1>Lottery Game !!</h1>

      <div>
        <span>{Ticket[0]} </span>
        <span>{Ticket[1]} </span>
        <span>{Ticket[2]}</span>
      </div>

      <button onClick={() => setTicket(getTicket(3))}>New Ticket</button>

      <h1>{sum(Ticket) === 15 && "Congratulations, you won!"}</h1>
    </div>
  );
}

export default App;
