import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    Textarea,
    Flex,
    FormControl,
    FormLabel,
} from "@chakra-ui/react";
import axios from "axios";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

const ModalAddNote: React.FC<Props> = ({ isOpen, onClose }) => {
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");

    const onTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const onSubmit = async () => {
        try {
            await axios
                .post("http://localhost:3000/notes", {
                    title,
                    content,
                })
                .then((res) => {
                    console.log(res);
                });
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Note</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex flexDir="column" gap="2rem">
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input type="text" onChange={onTitle} />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Content</FormLabel>

                                <Textarea resize="none" onChange={onContent} />
                            </FormControl>
                            <Button onClick={onSubmit}></Button>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalAddNote;
