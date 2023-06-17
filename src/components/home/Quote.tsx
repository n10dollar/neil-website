import {Heading} from "@chakra-ui/react";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
    py?: number
}

const Quote = ({children, py=0}: Props) => {
    return (
        <Heading
            bgColor={"green"}
            textAlign={"center"}
            py={py}>
            {children}
        </Heading>
    );
};

export default Quote;