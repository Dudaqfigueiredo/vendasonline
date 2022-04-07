import React from "react";
import { Box, Image, Text} from "@skynexui/components";

const Reasons = () => {
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Text
          styleSheet={{
            height: "24px",
            fontFamily: "Titillium Web 700",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "24px",
            display: "flex",
            textAlign: "center",
            color: "#353535",
            marginBottom: "21px",
          }}
        >
          Por que comprar na Compra Comigo?
        </Text>

        {/* Todas as caixas */}
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          {/* Cada caixa */}
          <Box
            styleSheet={{
              width: "308px",
              height: "64px",
              borderRadius: "4px",
              backgroundColor: "#EFEFEF",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Imagem e texto */}
            <Box
              styleSheet={{
                display: "flex",
                marginLeft: "27px",
              }}
            >
              <Image
                tag="a"
                styleSheet={{
                  height: "32px",
                  width: "32px",
                  marginRight: "22px",
                }}
                src="./world.png"
              />

              {/* Texto */}
              <Box
                styleSheet={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text
                  styleSheet={{
                    fontFamily: "Titillium Web 700",
                    fontWeight: "bold",
                    lineHeight: "21px",
                    fontSize: "14px",
                  }}
                >
                  Produtos Importados
                </Text>
                <Text
                  styleSheet={{
                    fontFamily: "Titillium Web 400",
                    lineHeight: "18px",
                    fontSize: "12px",
                  }}
                >
                  Produtos de Alta Qualidade
                </Text>
              </Box>
            </Box>
          </Box>
          {/* Cada caixa */}
          <Box
            styleSheet={{
              width: "308px",
              height: "64px",
              borderRadius: "4px",
              backgroundColor: "#EFEFEF",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Imagem e texto */}
            <Box
              styleSheet={{
                display: "flex",
                marginLeft: "27px",
              }}
            >
              <Image
                tag="a"
                styleSheet={{
                  height: "32px",
                  width: "32px",
                  marginRight: "22px",
                }}
                src="./inventory.png"
              />

              {/* Texto */}
              <Box
                styleSheet={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text
                  styleSheet={{
                    fontFamily: "Titillium Web 700",
                    fontWeight: "bold",
                    lineHeight: "21px",
                    fontSize: "14px",
                  }}
                >
                  Estoque no Brasil
                </Text>
                <Text
                  styleSheet={{
                    fontFamily: "Titillium Web 400",
                    lineHeight: "18px",
                    fontSize: "12px",
                  }}
                >
                  Produtos mais perto de você!
                </Text>
              </Box>
            </Box>
          </Box>
          {/* Cada caixa */}
          <Box
            styleSheet={{
              width: "308px",
              height: "64px",
              borderRadius: "4px",
              backgroundColor: "#EFEFEF",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Imagem e texto */}
            <Box
              styleSheet={{
                display: "flex",
                marginLeft: "27px",
              }}
            >
              <Image
                tag="a"
                styleSheet={{
                  height: "32px",
                  width: "32px",
                  marginRight: "22px",
                }}
                src="./replace.png"
              />

              {/* Texto */}
              <Box
                styleSheet={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text
                  styleSheet={{
                    fontFamily: "Titillium Web 700",
                    fontWeight: "bold",
                    lineHeight: "21px",
                    fontSize: "14px",
                  }}
                >
                  Trocas Garantidas
                </Text>
                <Text
                  styleSheet={{
                    fontFamily: "Titillium Web 400",
                    lineHeight: "18px",
                    fontSize: "12px",
                  }}
                >
                  Trocas em até 48 horas, vejas as regras
                </Text>
              </Box>
            </Box>
          </Box>
          {/* Cada caixa */}
          <Box
            styleSheet={{
              width: "308px",
              height: "64px",
              borderRadius: "4px",
              backgroundColor: "#EFEFEF",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Imagem e texto */}
            <Box
              styleSheet={{
                display: "flex",
                marginLeft: "27px",
              }}
            >
              <Image
                tag="a"
                styleSheet={{
                  height: "32px",
                  width: "32px",
                  marginRight: "22px",
                }}
                src="./tag.png"
              />

              {/* Texto */}
              <Box
                styleSheet={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text
                  styleSheet={{
                    fontFamily: "Titillium Web 700",
                    fontWeight: "bold",
                    lineHeight: "21px",
                    fontSize: "14px",
                  }}
                >
                  Ganhe 5% off
                </Text>
                <Text
                  styleSheet={{
                    fontFamily: "Titillium Web 400",
                    lineHeight: "18px",
                    fontSize: "12px",
                  }}
                >
                  Pagando à vista no Cartão
                </Text>
              </Box>
            </Box>
          </Box>
          {/* Cada caixa */}
          <Box
            styleSheet={{
              width: "308px",
              height: "64px",
              borderRadius: "4px",
              backgroundColor: "#EFEFEF",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* Imagem e texto */}
            <Box
              styleSheet={{
                display: "flex",
                marginLeft: "27px",
              }}
            >
              <Image
                tag="a"
                styleSheet={{
                  height: "32px",
                  width: "32px",
                  marginRight: "22px",
                }}
                src="./truck.png"
              />

              {/* Texto */}
              <Box
                styleSheet={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Text
                  styleSheet={{
                    fontFamily: "Titillium Web 700",
                    fontWeight: "bold",
                    lineHeight: "21px",
                    fontSize: "14px",
                  }}
                >
                  Frete Grátis
                </Text>
                <Text
                  styleSheet={{
                    fontFamily: "Titillium Web 400",
                    lineHeight: "18px",
                    fontSize: "12px",
                  }}
                >
                  Em compras acima de R$499,00
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Reasons;
