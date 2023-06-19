import {Image, Center, Container, Heading, Text, Wrap, WrapItem} from "@chakra-ui/react";

const BackgroundOld = () => {
    return (
        <Center
            backgroundImage="src/assets/background.jpeg"
            backgroundSize="cover"
            backgroundPosition="center"
            height="100vh"
        >
            <Wrap align={"center"} justify={"space-evenly"}>
                <WrapItem>
                    <Container border={"solid"} centerContent={true} bgGradient='linear(to-r, green.200, pink.500)'>
                        <Heading>Welcome to my website</Heading>
                        <Text textAlign={"center"}>
                            I'm a 19 year-old dude from Cerritos, CA.
                            <br />
                            I love CS because it allows one to actualize almost any project they can imagine.
                            My dream is to build my own tailored audio EQ (equalizer) one day.
                            <br />
                            I'm not always at the desk though.
                            Well... sort of.
                            <br />
                            I love producing beats on FL Studio (kudos Image Line!) and still believe chess is the greatest sport out there.
                            <br />
                            And I make sure I have time for the gym too:
                            after all, healthy body, healthy mind (and healthier rizz).
                        </Text>
                    </Container>
                </WrapItem>
                <WrapItem>
                    <Image src={"src/assets/neil-beach.png"}
                           width={{
                               base: 300, // 0-48em
                               md: 300, // 48em-80em,
                               xl: 500, // 80em+
                    }}/>
                </WrapItem>
            </Wrap>
        </Center>
    );
};

export default BackgroundOld;