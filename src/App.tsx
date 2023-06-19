import Home from "pages/Home.tsx";
import Music from "pages/Music.tsx";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/music"} element={<Music />} />
        </Routes>
    );
};

export default App;