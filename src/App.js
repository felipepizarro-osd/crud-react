import { useState ,useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [userName,setUserName] = useState('');
  const [userLastName,setUserLastName] = useState('');
  const [userList,setUserList] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      console.log(response.data);  
    //setUserList(response.data)
    })
  })

  const submitClient = ()=>{
    Axios.post('http://localhost:3001/api/insert',{userName:userName, lastName:userLastName
  });
  setUserList([...userList,{
    userName:userName,
    lastName:userLastName
  },]);
  };
  return (
    <div className="App">
      <h1>CRUD APLICATION</h1>
      <div className='form'>
        <label>Nombre del cliente</label>
        <input type="text" name="clientName" onChange={(event)=>
          {
            setUserName(event.target.value);
          }
        } ></input>
        <label>Apellido del cliente</label>
        <input type="text" name="clientRut" onChange={(event)=>{

          setUserLastName(event.target.value);

        }}></input>
        <button onClick={submitClient}>Submit</button>
        {userList.map((value)=>{
          return <h1>Username:{value.name} | LastName: {value.lastname}</h1>
        })}

      </div>
    </div>
  );
}

export default App;
