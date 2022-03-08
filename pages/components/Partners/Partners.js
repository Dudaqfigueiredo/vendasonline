import React from "react";
import { Box, Image, Text, TextField, Button } from "@skynexui/components";

const Partners = () => {
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "75px"
        }}
      >
        <Text
          styleSheet={{
            height: "24px",
            fontFamily: "Titillium Web 700",
            fontWeight: "bold",
            fontSize: "32px",
            lineHeight: "49px",
            display: "flex",
            textAlign: "center",
            color: "#353535",
            marginBottom: "21px",
          }}
        >
          Marcas Parceiras
        </Text>
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            marginTop: "17px"
          }}
        >
          <Image
            tag="a"
                styleSheet={{
                  height: "64px",
                  width: "234.2px",
                  marginRight: "22px",
                }}
                src="./comma.png"
          />
          <Image
            tag="a"
                styleSheet={{
                  height: "64px",
                  width: "234.2px",
                  marginRight: "22px",
                }}
                src="./melissa.png"
          />
          <Image
            tag="a"
                styleSheet={{
                  height: "64px",
                  width: "234.2px",
                  marginRight: "22px",
                }}
                src="./forever.png"
          />
          <Image
            tag="a"
                styleSheet={{
                  height: "64px",
                  width: "234.2px",
                  marginRight: "22px",
                }}
                src="./zara.png"
          />
          <Image
            tag="a"
                styleSheet={{
                  height: "64px",
                  width: "234.2px",
                  marginRight: "22px",
                }}
                src="./taylor.png"
          />
        </Box>
      </Box>
    </>
  );
};
export default Partners;
