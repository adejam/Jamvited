import firstCharToUpperCase from "./firstCharToUpperCase"

const getStringFromLongText = (
    text: string,
    divider: string,
    fallbackText: string,
    position= "pick-from-back",
    index=0,
) => {
  const textArray = text.split(divider)
  let textToFind = ""


  if (position === "pick-from-back") {
    textToFind = textArray[1]
  } else {
    textToFind = textArray[index]
  }

  textToFind = textToFind || fallbackText

  return firstCharToUpperCase(textToFind)
}

export default getStringFromLongText
