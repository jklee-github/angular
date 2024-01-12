// const res = cut('我們中出了一個叛徒', false);
// console.log(res);
export function sanitizeString(inputString: string) {
  // Define the characters you want to remove, including newline (\n)
  const charactersToRemove = /[，。\s]/g;

  // Use replace() with a regular expression to remove specified characters
  const sanitizedString = inputString.replace(charactersToRemove, '');

  return sanitizedString;
}
export const ignoreWords = ['了'];
