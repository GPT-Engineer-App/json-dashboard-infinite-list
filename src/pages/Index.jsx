import React, { useState } from "react";
import { Container, VStack, Image, Text, Box, SimpleGrid, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from "@chakra-ui/react";

// Sample JSON data
const jsonData = [
  {
    alt_text: "Sample Alt Text 1",
    gen_caption: "Sample Gen Caption 1",
    generated_caption: "Sample Generated Caption 1",
    id: "1",
    keywords: "sample, image, 1",
    media_id: "media1",
    preview_thumbnail_path: "https://images.unsplash.com/photo-1576158113928-4c240eaaf360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYW1wbGUlMjBpbWFnZSUyMDF8ZW58MHx8fHwxNzE1Nzg5MzQ0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    provider_preview_link: "https://example.com/preview1",
    provider_thumbnail_link: "https://example.com/thumbnail1",
    type: "image",
  },
  {
    alt_text: "Sample Alt Text 2",
    gen_caption: "Sample Gen Caption 2",
    generated_caption: "Sample Generated Caption 2",
    id: "2",
    keywords: "sample, image, 2",
    media_id: "media2",
    preview_thumbnail_path: "https://images.unsplash.com/photo-1600439614353-174ad0ee3b25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzYW1wbGUlMjBpbWFnZSUyMDJ8ZW58MHx8fHwxNzE1Nzg5MzQ1fDA&ixlib=rb-4.0.3&q=80&w=1080",
    provider_preview_link: "https://example.com/preview2",
    provider_thumbnail_link: "https://example.com/thumbnail2",
    type: "image",
  },
  // Add more items as needed
];

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
