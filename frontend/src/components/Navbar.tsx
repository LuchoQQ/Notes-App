import { Flex, Text, Icon } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";

type Props = {
    onOpen: () => void;
};

const Navbar: React.FC<Props> = ({ onOpen }) => {
    return (
        <>
            <Flex
                w="80%"
                h="5rem"
                bg="#fff"
                rounded="50px"
                alignItems="center"
                mt="2rem"
            >
                <Text
                    fontSize="md"
                    ml="3rem"
                    bg="#007BFF"
                    px="1rem"
                    py=".5rem"
                    rounded="50px"
                    color="#fff"
                >
                    All Notes
                </Text>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    ml="auto"
                    mr="1rem"
                    bg="#007bff"
                    p=".5rem"
                    rounded="50px"
                    cursor='pointer'
                    onClick={onOpen}
                >
                    <Icon as={IoMdAdd} fill="#fff" />
                </Flex>
                <Text fontSize="md" mr="3rem" color="red">
                    Sign Out
                </Text>
            </Flex>
        </>
    );
};

export default Navbar;
