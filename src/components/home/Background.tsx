import {Heading, Flex} from "@chakra-ui/react"

const Background = () => {
    return (
        <Flex
            bgImage={"src/assets/background.jpeg"}
            flexDirection={"column"}
            height={"100vh"}
            justify={"space-evenly"}
            textAlign={"center"}>
            <Heading>Neil Tendolkar</Heading>
            <Heading>Software Developer</Heading>
        </Flex>
    );
};

export default Background;