import React from "react";
import { Box, Image, Text, TextField, Button } from "@skynexui/components";


const Alert = () => {
  const handleClick = () => {
    console.log("Oi")
  };
  return (
    <>
      <Box
        className="fechar"
        styleSheet={{
          position: "absolute",
          backgroundColor: "black",
          width: "100%",
          height: "420%",
          opacity: "0.5",
          zIndex: "2",
        }}
      ></Box>

      <Button
        variant="tertiary"
        label="FECHAR"
        onClick={handleClick}
        styleSheet={{
          position: "absolute",
          color: "#FFFFFF",
          fontFamily: "Lato 400",
          fontSize: "12px",
          lineHeight: "20px",
          marginTop: "27%",
          marginLeft: "78%",
          zIndex: "3",
        }}
      />
      <Box
        className="fechar"
        styleSheet={{
          position: "absolute",
          width: "848px",
          height: "529.65px",
          marginTop: "30%",
          marginLeft: "20%",
          backgroundColor: "#FFFFFF",
          zIndex: "3",
        }}
      >
        <Image
          tag="a"
          styleSheet={{
            position: "absolute",
            width: "424px",
            height: "530px",
          }}
          src="./alertimage.png"
        />
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "50%",
            marginTop: "15%",
          }}
        >
          <Image
            tag="a"
            styleSheet={{
              width: "28px",
              height: "29px",
              marginBottom: "12px",
            }}
            src="./email.png"
          />
          <Text
            styleSheet={{
              fontFamily: "Titillium Web 400",
              fontSize: "12px",
              lineHeight: "20px",
              color: "#464B54",
            }}
          >
            BEM VINDO À MAEZTRA
          </Text>
          <Text
            styleSheet={{
              fontFamily: "Lato 700",
              fontSize: "20px",
              lineHeight: "23px",
              color: "#787D83",
              width: "300px",
              textAlign: "center",
              marginTop: "12px",
            }}
          >
            Receba em primeira mão{" "}
            <strong>descontos e ofertas exclusivas</strong>
          </Text>
          <TextField
            placeholder="Digite seu e-mail"
            variant="basicBordered"
            styleSheet={{
              marginTop: "25px",
              width: "80%",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              height: "40px",
              border: "1px solid #C4C4C4",
            }}
          />
          <Button
            label="Enviar"
            iconName="paperPlane"
            styleSheet={{
              backgroundColor: "#FAA500",
              color: "#FFFFFF",
              borderRadius: "10px",
              height: "40px",
              width: "80%",
              fontFamily: "Titillium Web",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "21px",
              fontWight: "bold",
              marginTop: "12px",
            }}
          />
        </Box>
      </Box>
    </>
  );
};
export default Alert;
