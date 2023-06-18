import {SimpleGrid, Heading, Flex} from "@chakra-ui/react";

interface RowItem {
    description: string,
    image: string
}

const rowItems: RowItem[] = [
    {description: "Create the next generation software!", image: "Xsrc/assets/sauron.png"},
    {description: "Ever wanted to produce your own beat?", image: "Xsrc/assets/sauron.png"},
    {description: "Learn to checkmate in four!", image: "Xsrc/assets/sauron.png"},
    {description: "Considered cooking up scrumptious eats?", image: "Xsrc/assets/sauron.png"}
];

const Description = () => {
    let left = true;

    return (
        <SimpleGrid row={rowItems.length}>
            {rowItems.map((rowItem, index) => (
                <>
                    <Flex
                        key={index}
                        justify={left ? "left" : "right"}
                        textAlign={left ? "left" : "right"}
                        bgImage={rowItem.image}
                        px={5}
                        bgGradient={
                            left ? "linear(to-r, green.200, pink.500)"
                            : "linear(to-r, green.500, pink.200)"}
                        py={2}>
                        <Heading w={400} float={"right"}>{rowItem.description}</Heading>
                    </Flex>
                    {left = !left}
                </>
            ))}
        </SimpleGrid>
    );
};

export default Description;