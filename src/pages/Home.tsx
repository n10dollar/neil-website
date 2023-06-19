import NavBar, {Social} from "components/universal/NavBar.tsx";
import Background from "components/home/Background.tsx";
import Quote from "components/home/Quote.tsx";
import {MdEmail} from "react-icons/md";
import {BsInstagram, BsLinkedin} from "react-icons/bs";
import Intro from "components/home/Intro.tsx";
import Description from "components/home/Description.tsx";



const pages = [
    {name: "Home", URL: "/"},
    {name: "Software", URL: "/software"},
    {name: "Music", URL: "/music"},
    {name: "Chess", URL: "/chess"}
]

const socials: Social[] = [
    {name: "Email", icon: <MdEmail />},
    {name: "LinkedIn", icon: <BsLinkedin />},
    {name: "Instagram", icon: <BsInstagram />},
]
const centerQuote = "Luck is the residue of design, and I'm dripping with luck."

const Home = () => {
    return (
        <>
            <NavBar pages={pages} socials={socials} />
            <Background />
            <Quote py={200}>{centerQuote}</Quote>
            <Intro />
            <Description />
        </>
    );
};

export default Home;