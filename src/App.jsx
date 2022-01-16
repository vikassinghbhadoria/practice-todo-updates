import * as React from 'react';
import './App.css';
import Table from './components/Table';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import User from './user';
function App() {
  const [user, setUser] = React.useState(null);
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route exact path='/user' element={<User user={user} />} />
          <Route exact path='/' element={<Table setUser={setUser} />} />
        </Routes>
      </BrowserRouter> */}
      <Table user={user} setUser={setUser} />
    </>
  );
}

export default App;
