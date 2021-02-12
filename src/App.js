import React, { useState, useEffect } from 'react';
import List from './components/List';
function App() {
  const [data, setData] = useState('')

  useEffect(() => {
    fetch('http://localhost:8000/raminder-birthday')
      .then(res => res.json())
      .then(data => {
        setData(handlerAge(data))

      })
  }, [])


const handlerAge = (data) => {
  if(data.length > 0){
    return data.map(el => {
      let age = new Date().getFullYear() - new Date(el.birthday.split("/")[2]).getFullYear();
      return {...el,age} 
    })
  }
}

  return (
    <main>
      <section className="container">
        <h3>{data.length} birthdays today</h3>
        {data && <List data={data} />}
        <button onClick={() => setData([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;