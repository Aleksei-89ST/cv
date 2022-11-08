import './App.css';
import Main from "./main/Main";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

function App() {
    return (
        <div className="App">
            <Main/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
