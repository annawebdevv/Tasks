import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Tables from "./components/Tables";

function App() {
  const [table, setTable] = useState([]);
  const [guests, setGuests] = useState([]);

  const prom = axios.get('http://goodsok.ru/mock-api/objects.php')
  const prom2 = axios.get('http://goodsok.ru/mock-api/users.php')


  useEffect(() => {
    Promise.all([prom, prom2]).then(function(value){
      setTable(value[0].data)  
      setGuests(value[1].data) 
    }
)
  }, []);

  return (
    <div className="App">
      <div className="table_container">
        <Tables table={table} guests={guests}/>
      </div>
    </div>
  );
}

export default App;
