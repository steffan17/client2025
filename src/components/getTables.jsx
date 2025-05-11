import React, { useState, useEffect } from 'react'; 
import { API_URL } from '../config';

 

const GetTables = ({onSelectTable}) => { 

  const [tables, setTables] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => { 
    // Funkcja do pobierania danych z API 

    const fetchTables = async () => { 

      try { 

        const response = await fetch(`${API_URL}/getTables`); // Zmień na odpowiedni endpoint 

        if (!response.ok) { 

          throw new Error('Błąd podczas pobierania danych'); 

        } 

        const data = await response.json(); 
        
        setTables(data); 

      } catch (err) { 

        setError(err.message); 

      } finally { 
        setIsLoading(false); 
      } 
    }; 
    fetchTables(); 

  }, []); 

  if (isLoading) { 
    return <div>Ładowanie...</div>; 
  } 

  if (error) { 

    return <div>Błąd: {error}</div>; 

  } 

 const handleTableClick = (tableName) => {
    // Tutaj możesz obsłużyć kliknięcie w tabelę
    console.log(`Kliknięto tabelę: ${tableName}`);
    onSelectTable(tableName); // Przekazanie wybranej tabeli do rodzica
  }

  return ( 

    <div> 

      <h3>Lista Tabel</h3> 
      <div> 
        <ul> 
          {tables.map((table) => ( 

            <li key={table.id}>
                <button key={table.id} onClick={() => handleTableClick(table.name)}>{table.name}</button>
                </li> 

          ))} 
        </ul>
      </div> 
    </div> 
  ); 

}; 

 

export default GetTables; 