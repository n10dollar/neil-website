import {Image, Heading, Wrap} from "@chakra-ui/react";

const NamePic = () => {
    return (
        <Wrap
            flexDirection={"row"}
            align={"center"}
            justify={"space-evenly"}
            textAlign={"center"}
            py={50}>
            <Heading
                w={500}
                py={50}
            >
                Hi, I'm Neil. Welcome to my website!
            </Heading>
            <Image
                src={"src/assets/neil-beach.png"}
                w={500}
            />
        </Wrap>
    );
};

export default NamePic;