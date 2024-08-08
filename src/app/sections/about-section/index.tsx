import {
  Box,
  Flex,
  Image,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
} from "@chakra-ui/react";
import TitleHeading from "@kedachallange/app/components/title-heading";
import React from "react";

const steps = [
  {
    title: "About Our ERP Solution",
    description:
      "Our ERP system is designed to integrate and streamline all your business processes, providing a unified platform for managing operations, finance, human resources, and more. With robust features and a user-friendly interface, our ERP solution helps businesses of all sizes improve efficiency, reduce costs, and gain real-time insights.",
  },
  {
    title: "Transform Your Business with Our ERP System",
    description:
      "At Tegar ERP, we understand the complexities of modern business operations. Our ERP software offers a comprehensive suite of tools to manage everything from supply chain and inventory to accounting and customer relationships. Tailored to meet the unique needs of your industry, our ERP solution empowers you to make data-driven decisions and drive growth.",
  },
  {
    title: "Why Choose Our ERP Software?",
    description:
      "Our ERP solution stands out for its flexibility, scalability, and ease of use. Whether you're a small business looking to improve operational efficiency or a large enterprise seeking to integrate multiple departments, our ERP system is designed to grow with you. Experience seamless integration, enhanced productivity, and unparalleled support with our cutting-edge ERP software.",
  },
];

const AboutSection: React.FC = () => {
  return (
    <Flex flexDir="column" w="full" pt="50px" minH="100vh" alignItems="center">
      <TitleHeading title="About ERP" />

      <Flex
        flexDir={{ base: "column", md: "row" }}
        w="full"
        pt="40px"
        gap="350px"
      >
        <Image
          src="/assets/about-illustration.svg"
          w="400px"
          alt="about-illustration"
        />

        <Stepper index={3} orientation="vertical" height="500px" gap="0">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      </Flex>
    </Flex>
  );
};

export default AboutSection;
