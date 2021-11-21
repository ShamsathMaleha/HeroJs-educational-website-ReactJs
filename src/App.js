
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TopSection from './components/Utilities/TopSection';

function App() {
  
  const [courses, setCourses] = useState([])

  useEffect(()=>{
    fetch('./db.json')
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])
  return (
    <div className="App">
       
       <BrowserRouter>
       <Header/>
       
       <Switch>
         <Route exact path="/">
            <Home courses={courses} >

            </Home>
            
         </Route>
         <Route exact path="/courses">
            <Courses courses={courses} >

            </Courses>
            
         </Route>

         <Route exact path="/about">
            <About>

            </About>
            
         </Route>

         <Route exact path="/contact">
            <Contact >

            </Contact>
            
         </Route>
         <Route path="*">
            <NotFound >

            </NotFound>
            
         </Route>
         
         </Switch> 
         <Footer/>
       
       
       
       </BrowserRouter>
    </div>
  );
}

export default App;
