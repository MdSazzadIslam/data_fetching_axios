import "./App.css";
import React, { useState, useEffect } from "react";
import http from "axios";

const App = () => {
  const [error, setError] = useState(false);

  const [records, setRecords] = useState([]);

  useEffect(() => {
    debugger;

    http
      .get("https://api.github.com/users/bradcypert/repos")

      .then((response) => {
        setError(false);
        setRecords(response.data);
        console.log(response.data);
      })

      .catch((error) => {
        console.log(error);

        setError(error);
      });
  }, [setRecords]);

  if (error) {
    return <div> Error: {error.message}</div>;
  } else {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>

          <tbody>
            {records.map((item, key) => (
              <tr key={key}>
                <td> {item.id}</td>
                <td> {item.node_id}</td>
                <td> {item.name} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default App;
