import React from "react";
import { Box, Image, Text, TextField, Button } from "@skynexui/components";

const Newsletter = () => {
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8%",
          height: "120px",
          borderTop: "1px solid #D3D3D3",
          borderBottom: "1px solid #D3D3D3",
        }}
      >
        <Box
          styleSheet={{
            marginTop: "1%",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Text
            styleSheet={{
              fontFamily: "Titillium Web 700",
              fontWeight: "bold",
              lineHeight: "37px",
              fontSize: "24px",
              display: "flex",
              alignItems: "center"
            }}
          >
            Receba Nossa Newsletter
          </Text>
          <TextField
            placeholder="Digite seu e-mail"
            variant="basicBordered"
            styleSheet={{
              marginLeft: "4%",
              width: "600px",
              backgroundColor: "#EFEFEF",
              borderRadius: "10px",
              height: "40px",
              border: "1px solid #353535",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          <Button
            label="Enviar"
            styleSheet={{
              backgroundColor: "#FAA500",
              color: "#FFFFFF",
              borderRadius: "4px",
              height: "40px",
              width: "131px",
              fontFamily: "Titillium Web 700",
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "24.34px",
              marginLeft: "-12.8%",
            }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Newsletter;
