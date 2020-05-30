/** @jsx jsx */
import React, { ReactNode } from "react";
import { Card } from "rebass";
import { jsx } from "@emotion/core";

interface IProps {
  children: ReactNode;
}

export const CustomCard: React.FC<IProps> = ({
  children,
  ...props
}): JSX.Element => {
  return (
    <Card
      {...props}
      sx={{
        mt: 4,
        p: 1,
        borderRadius: 2,
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
        alignItems: "right",
        height: [null, null, null, null, null, "100%", "100%"],
        width: ["100%", "95%", "95%", "95%", "90%", "80%", "80%"],
      }}
    >
      {children}
    </Card>
  );
};
