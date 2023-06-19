import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Style from "src/style-config.json";
import { MdEmail } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";

const buttonProps = {
  bgGradient: Style.bgGradient,
  rounded: "full",
  px: 6,
  _hover: { bg: "green.500" },
};

const pages = [
  { name: "Home", URL: "/" },
  { name: "Software", URL: "/software" },
  { name: "Music", URL: "/music" },
  { name: "Chess", URL: "/chess" },
];

const socials = [
  {
    name: "Email",
    icon: <MdEmail />,
    URL: "mailto:ntendolkar@berkeley.edu?subject=Saw%20your%20website!",
  },
  {
    name: "LinkedIn",
    icon: <BsLinkedin />,
    URL: "https://www.linkedin.com/in/n10dollar/",
  },
  {
    name: "Instagram",
    icon: <BsInstagram />,
    URL: "https://www.instagram.com/n10dollar/",
  },
];

const NavBar = () => {
  return (
    <Flex justify="Xspace-between" align={"center"} px={5}>
      <Box flex={"1 1 0"}>
        <Image src="src/assets/sauron.png" w={16} alt={"sauron"} />
      </Box>
      <ButtonGroup flex={"0 1 0"} spacing={30}>
        {pages.map(({ name, URL }) => (
          <NavLink to={URL}>
            <Button {...buttonProps}>{name}</Button>
          </NavLink>
        ))}
      </ButtonGroup>
      <Flex flex={"1 1 0"} justify="flex-end">
        <ButtonGroup>
          {socials.map(({ name, icon, URL }) => (
            <Link href={URL} isExternal>
              <IconButton aria-label={name} icon={icon} />
            </Link>
          ))}
        </ButtonGroup>
      </Flex>
    </Flex>
  );
};

export default NavBar;
