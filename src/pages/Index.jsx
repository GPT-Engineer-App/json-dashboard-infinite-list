import React, { useState } from "react";
import { Container, VStack, Image, Text, Box, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from "@chakra-ui/react";
import jsonData from "../data";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  return (
    <Container maxW="container.xl" py={4}>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {jsonData.map((item) => (
          <Box key={item.id} onClick={() => handleItemClick(item)} cursor="pointer">
            <Image src={item.preview_thumbnail_path} alt={item.alt_text} />
          </Box>
        ))}
      </SimpleGrid>

      {selectedItem && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Image Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <Image src={selectedItem.preview_thumbnail_path} alt={selectedItem.alt_text} />
                <Text>
                  <strong>Alt Text:</strong> {selectedItem.alt_text}
                </Text>
                <Text>
                  <strong>Generated Caption:</strong> {selectedItem.generated_caption}
                </Text>
                <Text>
                  <strong>Gen Caption:</strong> {selectedItem.gen_caption}
                </Text>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Index;
