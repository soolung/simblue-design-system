import React from "react";
import Text from "../components/Text";
import { StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Text>;

export default {
  title: "Component/Text",
  component: Text,
};

export const Default: Story = {
  render: (args) => <Text {...args}>심청이입니다.</Text>,
};

export const Varient = () => {
  return (
    <div>
      <header style={{ marginTop: "10px", marginBottom: "10px" }}>
        <Text children="Display" typo="HEADING_SMALL" textColor="GREEN_400" />
      </header>
      <Text children="large 96px" typo="DISPLAY_LARGE" textColor="MONO_BLACK" />
      <Text children="medium 52px" typo="DISPLAY_MEDIUM" textColor="MONO_BLACK" />
      <Text children="small 44px" typo="DISPLAY_SMALL" textColor="MONO_BLACK" />
      <Text children="x-small 36px" typo="DISPLAY_X_SMALL" textColor="MONO_BLACK" />

      <header style={{ marginTop: "50px", marginBottom: "10px" }}>
        <Text children="Heading" typo="HEADING_SMALL" textColor="GREEN_400" />
      </header>
      <Text children="xx-large 40px" typo="HEADING_XX_LARGE" textColor="MONO_BLACK" />
      <Text children="x-large 36px" typo="HEADING_X_LARGE" textColor="MONO_BLACK" />
      <Text children="large 32px" typo="HEADING_LARGE" textColor="MONO_BLACK" />
      <Text children="medium 28px" typo="HEADING_MEDIUM" textColor="MONO_BLACK" />
      <Text children="small 24px" typo="HEADING_SMALL" textColor="MONO_BLACK" />
      <Text children="x-small 20px" typo="HEADING_X_SMALL" textColor="MONO_BLACK" />

      <header style={{ marginTop: "50px", marginBottom: "10px" }}>
        <Text children="Label" typo="HEADING_SMALL" textColor="GREEN_400" />
      </header>
      <Text children="large 18px" typo="LABEL_LARGE" textColor="MONO_BLACK" />
      <Text children="medium 16px" typo="LABEL_MEDIUM" textColor="MONO_BLACK" />
      <Text children="small 14px" typo="LABEL_SMALL" textColor="MONO_BLACK" />
      <Text children="x-small 12px" typo="LABEL_X_SMALL" textColor="MONO_BLACK" />

      <header style={{ marginTop: "50px", marginBottom: "10px" }}>
        <Text children="Paragraph" typo="HEADING_SMALL" textColor="GREEN_400" />
      </header>
      <Text children="large 18px" typo="PARAGRAPH_LARGE" textColor="MONO_BLACK" />
      <Text children="medium 16px" typo="PARAGRAPH_MEDIUM" textColor="MONO_BLACK" />
      <Text children="small 14px" typo="PARAGRAPH_SMALL" textColor="MONO_BLACK" />
      <Text children="x-small 12px" typo="PARAGRAPH_X_SMALL" textColor="MONO_BLACK" />
    </div>
  );
};
