import React, { useState, useEffect } from "react";
import GetTables from "./getTables/getTables";
import { API_URL } from '../config';


const GetTable = ({ selectedTable }) => {
  const [data, setData] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (!selectedTable) return; // Nie pobieraj danych, jeśli nie wybrano tabeli

    fetch(`${API_URL}/getTable?tableName=${selectedTable}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching table data:", error));
  }, [selectedTable]);

  const delClickHandler = (row) => {
    console.log("Usuwanie wiersza:", row); 
    setShowDialog(true);
  }
  const handleConfirmDelete = () => {
    setShowDialog(false);
  };

  const handleCancelDelete = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <h2>{selectedTable || "Wybierz tabelę"}</h2>
      {data.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))
             
              }
               <th>Usuń</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
                <td>
                  <button onClick={() => delClickHandler(row)}>Usun</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Brak danych</p>
      )}
      {showDialog && (
        <div className="dialog">
          <p>Czy chcesz usunąć wiersz?</p>
          <button onClick={handleConfirmDelete}>Tak</button>
          <button onClick={handleCancelDelete}>Nie</button>
        </div>
      )}
    </div>
  );
};

export default GetTable;
