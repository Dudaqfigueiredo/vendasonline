import React from "react";
import { Box, Image, Text, TextField, Button } from "@skynexui/components";

const Introduction = () => {
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "9%",
          }}
        >
          <Text
            styleSheet={{
              height: "37px",
              marginTop: "155px",
              fontFamily: "Titillium Web 700",
              fontSize: "24px",
              lineHeight: "36.5px",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            Lorem ipsum
          </Text>
          <Text
            styleSheet={{
              height: "172px",
              width: "420px",
              marginTop: "16px",
              fontFamily: "Titillium Web 400",
              fontSize: "14px",
              lineHeight: "21px",
              color: "#000000",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
            dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris
            integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque placerat consequat.
            Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique.
            Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue
            eget convallis volutpat aliquet. Sed sed pellentesque porttitor
            phasellus donec condimentum sit sapien.
          </Text>
        </Box>
        <Image
          tag="a"
          styleSheet={{
            width: "550px",
            height: "320px",
            marginLeft: "20%",
            marginTop: "100px"
          }}
          src="./images.jpg"
        />
      </Box>
    </>
  );
};

export default Introduction;
