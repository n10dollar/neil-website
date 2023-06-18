import {Box, Button, ButtonGroup, Flex, IconButton, Image} from "@chakra-ui/react";
import Style from "src/style-config.json";

interface Props {
    pages: string[],
    socials: Social[]
}

export interface Social {
    name: string,
    icon: any
}

const buttonProps = {
    bgGradient: Style.bgGradient,
    rounded: 'full',
    px: 6,
    _hover: {bg: 'green.500'}
}

const NavBar = ({pages, socials}: Props) => {
    return (
        <Flex justify="Xspace-between" align={"center"} px={5} >
            <Box flex={"1 1 0"}><Image src="src/assets/sauron.png" w={16} alt={"sauron"} /></Box>
            <ButtonGroup
                flex={"0 1 0"}
                spacing={30}>
                {pages.map(page => <Button {...buttonProps}>{page}</Button>)}
            </ButtonGroup>
            <Flex flex={"1 1 0"} justify="flex-end">
                <ButtonGroup>{socials.map((social: Social) => <IconButton aria-label={social.name} icon={social.icon} />)}</ButtonGroup>
            </Flex>
        </Flex>
    );
};

export default NavBar;