import React, { useEffect, useState } from 'react';
import Users from './Users';

function App() {

  const [userData, setUserData] = useState()

  useEffect(() => {
    fetch("https://testjsonfull.herokuapp.com/members").then(data => data.json()).then(response => {
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
