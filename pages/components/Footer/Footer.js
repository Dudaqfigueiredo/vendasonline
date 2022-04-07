import React from "react";
import { Box, Image, Text, TextField, Button } from "@skynexui/components";
import { getFontDefinitionFromNetwork } from "next/dist/server/font-utils";

const Footer = () => {
  return (
    <>
      <footer>
        <Box>
          <Box
            styleSheet={{
              padding: "absolute",
              color: "white",
              backgroundColor: "#353535",
              height: "85px",
              marginTop: "6%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "row",
                gap: "22px",
              }}
            >
              <Image
                tag="a"
                styleSheet={{
                  width: "32px",
                  height: "32px",
                }}
                src="./facebook.png"
              />
              <Image
                tag="a"
                styleSheet={{
                  width: "32px",
                  height: "32px",
                }}
                src="./linkedln.png"
              />
              <Image
                tag="a"
                styleSheet={{
                  width: "32px",
                  height: "32px",
                }}
                src="./instagram.png"
              />
              <Image
                tag="a"
                styleSheet={{
                  width: "32px",
                  height: "32px",
                }}
                src="./youtube.png"
              />
            </Box>

            <Box
              styleSheet={{
                display: "flex",
                flexDirection: "row",
                gap: "22px",
              }}
            >
              <Image
                tag="a"
                styleSheet={{
                  width: "32px",
                  height: "32px",
                }}
                src="./visa.png"
              />
              <Image
                tag="a"
                styleSheet={{
                  width: "32px",
                  height: "32px",
                }}
                src="./master.png"
              />
              <Image
                tag="a"
                styleSheet={{
                  width: "32px",
                  height: "32px",
                }}
                src="./visa.png"
              />
              <Image
                tag="a"
                styleSheet={{
                  width: "32px",
                  height: "32px",
                }}
                src="./master.png"
              />
            </Box>

            <Box
              styleSheet={{
                display: "flex",
                gap: "22px",
              }}
            >
              <Box
                styleSheet={{
                    display:"flex",
                    flexDirection: "column"
                }}
              >
                <Text
                    styleSheet={{
                        width: "60px",
                        height: "18px",
                        fontFamily: "Open Sans 400",
                        fontSize: "10px",
                        lineHeight: "13.62px",
                        color: "#FFFFFF"
                    }}
                >Develope by</Text>
                <Image
                  tag="a"
                  styleSheet={{
                    width: "100%",
                    height: "45px",
                  }}
                  src="./logofooter.png"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
