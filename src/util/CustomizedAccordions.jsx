import { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            <AiFillCaretDown className="text-sm bg-blue-200 p-1 rounded-sm" />
          }
          className="bg-gray-200 flex-row-reverse"
          sx={{
            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
              transform: "rotate(270deg)",
            },
            "& .MuiAccordionSummary-content": {
              marginLeft: "1rem",
            },
          }}
        >
          <Typography className="flex justify-center">
            <div className="flex justify-center">
              <p className="text-blue-800 font-semibold">Best interest rates in the market</p>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="border-t">
          <Typography>
            <div className="flex justify-center">
              <div className="flex justify-center w-full">
                <p className="text-neutral-400 text-sm">
                  We offer the most competitive interest rates in the market. Our rates are designed to help you maximize your savings and achieve your financial goals.
                </p>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={
            <AiFillCaretDown className="text-sm bg-blue-200 p-1 rounded-sm" />
          }
          className="bg-gray-200 flex-row-reverse"
          sx={{
            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
              transform: "rotate(270deg)",
            },
            "& .MuiAccordionSummary-content": {
              marginLeft: "1rem",
            },
          }}
        >
          <Typography>
            <div className="flex justify-center">
              <p className="text-blue-800 font-semibold">
                Prevent unstable prices
              </p>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="border-t">
          <Typography>
            <div className="flex justify-center">
              <div className="flex justify-center w-full">
                <p className="text-neutral-400 text-sm">
                  We are committed to providing stable prices for our customers. By closely monitoring the market and employing risk management strategies, we ensure that our prices remain consistent and protect you from volatile fluctuations.
                </p>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={
            <AiFillCaretDown className="text-sm bg-blue-200 p-1 rounded-sm" />
          }
          className="bg-gray-200 flex-row-reverse"
          sx={{
            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
              transform: "rotate(270deg)",
            },
            "& .MuiAccordionSummary-content": {
              marginLeft: "1rem",
            },
          }}
        >
          <Typography>
            <div className="flex justify-center">
              <p className="text-blue-800 font-semibold">
                Best Price in Market
              </p>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="border-t">
          <Typography>
            <div className="flex justify-center">
              <div className="flex justify-center w-full">
                <p className="text-neutral-400 text-sm">
                  We strive to offer you the best price for our products and services. Our competitive pricing ensures that you get the most value for your money without compromising on quality.
                </p>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
