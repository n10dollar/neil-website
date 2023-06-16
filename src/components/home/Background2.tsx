import {Box, Center, Text, Heading, VStack, Flex, Spacer} from "@chakra-ui/react"

const b = {
        display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const Background2 = () => {
    return (
        <Flex bgImage={"src/assets/background.jpeg"}
              height="100vh" flexDirection={"column"}
              justify={"space-evenly"}
              textAlign={"center"}
              border={"solid"}>
            <Heading>Neil Tendolkar</Heading>
            <Heading>Software Developer</Heading>
        </Flex>
    );
};

export default Background2;