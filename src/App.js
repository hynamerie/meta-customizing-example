import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import './index.css';


function App() {
    return (
        <div>
            <Header name="Ameri" color="purple" />
            <Main greet="Howdy" />
            <Sidebar greet="Howdy" />
            <Promo heading="Don't miss this deal!" />
            <Promo promoSubHeading="Subscribe to my newsletter and get all the shop items at 50% off!" />
            <Footer />
        </div>
    )
}

export default App;