import {Image, Center, Container, Heading, Text, Wrap, WrapItem} from "@chakra-ui/react";

const Background = () => {
    return (
        <Center
            backgroundImage="src/assets/background.jpeg"
            backgroundSize="cover"
            backgroundPosition="center"
            height="100vh"
        >
            <Wrap align={"center"} justify={"space-evenly"} border="solid">
                <WrapItem>
                    <Container border={"solid"} centerContent={true}>
                        <Heading>
                            Welcome to my website
                        </Heading>
                        <Text>
                            This is a simple website for my personal website.
                        </Text>
                    </Container>
                </WrapItem>
                <WrapItem>
                    <Image src={"src/assets/neil-beach.png"}
                           width={{
                               base: 200, // 0-48em
                               md: 300, // 48em-80em,
                               xl: 500, // 80em+
                    }}/>
                </WrapItem>
            </Wrap>
        </Center>
    );
};

export default Background;