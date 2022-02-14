import './App.css';
import { useState} from 'react';
import JSONDATA from './MOCK_DATA.json';

function App() {
  const [searchName, setSearchName] = useState("");

  return (
    <div className="App">
      <input 
        type="text" 
        placeholder="Search..."
        onChange={(e) => {setSearchName(e.target.value)}}
        />
      {JSONDATA.filter((val) => {
        if(searchName == ""){
          return val;
        }
        else if(val.first_name.toLowerCase().includes(searchName.toLowerCase()) || val.last_name.toLowerCase().includes(searchName.toLowerCase())){
          return val;
        }
      }).map((val, key) => (
        <div className="user" key={key}>
          <p>{val.first_name}</p>
          <p>{val.last_name}</p>
          <p>{val.gender}</p>
        </div> 
      ))}
    </div>
  );
}

export default App;
