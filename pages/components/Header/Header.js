import React from "react";
import { Box, Image, Text, TextField, Button } from "@skynexui/components";

const Header = () => {
  return (
    <>
      <Box>
        
        <Box
          styleSheet={{
            padding: "absolute",
            color: "white",
            backgroundColor: "#353535",
            height: "24px",
            marginLeft: "0px",
            marginTop: "0px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Text
            variant="body3"
            styleSheet={{
              fontFamily: "Titillium Web",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "12px",
              lineHeight: "18px",

              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",

              color: "#FFFFFF",
            }}
          >
            Acompanhe as melhores promoções disponíveis aqui na Maeztra.
          </Text>
        </Box>
        <Box
          styleSheet={{
            padding: "absolute",
            color: "white",
            backgroundColor: "#FFFFF",
            height: "88px",
            marginLeft: "0px",
            marginTop: "24px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.08)",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Image
            tag="a"
            styleSheet={{
              position: "absolute",
              width: "147px",
              height: "18px",
              marginLeft: "161px",
              marginRight: "93px",
              marginTop: "35px",
              marginBottom: "35px",
            }}
            src="./maeztra.png"
          />
          <TextField
            placeholder="O Que Você Busca?"
            variant="basicBordered"
            styleSheet={{
              marginLeft: "30%",
              marginRight: "38%",
              marginTop: "20px",
              marginBottom: "35px",
              width: "41%",
              backgroundColor: "#EFEFEF",
              borderRadius: "10px",
              height: "40px",
              
            }}
          />
          <Button
            label="Buscar"
            styleSheet={{
              position: "absolute",
              backgroundColor: "#FAA500",
              color: "#FFFFFF",
              borderRadius: "8px",
              height: "40px",
              width: "119px",
              marginTop: "20px",
              marginBottom: "35px",
              marginLeft: "54%",
              fontFamily: "Titillium Web",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "21px",
              fontWight: "bold",
            }}
          />
          <Image
            tag="a"
            styleSheet={{
              position: "absolute",
              width: "14px",
              height: "16px",
              marginLeft: "70%",
              marginTop: "35px",
              marginBottom: "35px",
            }}
            src="./user.png"
          />
          <Text
            variant="heading5"
            styleSheet={{
              position: "absolute",
              fontFamily: "Titillium Web",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "21px",
              color: "#353535",
              marginLeft: "71.5%",
              marginTop: "32px",
              marginBottom: "35px",
            }}
          >
            Minha Conta
          </Text>
          <Image
            tag="a"
            styleSheet={{
              position: "absolute",
              width: "18.28px",
              height: "16px",
              marginLeft: "79%",
              marginTop: "35px",
              marginBottom: "35px",
            }}
            src="./fav.png"
          />
          <Text
            variant="heading5"
            styleSheet={{
              position: "absolute",
              fontFamily: "Titillium Web",
              fontStyle: "normal",
              fontSize: "14px",
              lineHeight: "21px",
              color: "#353535",
              marginLeft: "80.5%",
              marginTop: "32px",
              marginBottom: "35px",
            }}
          >
            Minha Conta
          </Text>

          <Box
            styleSheet={{
              position: "absolute",
              border: "1px solid #FAA500",
              marginLeft: "89%",
              backgroundColor: "#FFFFFF",
              width: "134px",
              height: "46px",
              marginTop: "16px",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Image
              tag="a"
              styleSheet={{
                marginLeft: "17px",
                width: "14.38px",
                height: "16px",
              }}
              src="./cart.png"
            />
            <Text
              variant="heading5"
              styleSheet={{
                fontFamily: "Titillium Web",
                fontStyle: "normal",
                fontSize: "14px",
                lineHeight: "21px",
                color: "#353535",
                marginLeft: "9px",
              }}
            >
              Meu Carrinho
            </Text>
          </Box>
        </Box>
        <Box
          styleSheet={{
            color: "#353535",
            backgroundColor: "#FFFFF",
            height: "48px",
            display: "flex",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.08)",
          }}
        >
          <Image
            tag="a"
            styleSheet={{
              width: "16px",
              height: "18px",
              marginRight: "0.5%",
            }}
            src="./dress.png"
          />
          <Text
            styleSheet={{
              color: "#353535",
              backgroundColor: "#FFFFF",
              width: "64px",
              height: "21px",

              fontFamily: "Titillium Web",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "14px",
              lineHeight: "21px",

              color: "#FAA500",
            }}
          >
            Novidades
          </Text>
          <Text
            styleSheet={{
              color: "#353535",
              backgroundColor: "#FFFFF",
              width: "64px",
              height: "21px",

              fontFamily: "Titillium Web",
              fontStyle: "normal",

              fontSize: "14px",
              lineHeight: "21px",
              marginLeft: "3%",

              color: "#353535",
            }}
          >
            Vestidos
          </Text>
          <Text
            styleSheet={{
              color: "#353535",
              backgroundColor: "#FFFFF",
              width: "64px",
              height: "21px",

              fontFamily: "Titillium Web",
              fontStyle: "normal",

              fontSize: "14px",
              lineHeight: "21px",
              marginLeft: "3%",

              color: "#353535",
            }}
          >
            Roupas
          </Text>
          <Text
            styleSheet={{
              color: "#353535",
              backgroundColor: "#FFFFF",
              width: "64px",
              height: "21px",
              marginLeft: "3%",

              fontFamily: "Titillium Web",
              fontStyle: "normal",

              fontSize: "14px",
              lineHeight: "21px",

              color: "#353535",
            }}
          >
            Sapatos
          </Text>
          <Text
            styleSheet={{
              color: "#353535",
              backgroundColor: "#FFFFF",
              width: "64px",
              height: "21px",
              marginLeft: "3%",

              fontFamily: "Titillium Web",
              fontStyle: "normal",

              fontSize: "14px",
              lineHeight: "21px",

              color: "#353535",
            }}
          >
            Lingerie
          </Text>
          <Text
            styleSheet={{
              color: "#353535",
              backgroundColor: "#FFFFF",
              width: "64px",
              height: "21px",
              marginLeft: "3%",

              fontFamily: "Titillium Web",
              fontStyle: "normal",

              fontSize: "14px",
              lineHeight: "21px",

              color: "#353535",
            }}
          >
            Acessórios
          </Text>
          <Text
            styleSheet={{
              color: "#353535",
              backgroundColor: "#FFFFF",
              width: "64px",
              height: "21px",
              marginLeft: "3%",

              fontFamily: "Titillium Web",
              fontStyle: "normal",

              fontSize: "14px",
              lineHeight: "21px",

              color: "#353535",
            }}
          >
            OUTLET
          </Text>
        </Box>
      </Box>
    </>
  );
};
export default Header;
