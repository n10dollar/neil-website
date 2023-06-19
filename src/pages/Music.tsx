import NavBar, {Social} from "components/universal/NavBar.tsx";
import {MdEmail} from "react-icons/md";
import {BsInstagram, BsLinkedin} from "react-icons/bs";

const socials: Social[] = [
    {name: "Email", icon: <MdEmail />},
    {name: "LinkedIn", icon: <BsLinkedin />},
    {name: "Instagram", icon: <BsInstagram />},
]

const Music = () => {
    return (
       <NavBar pages={["Music"]} socials={socials} />
    );
};

export default Music;