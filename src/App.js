import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/layout';




function App() {
  return (
    <div className="App">
            <BrowserRouter>
    
      <Routes>
        <Route index path="/" element ={<Layout/>}></Route>
        <Route path="/Home" element={<Layout/>}></Route>
        {/* <Route path="/users/manageUsers" element={<UserForm/>}/>
        <Route path="/users">
          <Route index element={<Users/>} />
          <Route path="Profile" element={<ProfilePage/>}/>
          <Route path=":userID" element={<Profile/>}/>
          <Route path="edit" element={<EditForm/>}/>
        </Route> */}
        <Route path="/404" element={<h3>User Not Fount</h3>}  />
        <Route path="*" element={<Navigate to="/404" replace/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
