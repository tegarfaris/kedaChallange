import { Box } from "@chakra-ui/react";
import React from "react";

const OrnamentNavbar: React.FC = () => {
  return (
    <Box w="200px" pos="absolute" top="-100px" left="-80px">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#14BCFB"
          d="M39.9,-71.2C49.4,-63.6,53.3,-48.3,61.5,-35.2C69.7,-22,82.1,-11,82.5,0.2C82.9,11.5,71.2,22.9,61.4,33.3C51.7,43.6,43.7,52.8,33.8,61.3C23.9,69.8,11.9,77.6,0.2,77.2C-11.5,76.8,-23,68.4,-35.7,61.5C-48.4,54.6,-62.3,49.3,-70.8,39.3C-79.2,29.3,-82.2,14.7,-83.4,-0.7C-84.6,-16.1,-84,-32.1,-77.4,-45.2C-70.7,-58.3,-58,-68.3,-44.1,-73.4C-30.2,-78.5,-15.1,-78.7,0,-78.7C15.2,-78.8,30.3,-78.8,39.9,-71.2Z"
          transform="translate(100 100)"
        />
      </svg>
    </Box>
  );
};

export default OrnamentNavbar;
