import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Tables from "./components/Tables";

function App() {
  const [table, setTable] = useState([]);
  const [guests, setGuests] = useState([]);

// eslint-disable-next-line react-hooks/exhaustive-deps
let endpoints = [
  'http://goodsok.ru/mock-api/objects.php',
  'http://goodsok.ru/mock-api/users.php',
];

  useEffect(() => {
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      axios.spread(({data: tables}, {data:guests}) => {
        setTable(tables)
        setGuests(guests)
      })
    );
  }, [endpoints]);

  return (
    <div className="App">
      <div className="table_container">
        <Tables table={table} guests={guests}/>
      </div>
    </div>
  );
}

export default App;
