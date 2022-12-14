import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://bsh38065.pythonanywhere.com/members").then(res => res.json()).then(
      data => {
        setData(data);
        console.log(data);
      }
    )
  }, []);

  return (
    <div>
      {data === undefined || data["members"] === undefined ? (
        <p>Loading...</p>
      ): (
        data["members"]
      )

      }
    </div>
  );
}

export default App;
