import {Button, ButtonGroup, Flex, HStack, IconButton, Image} from "@chakra-ui/react";
import {BsInstagram, BsLinkedin} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import Style from "src/style-config.json";

const buttonProps = {
    bgGradient: Style.bgGradient,
    rounded: 'full',
    px: 6,
    _hover: {bg: 'green.500'}
}

const pages = ["Home", "Software", "Music", "Chess"]

const NavBar = () => {
    return (
        <Flex justifyContent={"space-between"}>
            <HStack>
                <Image src="src/assets/sauron.png" boxSize={12} borderRadius={"full"} alt={"sauron"} />
                <ButtonGroup>{pages.map(page => <Button {...buttonProps}>{page}</Button>)}</ButtonGroup>
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