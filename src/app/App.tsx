import Header from "widget/Header/ui/Header";
import "./styles/index.scss";
import Navbar from "widget/Navbar/ui/Navbar";

const App = () => {
    return (
        <div className="app">
            <Header />
            <Navbar/>
        </div>
    );
};

export default App;
