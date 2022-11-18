import logo from './logo.svg';
import './App.css';
import {React, useState} from 'react';
import data from "./data.json"

function App() {
  const [search, setSearch] = useState("")

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder='Search...'
        onChange={e => {setSearch(e.target.value)}}
      />
      {data.filter((val) => {
        if (search == "") {
          return val
        } else if (val.first_name.toLowerCase().includes(search.toLowerCase())) {
          return val
        }
      })
      .map((val, key) => {
        return (
          <div className='user' key={key}>
            <p>{val.first_name}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
