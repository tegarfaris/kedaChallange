import {
  Badge,
  Divider,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import TitleHeading from "@kedachallange/app/components/title-heading";
import React from "react";

const DATA_TIER = [
  {
    id: 1,
    title: "TIER 1 / BASIC",
    benefit: [
      "Record incoming goods",
      "Record outgoing goods",
      "Record profit result",
    ],
    beforeDiscount: "249",
    afterDiscount: "199",
  },
  {
    id: 2,
    title: "TIER 2 / BUSINNESS",
    benefit: [
      "Record incoming goods",
      "Record outgoing goods",
      "Record profit result",
      "Can analyze sales results with CHART",
      "Support 7x24 Hours",
    ],
    beforeDiscount: "529",
    afterDiscount: "389",
  },
  {
    id: 3,
    title: "TIER 3 / ENTREPRENEUR",
    benefit: [
      "Record incoming goods",
      "Record outgoing goods",
      "Record profit result",
      "Can analyze sales results with CHART",
      "Support 7x24 Hours",
      "Export data to excel",
      "AI Earning Prediction",
    ],
    beforeDiscount: "743",
    afterDiscount: "676",
  },
];

const PricingSection: React.FC = () => {
  return (
    <Flex
      id="pricing-section"
      flexDir="column"
      pt={{ base: "350px", md: "50px", lg: "150px" }}
      gap={{ base: "30px", lg: "50px" }}
      w="full"
      alignItems="center"
    >
      <TitleHeading title="Pricing" />
      <Flex
        flexDir={{ base: "column", lg: "row" }}
        gap="10px"
        w="full"
        justifyContent="center"
      >
        {DATA_TIER.map((tier) => (
          <Flex
            key={tier.id}
            flexDir="column"
            w={{ base: "full", lg: "300px" }}
            gap="20px"
            h="fit-content"
            border="2px solid"
            p="20px"
            mt={{ base: "0px", lg: tier.id !== 2 ? "70px" : "0px" }}
            borderRadius="10px"
            bg={tier.id === 2 ? "#14BCFB" : "transparent"}
            color={tier.id === 2 ? "white" : "black"}
            _hover={{
              borderColor: tier.id !== 2 && "#14BCFB",
              cursor: "pointer",
            }}
          >
            <Badge
              display={tier.id === 2 ? "flex" : "none"}
              w="fit-content"
              borderRadius="md"
              px="10px"
              bg="white"
              color="#14BCFB"
            >
              Best Seller
            </Badge>
            <Text fontWeight={700} textAlign="center" fontSize="20px">
              {tier.title}
            </Text>
            <Divider />

            <Flex flexDir="column" gap="20px">
              <Text fontWeight={600}>Benefit: </Text>
              <UnorderedList pl="10px" fontWeight={600} height="200px">
                {tier.benefit.map((item) => (
                  <Flex key={item} gap="5px">
                    🌟<Text>{item}</Text>
                  </Flex>
                ))}
              </UnorderedList>

              <Divider />
              <Text textAlign="center" fontWeight={700} fontSize="20px">
                Price:{" "}
                <Text as="s" color="gray">
                  ${tier.beforeDiscount}/month
                </Text>{" "}
                <Text
                  as="span"
                  fontSize="30px"
                  fontWeight={800}
                  color={tier.id === 2 ? "white" : "#14BCFB"}
                >
                  ${tier.afterDiscount}/month
                </Text>
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default PricingSection;
