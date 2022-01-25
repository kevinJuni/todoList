import React, { useState } from 'react';
import './App.css';
import AddPage from './pages/AddPage';
import ButtonNav from "./componetns/common/ButtonNav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ListPage from './pages/ListPage';
function App() {
  const [value, setValue] = useState<number>(0);

  return (
    <div style={{margin:'200px auto', borderRadius:12, border:'1px solid #eee', height:'700px', width:'500px', position:'relative'}}>
      <Router>
        <Routes>
          <Route path="/"   element={<AddPage/>}/>
          <Route path="/listPage"   element={<ListPage/>}/>
            
        </Routes>
      </Router>
      <ButtonNav setState={setValue} state={value}/>
    </div>
  );
}

export default App;
