import React, { FC, useState } from "react";
import { Title, Text, Flex, Button, Box } from "../components";
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

      <Flex width="100%">
        <Flex width={3 / 5} justifyContent="center" alignItems="center">
          <CalculatorForm
            clearResult={() => setResult("")}
            onCalculation={(result: string): void => setResult(result)}
          />
        </Flex>

        <Flex width={2 / 5} justifyContent="center" alignItems="flex-start">
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Title type="h3" fontSize={30} mb={4}>
              Result
            </Title>
            <Text type="p" fontSize={45}>
              {result}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Main;
