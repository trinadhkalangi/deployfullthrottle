import React, { useEffect, useState } from 'react';
import Users from './Users';
import data from './assets/Test JSON.json'

function App() {

  const [userData, setUserData] = useState()

  useEffect(() => {
    fetch(data).then(data => data.json()).then(response => {
      setUserData([...response])
    })
  }, [])

  return (
    <div className="App">
      {userData && <Users userData={userData} />}
    </div>
  );
}

export default App;