export const convertTheFormatToDDMMYYYY = (date: string): string => {
  const formatAsAnArray = date.split("");
  const indexOfTheYearOfTheStartPositionForTheSlice = 6;
  const indexOfTheYearOfTheEndPositionForTheSlice = 10;
  const year = formatAsAnArray
    .slice(
      indexOfTheYearOfTheStartPositionForTheSlice,
      indexOfTheYearOfTheEndPositionForTheSlice
    )
    .join("");
  const indexOfTheDayOfTheStartPositionForTheSlice = 0;
  const indexOfTheDayOfTheEndPositionForTheSlice = 2;
  const day = formatAsAnArray
    .slice(
      indexOfTheDayOfTheStartPositionForTheSlice,
      indexOfTheDayOfTheEndPositionForTheSlice
    )
    .join("");
  const indexOfTheMonthOfTheStartPositionForTheSlice = 3;
  const indexOfTheMonthOfTheEndPositionForTheSlice = 5;
  const month = formatAsAnArray
    .slice(
      indexOfTheMonthOfTheStartPositionForTheSlice,
      indexOfTheMonthOfTheEndPositionForTheSlice
    )
    .join("");
  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
};
