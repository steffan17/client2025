import React, { useState, useEffect } from "react";
import GetTables from "./getTables";

const GetTable = ({ selectedTable }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!selectedTable) return; // Nie pobieraj danych, jeśli nie wybrano tabeli

    fetch(`https://apollo.mguard.pl/api/getTable?tableName=${selectedTable}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching table data:", error));
  }, [selectedTable]);

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
                  <button>Usun</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Brak danych</p>
      )}
    </div>
  );
};

export default GetTable;
