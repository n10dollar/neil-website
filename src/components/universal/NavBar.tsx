import {Button, ButtonGroup, Flex, HStack, Image} from "@chakra-ui/react";

const NavBar = () => {
    return (
        <Flex backgroundColor={"blue"}>
            <HStack>
                <Image src={"src/assets/sauron.png"} alt={"sauron"} />
                <ButtonGroup>
                    <Button>Home</Button>
                    <Button>About</Button>
                    <Button>Contact</Button>
                </ButtonGroup>
            </HStack>
        </Flex>
    );
};

export default NavBar;