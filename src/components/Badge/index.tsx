import React from "react";
import styled from "@emotion/styled";
import palette from "../../theme/palette";
import Text from "../Text";
import typo from "../../theme/typo";
import { IconNameType } from "../../utils/stories";

interface BadgeProps {
  text?: string;
  mode?: "Notification" | "Tag";
  children?: any;
  iconName?: IconNameType;
}

export const Badge = ({ mode = "Tag", text = "Default", children }: BadgeProps) => {
  return (
    <BadgeStyle mode={mode}>
      {children}
      <Text textColor={palette.MONO_WHITE} typo={typo.LABEL.X_SMALL}>
        {text}
      </Text>
    </BadgeStyle>
  );
};

export const BadgeStyle = styled.div<BadgeProps>`
  display: inline-flex;
  border-radius: 3rem;
  padding: 0.25rem 8px;
  column-gap: 0.25rem;
  background-color: ${(props) =>
    props.mode === "Notification" ? palette.PRIMARY_400 : palette.GREEN_200};
`;
