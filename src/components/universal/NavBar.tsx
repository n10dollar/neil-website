import {Button, ButtonGroup, Flex, HStack, IconButton, Image} from "@chakra-ui/react";
import {BsInstagram, BsLinkedin} from "react-icons/bs";
import {MdEmail} from "react-icons/md";

const buttonProps = {
    colorScheme: 'green',
    bg: 'green.400',
    rounded: 'full',
    px: 6,
    _hover: {bg: 'green.500'}
}

const NavBar = () => {
    return (
        <Flex justifyContent={"space-between"}>
            <HStack>
                <Image src="src/assets/sauron.png" boxSize={12} borderRadius={"full"} alt={"sauron"} />
                <ButtonGroup>
                    <Button {...buttonProps}>Home</Button>
                    <Button {...buttonProps}>About</Button>
                    <Button {...buttonProps}>Contact</Button>
                </ButtonGroup>
            </HStack>
            <ButtonGroup>
                <IconButton aria-label={"Email"} icon={<MdEmail />} />
                <IconButton aria-label={"LinkedIn"} icon={<BsLinkedin />} />
                <IconButton aria-label={"Instagram"} icon={<BsInstagram />} />
            </ButtonGroup>
        </Flex>
    );
};

export default NavBar;