import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './bootstrap.css';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import Footer from "./components/Footer";
import LanguageScreen from "./screens/LanguageScreen";
import PostList from "./components/PostList";
import LessonScreen from "./screens/LessonScreen";

function App() {
  return (
    <Router>
     <Header />
     <main className="py-3">
       <Container fluid className="mx-0 px-0">
         <Routes>
           <Route path="/" element={<HomeScreen />} exact />
           <Route path="/:slug" element={<LanguageScreen />}  />
           <Route path="/:slug/:contentId/" element={<LessonScreen />}  />
         </Routes>
         {/* <PostList></PostList> */}

       </Container>
     </main>
     <Footer />
   </Router>
  );
}

export default App;
