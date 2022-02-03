import React, { useState } from 'react';
import './App.css';
import AddPage from './pages/AddPage';
import ButtonNav from "./componetns/common/ButtonNav";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ListPage from './pages/ListPage';
import CalendarPage from './pages/CalendarPage';
function App() {
  const [value, setValue] = useState<string>("/");

  return (
    <div style={{margin:'200px auto', borderRadius:12, border:'1px solid #eee', height:'700px', width:'500px', position:'relative'}}>
      <Router>
        <Routes>
          <Route path="/addPage"   element={<AddPage/>}/>
          <Route path="/listPage"   element={<ListPage/>}/>
          <Route path="/"   element={<CalendarPage/>}/>
            
        </Routes>
        <ButtonNav setState={setValue} state={value}/>

      </Router>
    </div>
  );
}

export default App;
