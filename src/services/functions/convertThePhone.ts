export const convertThePhone = (tel: string): string => {
  const phoneArray = tel.split("");
  const firstIndex = 1; // theFirstIndexOfTheArrayString
  const secondIndex = 2; // theSecondIndexOfTheArrayString
  const thirdIndex = 3; // theThirdIndexOfTheArrayString
  const fourtIndex = 4; // theFourthIndexOfTheArrayString
  const fifthIndex = 5; // theFifthndexOfTheArrayString
  const sixthIndex = 6; // theSixthIndexOfTheArrayString
  const seventhIndex = 7; // theSeventhIndexOfTheArrayString
  const eighthIndex = 8; // theEighthIndexOfTheArrayString
  const ninthIndex = 9; // theNinthIndexOfTheArrayString
  const tenthIndex = 10; // theTenthIndexOfTheArrayString
  const eleventhIndex = 11; // theEleventhIndexOfTheArrayString
  const formattedPhone = `+${phoneArray[firstIndex]} (${phoneArray[secondIndex]}${phoneArray[thirdIndex]}${phoneArray[fourtIndex]}) ${phoneArray[fifthIndex]}${phoneArray[sixthIndex]}${phoneArray[seventhIndex]}-${phoneArray[eighthIndex]}${phoneArray[ninthIndex]}${phoneArray[tenthIndex]}${phoneArray[eleventhIndex]}`;
  return formattedPhone;
};
