import logo from './logo.svg';
// import './App.css';
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';
import {UserProvider}  from './UserContext';


function App() {
  return (
    <UserProvider>
      <h2>React Context API</h2>
      <ChildA />
      <ChildB />
    </ UserProvider>
  );
}

export default App;
