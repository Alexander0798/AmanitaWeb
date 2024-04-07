import Header from "widgets/Header/ui/Header";
import "./styles/index.scss";
import { Navbar } from "widgets/Navbar/";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserMounted } from "entity/User/model/selectors/getUserMounted/getUserAuthData";
import { userActions } from "entity/User";
import { AppRouter } from "./providers/router";

const App = () => {
    const dispatch = useDispatch();
    const mounted = useSelector(getUserMounted);
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (
        <div className="app">
            <Header />
            <Navbar />
            <div className="content-page">{mounted && <AppRouter />}</div>
        </div>
    );
};

export default App;
