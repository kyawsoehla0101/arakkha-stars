import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './bootstrap.css';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
     {/* <Header /> */}
     <main className="py-3">
       <Container>
         <Routes>
           <Route path="/" element={<HomeScreen />} exact />
         </Routes>
       </Container>
     </main>
     {/* <Footer /> */}
   </Router>
  );
}

export default App;
