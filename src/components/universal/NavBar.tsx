import {Button, ButtonGroup, Flex, HStack, IconButton, Image} from "@chakra-ui/react";
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
        <Flex justifyContent={"space-between"}>
            <HStack>
                <Image src="src/assets/sauron.png" boxSize={12} borderRadius={"full"} alt={"sauron"} />
                <ButtonGroup>{pages.map(page => <Button {...buttonProps}>{page}</Button>)}</ButtonGroup>
            </HStack>
            <ButtonGroup>{socials.map((social: Social) => <IconButton aria-label={social.name} icon={social.icon} />)}</ButtonGroup>
        </Flex>
    );
};

export default NavBar;