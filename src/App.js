import React from 'react';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import './App.css';
import { Main} from "./view/main/main"
import { Login} from "./view/login"
import { CreatePost } from "./view/create-post/createpost"
import { Header } from  "./components/header"
import {Navbar } from "./components/navbar"



function App() {
  return (
    <div className="App">
      <Header title={"Sociaux-de-Paris!"}/>
       <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createpost" element={<CreatePost />} />
          </Routes>
       </Router>
       
    </div>
  );
}

export default App;
