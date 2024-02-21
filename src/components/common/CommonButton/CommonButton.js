import React from "react";
import Button from "@mui/material/Button";

// primary button
const CommonButton = ({ children, color, disabled, size, sx, variant }) => {
  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      sx={sx}
      variant={variant}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
// import it in the page, change inner text content of button and set the value of props (color)
