export function Add(numbers: string) {
  const numbersArray = numbers.split(",");

  let result = 0;
  for (let index = 0; index < numbersArray.length; index++) {
    const number = numbersArray[index];
    if (number === "") {
      return 0;
    }
    result += Number(number);
  }
  return result;
}
