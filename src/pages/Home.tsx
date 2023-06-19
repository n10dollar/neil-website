import Background from "components/home/Background.tsx";
import Quote from "components/universal/Quote.tsx";
import NamePic from "components/home/NamePic.tsx";
import Description from "components/home/Description.tsx";

const centerQuote = "Luck is the residue of design, and I'm dripping with luck."

const Home = () => {
    return (
        <>
            <Background />
            <Quote py={200}>{centerQuote}</Quote>
            <NamePic />
            <Description />
        </>
    );
};

export default Home;