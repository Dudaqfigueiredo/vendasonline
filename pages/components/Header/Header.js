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
            height: "10%",
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
            Acompanhe as melhores promoções disponíveis aqui na Compra Comigo.
          </Text>
        </Box>
        <Box
          styleSheet={{
            padding: "absolute",
            color: "white",
            backgroundColor: "#FFFFF",
            height: "50%",
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
              width: "20%",
              height: "40%",
              marginLeft: "5%",
              marginTop: "-6.5%",
              marginBottom: "2.5%",
            }}
            src="./logo.png"
          />
          <TextField
            placeholder="O Que Você Busca?"
            variant="basicBordered"
            styleSheet={{
              marginLeft: "30%",
              marginRight: "38%",
              marginTop: "1%",
              marginBottom: "2%",
              width: "41%",
              backgroundColor: "#EFEFEF",
              borderRadius: "10px",
              height: "40px",
              borderColor: "#2f5061",
            }}
          />
          <Button
            label="Buscar"
            styleSheet={{
              position: "absolute",
              backgroundColor: "#2f5061",
              color: "#FFFFFF",
              borderRadius: "8px",
              height: "6%",
              width: "10%",
              marginTop: "1%",
              marginBottom: "2%",
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
              border: "1px solid #2f5061",
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
                backgroundColor: "#FFFFF"
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
              backgroundColor: "#FFFFF",
              width: "64px",
              height: "21px",

              fontFamily: "Titillium Web",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "14px",
              lineHeight: "21px",

              color: "#2f5061",
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
