import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Quiz from '../pages/Quiz'
import Result from '../pages/Result';
import '../styles/app.css'
import Layout from './Layout';
import Error from './Error';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/quiz' element={<Quiz/>} />
            <Route path='/result' element={<Result/>} />
            {/* <Route path='/*' element={<Error/>} /> */}
          </Routes>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
