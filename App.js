import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Login from './components/Login';
import MainPage from './components/mainPage/MainPage';



export default function App() {
  const [status,setStatus] = useState(true)

  return (
    <SafeAreaView>
      {status ?
      <Login setStatus={setStatus}/>
      : 
      <MainPage setStatus={setStatus}/>
      }
    </SafeAreaView>
  );
  
}
