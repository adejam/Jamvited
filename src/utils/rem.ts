import { defaultFontSize } from "../constants/variables"

const rem = (pixelValue: number): string => {
  const remCalc = pixelValue/defaultFontSize
  return `${remCalc}rem`
}

export default rem
