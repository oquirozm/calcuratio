import React, { FC, useState } from "react";
// import ModeSelector from "../components/ModeSelector";
// import UserInputForm from "../components/UserInputForm";
import { Title, Text, Flex, Button } from "../components";
// import { calculateWidth, calculateHeight, calculateAspectRatio } from "utils";
// import { AspectRatio, Dimensions } from "@types";
import { CalculatorForm } from "features";

const Main: FC = () => {
  const [result, setResult] = useState<string>("");
  const updateMode = (mode: string): void => {
    setResult("");
  };

  return (
    <div>
      <Flex type="header" justifyContent="space-between" p={4} mb={6}>
        <Title mb={[2, 0]}>calcuratio</Title>
        <Text type="p">
          made with ♡ by <a>omar</a>
        </Text>
      </Flex>

      {/* <ModeSelector handleModeUpdate={updateMode} mode={mode} />

      <Flex flexDirection="column" m={4} alignItems="center">
        <UserInputForm mode={mode} updateGlobalUserInputs={updateUserInputs} />
      </Flex> */}
      <CalculatorForm
        clearResult={() => setResult("")}
        onCalculation={(result: string): void => setResult(result)}
      />

      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Title type="h3" fontSize={30}>
          Result
        </Title>
        <Text type="p" fontSize={45}>
          {result}
        </Text>
      </Flex>
    </div>
  );
};

export default Main;
