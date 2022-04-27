import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Tables from "./components/Tables";

function App() {
  const [tables, setTables] = useState([]);
  const [guests, setGuests] = useState([]);

  const fetchedTables = axios.get("http://goodsok.ru/mock-api/objects.php");
  const fetchedGuests = axios.get("http://goodsok.ru/mock-api/users.php");

  useEffect(() => {
    Promise.all([fetchedTables, fetchedGuests])
      .then(function ([fetchedTables, fetchedGuests]) {
        setTables(fetchedTables.data);
        setGuests(fetchedGuests.data);
      })
      .then();
  }, []);

  return (
    <div className="App">
      <div className="table_container">
        <Tables tables={tables} guests={guests} />
      </div>
    </div>
  );
}

export default App;
