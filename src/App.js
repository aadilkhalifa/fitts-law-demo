import { Routes, Route, Navigate} from 'react-router-dom';

import Demo from './Components/Demo/Demo'
import Home from './Components/Home/Home'
import Result from './Components/Result/Result'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/result" element={<Result />} />
        <Route path="/home" element={<Home/>} />
        <Route exact path="/" element={<Navigate replace to="/home" />}></Route>
      </Routes>
    </div>
  );
}

export default App;
