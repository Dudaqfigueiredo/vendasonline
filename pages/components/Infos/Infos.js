import React from "react";
import { Box, Image, Text, TextField, Button } from "@skynexui/components";

const Infos = () => {
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "4%",
          marginLeft: "2%"
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "column",
            gap: "24px"
          }}
        >
            <Text
                styleSheet={{
                    marginBottom: "1px",
                    width: "100px",
                    height: "18px",
                    fontFamily: "Titillium Web 700",
                    fontSize: "16px",
                    fontWeight: "bold"
                }}
            >Informações</Text>
            <Text
                styleSheet={{
                    width: "100px",
                    height: "18px",
                    fontFamily: "Titillium Web 400",
                    fontSize: "12px",
                }}
            >Quem Somos</Text>
            <Text
                styleSheet={{
                    width: "100px",
                    height: "18px",
                    fontFamily: "Titillium Web 400",
                    fontSize: "12px",
                }}
            >Prazo de Envio</Text>
            <Text
                styleSheet={{
                    width: "120px",
                    height: "18px",
                    fontFamily: "Titillium Web 400",
                    fontSize: "12px",
                }}
            >Trocas e Devoluções</Text>
            <Text
                styleSheet={{
                    width: "120px",
                    height: "18px",
                    fontFamily: "Titillium Web 400",
                    fontSize: "12px",
                }}
            >Promoções e Cupons</Text>
        </Box>
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "column",
            gap: "24px"
          }}
        >
            <Text
                styleSheet={{
                    marginBottom: "1px",
                    width: "100px",
                    height: "18px",
                    fontFamily: "Titillium Web 700",
                    fontSize: "16px",
                    fontWeight: "bold"
                }}
            >Minha Conta</Text>
            <Text
                styleSheet={{
                    width: "100px",
                    height: "18px",
                    fontFamily: "Titillium Web 400",
                    fontSize: "12px",
                }}
            >Minha Conta</Text>
            <Text
                styleSheet={{
                    width: "100px",
                    height: "18px",
                    fontFamily: "Titillium Web 400",
                    fontSize: "12px",
                }}
            >Meus Pedidos</Text>
            <Text
                styleSheet={{
                    width: "100px",
                    height: "18px",
                    fontFamily: "Titillium Web 400",
                    fontSize: "12px",
                }}
            >Cadastra-se</Text>
        </Box>
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "column",
            gap: "24px"
          }}
        >
            <Text
                styleSheet={{
                    marginBottom: "1px",
                    width: "154px",
                    height: "18px",
                    fontFamily: "Titillium Web 700",
                    fontSize: "16px",
                    fontWeight: "bold"
                }}
            >Onde nos Encontrar</Text>
            <Text
                styleSheet={{
                    width: "100px",
                    height: "18px",
                    fontFamily: "Titillium Web 400",
                    fontSize: "12px",
                }}
            >Lojas</Text>
            <Text
                styleSheet={{
                    width: "100px",
                    height: "18px",
                    fontFamily: "Titillium Web 400",
                    fontSize: "12px",
                }}
            >Endereços</Text>
        </Box>
      </Box>
    </>
  );
};
export default Infos;
