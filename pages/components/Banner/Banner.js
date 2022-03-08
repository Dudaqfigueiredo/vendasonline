import React from "react";
import ReactDOM from "react-dom";
import { Box, Image, Text, TextField, Button } from "@skynexui/components";

const Banner = () => {
  return (
    <>
      <Box
        styleSheet={{
          marginBottom: "4%"
        }}
      >
        <Image
          tag="a"
          styleSheet={{
            position: "absolute",
            height: "80%",
            zIndex: "-1",
          }}
          src="./banner.png"
        />
        <Image
          tag="a"
          styleSheet={{
            position: "absolute",
            marginLeft: "8.40%",
            marginTop: "21%",
          }}
          src="./arrowLeft.png"
        />

        <Image
          tag="a"
          styleSheet={{
            position: "absolute",
            marginLeft: "91%",
            marginTop: "21%",
          }}
          src="./arrowRight.png"
        />

        <Box
          styleSheet={{
            marginTop: "9%",
            marginLeft: "17%",
          }}
        >
          <Text
            variant="heading3"
            styleSheet={{
              fontFamily: "Montserrat 700",
              fontStyle: "normal",
              fontSize: "40px",
              lineHeight: "48.76px",
              color: "#FFFFFF",
              height: "49px",

              marginBottom: "40px",
            }}
          >
            Promoções de Outono
          </Text>
          <Text
            variant="body4"
            styleSheet={{
              fontFamily: "Montserrat 400",
              fontStyle: "normal",
              fontSize: "20px",
              lineHeight: "24.38px",
              color: "#FFFFFF",
              height: "48px",
              marginRight: "65%",
              marginBottom: "32px",
            }}
          >
            Confira os melhores looks para combinar com você nesse Outono
          </Text>
          <Button
            label="Conferir"
            styleSheet={{
              backgroundColor: "#FAA500",
              color: "#FFFFFF",
              borderRadius: "10px",
              height: "48px",
              width: "128px",
              fontFamily: "Montserrat 700",
              fontStyle: "normal",
              fontSize: "16px",
              lineHeight: "19.5px",
              fontWeight: "bold",
            }}
          />
        </Box>
        <Box
            styleSheet={{
                display:"flex",
                flexDirection: "row",
                flexFlow: "center",
                alignItems: "center",
                gap: "16px",
                marginTop: "14%",
                marginLeft: "46.5%"

            }}
        >
            <Box
                styleSheet={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "#FAA500",
                    
                }}
            >
            </Box>
            <Box
                styleSheet={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    border: "2px solid #FAA500",
                    backgroundColor: "none",
                    
                }}
            >
            </Box>
            <Box
                styleSheet={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    border: "2px solid #FAA500",
                    backgroundColor: "none",
                    
                }}
            >
            </Box>
            <Box
                styleSheet={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    border: "2px solid #FAA500",
                    backgroundColor: "none",
                    
                }}
            >
            </Box>
            <Box
                styleSheet={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    border: "2px solid #FAA500",
                    backgroundColor: "none",
                    
                }}
            >
            </Box>
        </Box>
      </Box>
    </>
  );
};

export default Banner;
