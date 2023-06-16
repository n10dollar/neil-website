import {Heading} from "@chakra-ui/react";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
    py: number
}

const Quote = ({children, py}: Props) => {
    return (
        <Heading
            textAlign={"center"}
            py={py}>
            {children}
        </Heading>
    );
};

export default Quote;