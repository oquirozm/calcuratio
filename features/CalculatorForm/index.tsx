import { AspectRatio, Dimensions } from "@types";
import { Button, Flex } from "components";
import React, { FC, useEffect, useState } from "react";
import { calculateAspectRatio, calculateHeight, calculateWidth } from "utils";
import { AspectRatioForm, HeightForm, WidthForm } from "./Forms";
import ModeSelector from "./ModeSelector";

interface ICalculatorForm {
  onCalculation: (result: string) => void;
  clearResult: () => void;
}

const CalculatorForm: FC<ICalculatorForm> = ({
  onCalculation,
  clearResult,
}) => {
  const [mode, setMode] = useState<string>("get_aspect_ratio");
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 1,
    height: 1,
  });
  const [ratios, setRatios] = useState<AspectRatio>({ x: 1, y: 1 });

  // Clean up the result on mode change.
  useEffect(() => {
    clearResult();
  }, [mode]);

  const onWidthChange = (width: number): void => {
    if (Number(width)) {
      setDimensions((prev) => ({ ...prev, width }));
    }
  };

  const onHeightChange = (height: number): void =>
    setDimensions((prev) => ({ ...prev, height }));

  const onRatioXChange = (x: number): void =>
    setRatios((prev) => ({ ...prev, x }));

  const onRatioYChange = (y: number): void =>
    setRatios((prev) => ({ ...prev, y }));

  const onEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      calculate(mode);
    }
  };

  const calculate = (mode: string): void => {
    let result = "";

    if (mode === "get_width") {
      const width: number = calculateWidth({
        xRatio: ratios.x,
        yRatio: ratios.y,
        height: dimensions.height,
      });
      result = `${width}`;
    }

    if (mode === "get_height") {
      const height: number = calculateHeight({
        xRatio: ratios.x,
        yRatio: ratios.y,
        width: dimensions.width,
      });
      result = `${height}`;
    }

    if (mode === "get_aspect_ratio") {
      let { x, y } = calculateAspectRatio(dimensions.width, dimensions.height);
      result = `${x}:${y}`;
    }

    if (result && result !== "NaN") {
      onCalculation(result);
    }
  };

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center">
      <ModeSelector mode={mode} handleModeChange={(mode) => setMode(mode)} />
      {mode === "get_aspect_ratio" && (
        <AspectRatioForm
          onWidthChange={onWidthChange}
          onHeightChange={onHeightChange}
          onEnterKey={onEnterKey}
        />
      )}
      {mode === "get_width" && (
        <WidthForm
          onHeightChange={onHeightChange}
          onRatioXChange={onRatioXChange}
          onRatioYChange={onRatioYChange}
        />
      )}
      {mode === "get_height" && (
        <HeightForm
          onWidthChange={onWidthChange}
          onRatioXChange={onRatioXChange}
          onRatioYChange={onRatioYChange}
        />
      )}
      <Button className="calculate" my={4} onClick={(e) => calculate(mode)}>
        calculate
      </Button>
    </Flex>
  );
};

export default CalculatorForm;
