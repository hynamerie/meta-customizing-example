import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Intro3 from "./components/Intro3";
import './index.css';


function App() {
    return (
        <div>
            <Header name="Ameri" color="purple" />
            <Nav />
            <Main greet="Howdy" />
            <Sidebar greet="Howdy" />
            <Promo heading="Don't miss this deal!" />
            <Promo promoSubHeading="Subscribe to my newsletter and get all the shop items at 50% off!" />
            <Intro1/>
            <Intro2/>
            <Intro3/>
            <Footer />
        </div>
    )
}

export default App;