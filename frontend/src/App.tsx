import { Flex, useDisclosure } from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import Navbar from "./components/Navbar";
import ModalAddNote from "./components/ModalAddNote";



function App() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Flex w="100vw" minH="100vh" bg="#f1f2f3" justifyContent="center">
                <ModalAddNote isOpen={isOpen} onClose={onClose}/>
                <Navbar onOpen={onOpen}/>
                
            </Flex>
        </>
    );
}

export default App;
