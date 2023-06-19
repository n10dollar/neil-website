import Home from "pages/Home.tsx";
import Music from "pages/Music.tsx";
import {Route, Routes} from "react-router-dom";
import NavBar from "components/universal/NavBar.tsx";
import Software from "pages/Software.tsx";
import Chess from "pages/Chess.tsx";

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/software"} element={<Software />} />
                <Route path={"/music"} element={<Music />} />
                <Route path={"/chess"} element={<Chess />} />
            </Routes>
        </>
    );
};

export default App;