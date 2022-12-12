import {BrowserRouter, Route} from "react-router-dom";
import SignIn from "./SignIn";

const Home = () => {

    return (
        <BrowserRouter>
            <Route path="/" component={SignIn} />
        </BrowserRouter>

    );

}
export default Home;
