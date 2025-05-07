import React from 'react';
import { Box } from "@mui/material";

const ChatAssistant = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#1D3557", // You can customize the background color
        borderRadius: "50%",
        padding: "10px",
        cursor: "pointer",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
      }}
      onClick={() => window.open("https://ddna-mosanid--sanad.soului.dh.soulmachines.cloud/?sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NDY2MTY1NTIsImlzcyI6InNpZ25lZF91cmwtZjM1ZjYxYWMtODhjYy00YTlmLTk2YTAtMmNmMGYwODZkZmI4IiwiZXhwIjoxODMyOTMwMTUyLCJlbWFpbCI6Im1vc2FuaWQtLXNhbmFkQGRkbmEuc3R1ZGlvIiwic291bElkIjoiZGRuYS1tb3NhbmlkLS1zYW5hZCJ9.L-1YVcDqZFfJsOAYuQUQA38Yb9bJRSa3Er0MyuVEAdY", "_blank")} // Opens SANAD page on click
    >
      <img 
        src="/assets/depositphotos_293804478-stock-illustration-robot-chatbot-icon-sign-flat.jpg" 
        alt="Chat Assistant" 
        style={{ width: "40px", height: "40px", borderRadius: "50%" }} 
      />
    </Box>
  );
};

export default ChatAssistant;
