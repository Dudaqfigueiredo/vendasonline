import React from "react";
import { Box, Image, Text, TextField, Button } from "@skynexui/components";

const Highlight = () => {
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "75px",
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
          Destaques 
        </Text>
        {/* Todas as caixas */}
        <Box
          styleSheet={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            marginTop: "17px",
          }}
        >
          {/* Cada Caixa */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Image
              tag="a"
              styleSheet={{
                height: "381px",
                width: "308px",
              }}
              src="./clothes1.png"
            />
            <Image
              tag="a"
              styleSheet={{
                position: "absolute",
              }}
              src="./arrowLeft.png"
            />
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                marginLeft: "27px",
                marginTop: "8px",
              }}
            >
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#DEAC71",
                  boxSizing: "border-box",
                  border: "1px solid #353535",
                }}
              />
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#D37164",
                }}
              />
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#6497D3",
                }}
              />
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#3C3B79",
                }}
              />
            </Box>
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "27px",
              }}
            >
              <Text
                styleSheet={{
                  width: "254px",
                  height: "30px",
                  fontFamily: "Titillium Web 700",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "30px",
                  color: "#353535",
                  marginTop: "8px",
                }}
              >
                R$500,00
              </Text>

              <Text
                styleSheet={{
                  width: "254px",
                  height: "24px",
                  fontFamily: "Titillium Web 400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000000",
                  marginTop: "2px",
                }}
              >
                Saia Amarela
              </Text>
              <Text
                styleSheet={{
                  width: "254px",
                  height: "54px",
                  fontFamily: "Titillium Web 400",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#000000",
                  opacity: "0.5",
                  marginTop: "8px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. 
              </Text>

              <Button
                label="Adicionar"
                styleSheet={{
                  backgroundColor: "#2f5061",
                  color: "#FFFFFF",
                  borderRadius: "4px",
                  height: "35px",
                  width: "254px",
                  marginTop: "8px",
                  fontFamily: "Titillium Web 400",
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  display: "flex",
                  textAlign: "center",
                }}
              />
            </Box>
          </Box>

          {/* Cada Caixa */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Image
              tag="a"
              styleSheet={{
                height: "381px",
                width: "308px",
              }}
              src="./clothes2.png"
            />
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                marginLeft: "27px",
                marginTop: "8px",
              }}
            >
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#1C1A19",
                  boxSizing: "border-box",
                  border: "1px solid #353535",
                }}
              />
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#D84E4B",
                }}
              />
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#CFC9B0",
                }}
              />
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#EAE9E5",
                }}
              />
            </Box>
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "27px",
              }}
            >
              <Text
                styleSheet={{
                  width: "254px",
                  height: "30px",
                  fontFamily: "Titillium Web 700",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "30px",
                  color: "#353535",
                  marginTop: "8px",
                }}
              >
                R$320,00
              </Text>

              <Text
                styleSheet={{
                  width: "254px",
                  height: "24px",
                  fontFamily: "Titillium Web 400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000000",
                  marginTop: "2px",
                }}
              >
                Saia preta florida
              </Text>
              <Text
                styleSheet={{
                  width: "254px",
                  height: "54px",
                  fontFamily: "Titillium Web 400",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#000000",
                  opacity: "0.5",
                  marginTop: "8px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. 
              </Text>

              <Button
                label="Adicionar"
                styleSheet={{
                  backgroundColor: "#2f5061",
                  color: "#FFFFFF",
                  borderRadius: "4px",
                  height: "35px",
                  width: "254px",
                  marginTop: "8px",
                  fontFamily: "Titillium Web 400",
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  display: "flex",
                  textAlign: "center",
                }}
              />
            </Box>
          </Box>

          {/* Cada Caixa */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Image
              tag="a"
              styleSheet={{
                height: "381px",
                width: "308px",
              }}
              src="./clothes1.png"
            />
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                marginLeft: "27px",
                marginTop: "8px",
              }}
            >
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#DEAC71",
                  boxSizing: "border-box",
                  border: "1px solid #353535",
                }}
              />
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#D37164",
                }}
              />
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#6497D3",
                }}
              />
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#3C3B79",
                }}
              />
            </Box>
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "27px",
              }}
            >
              <Text
                styleSheet={{
                  width: "254px",
                  height: "30px",
                  fontFamily: "Titillium Web 700",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "30px",
                  color: "#353535",
                  marginTop: "8px",
                }}
              >
                R$500,00
              </Text>

              <Text
                styleSheet={{
                  width: "254px",
                  height: "24px",
                  fontFamily: "Titillium Web 400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000000",
                  marginTop: "2px",
                }}
              >
                Saia Amarela
              </Text>
              <Text
                styleSheet={{
                  width: "254px",
                  height: "54px",
                  fontFamily: "Titillium Web 400",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#000000",
                  opacity: "0.5",
                  marginTop: "8px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. 
              </Text>

              <Button
                label="Adicionar"
                styleSheet={{
                  backgroundColor: "#2f5061",
                  color: "#FFFFFF",
                  borderRadius: "4px",
                  height: "35px",
                  width: "254px",
                  marginTop: "8px",
                  fontFamily: "Titillium Web 400",
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  display: "flex",
                  textAlign: "center",
                }}
              />
            </Box>
          </Box>

          {/* Cada Caixa */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Image
              tag="a"
              styleSheet={{
                height: "381px",
                width: "308px",
              }}
              src="./clothes2.png"
            />
            <Image
              tag="a"
              styleSheet={{
                position: "absolute",
                marginLeft: "21.5%"
              }}
              src="./arrowRight.png"
            />
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                marginLeft: "27px",
                marginTop: "8px",
              }}
            >
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#1C1A19",
                  boxSizing: "border-box",
                  border: "1px solid #353535",
                }}
              />
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#D84E4B",
                }}
              />
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#CFC9B0",
                }}
              />
              <Button
                styleSheet={{
                  width: "27px",
                  height: "27px",
                  borderRadius: "4px",
                  background: "#EAE9E5",
                }}
              />
            </Box>
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "27px",
              }}
            >
              <Text
                styleSheet={{
                  width: "254px",
                  height: "30px",
                  fontFamily: "Titillium Web 700",
                  fontWeight: "bold",
                  fontSize: "20px",
                  lineHeight: "30px",
                  color: "#353535",
                  marginTop: "8px",
                }}
              >
                R$320,00
              </Text>

              <Text
                styleSheet={{
                  width: "254px",
                  height: "24px",
                  fontFamily: "Titillium Web 400",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#000000",
                  marginTop: "2px",
                }}
              >
                Saia preta florida
              </Text>
              <Text
                styleSheet={{
                  width: "254px",
                  height: "54px",
                  fontFamily: "Titillium Web 400",
                  fontSize: "12px",
                  lineHeight: "18px",
                  color: "#000000",
                  opacity: "0.5",
                  marginTop: "8px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. 
              </Text>

              <Button
                label="Adicionar"
                styleSheet={{
                  backgroundColor: "#2f5061",
                  color: "#FFFFFF",
                  borderRadius: "4px",
                  height: "35px",
                  width: "254px",
                  marginTop: "8px",
                  fontFamily: "Titillium Web 400",
                  fontStyle: "normal",
                  fontSize: "16px",
                  lineHeight: "24px",
                  display: "flex",
                  textAlign: "center",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Highlight;
