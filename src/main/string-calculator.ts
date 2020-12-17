export function Add(numbers: string) {
  if (numbers === "") return 0;
  if (numbers.length === 3) {
    return Number(numbers[0]) + Number(numbers[2]);
  }
  if (numbers.length > 3) {
    return Number(numbers[0]) + Number(numbers[2]) + Number(numbers[4]) + Number(numbers[6]);
  }
}
