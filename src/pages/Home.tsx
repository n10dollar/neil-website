import NavBar, {Social} from "components/universal/NavBar.tsx";
import Background from "components/home/Background.tsx";
import Quote from "components/home/Quote.tsx";
import {MdEmail} from "react-icons/md";
import {BsInstagram, BsLinkedin} from "react-icons/bs";



const pages = ["Home", "Software", "Music", "Chess"]
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
        </>
    );
};

export default Home;