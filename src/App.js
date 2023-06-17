import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/index";
import  Navbar  from "./components/navbar/index";
import About from "./components/footer/About";
import StudyIndia from "./components/footer/StudyIndia";
import StudyAbroad from "./components/footer/StudyAbroad";
import Testimonials from "./components/footer/Testimonials";
import Gallery from "./components/footer/Gallery";
import MbaConsultants from "./components/footer/MbaConsultants";
import SOP from "./components/footer/SOP";
import Mock from "./components/footer/Mock ";
import AWT from "./components/footer/AWT";
import Scolarship from "./components/footer/Scolarship";
import Book from './components/footer/Book';
import Hiring from "./components/footer/Hiring";
import Blog from "./components/footer/Blog";
import Footer from './components/footer';
import Register from './components/footer/Register';
import Application from "./components/footer/Application";
import Payment from "./components/footer/Payment";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Route path="/" component={Home} exact />
        <Route path="/About" component={About} exact />
        <Route path="/StudyIndia" component={StudyIndia} exact />
        <Route path="/StudyAbroad" component={StudyAbroad} exact />
        <Route path="/Testimonials" component={Testimonials} exact />
        <Route path="/Gallery" component={Gallery} exact />
        <Route path="/MbaConsultants" component={MbaConsultants} exact />
        <Route path="/SOP" component={SOP} exact />
        <Route path="/Mock" component={Mock} exact />
        <Route path="/AWT" component={AWT} exact />
        <Route path="/Scolarship" component={Scolarship} exact />
        <Route path="/Book" component={Book} exact />
        <Route path="/Hiring" component={Hiring} exact />
        <Route path="/Blog" component={Blog} exact />
        <Route path="/Register" component={Register} exact />
        <Route path="/Application" component={Application} exact />
        <Route path="/Payment" component={Payment} exact />
      <Footer />
    </Router>
    </>
  );
}

export default App;

