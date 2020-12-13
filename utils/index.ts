import { AspectRatio } from "@types";

/**
 * Calculate Great Common Denominator
 */
export const calculateGCD = (a: number, b: number): number => {
  return b == 0 ? a : calculateGCD(b, a % b);
};

interface ICalculateWidth {
  xRatio: number;
  yRatio: number;
  height: number;
}
/**
 * Get the width from height and AspectRatio.
 */
export const calculateWidth = ({
  xRatio,
  yRatio,
  height,
}: ICalculateWidth): number => {
  let width = Math.round((xRatio * height) / yRatio);
  return width;
};

interface ICalculateHeight {
  xRatio: number;
  yRatio: number;
  width: number;
}

/**
 * Get the height from width and the ratios.
 */
export const calculateHeight = ({
  xRatio,
  yRatio,
  width,
}: ICalculateHeight): number => {
  let height = Math.round((yRatio * width) / xRatio);
  return height;
};

/**
 * Get aspect ratio from just the width and height.
 * TODO: Add a function that suggest a common aspect ratio
 * from the widths and heights.
 */
export const calculateAspectRatio = (
  width: number,
  height: number
): AspectRatio => {
  let gcd = calculateGCD(width, height);
  return {
    x: width / gcd,
    y: height / gcd,
  };
};
