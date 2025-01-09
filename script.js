const input = document.querySelector("input");

const lowerCaseOutput = document.querySelector("#lowercase span");
const upperCaseOutput = document.querySelector("#uppercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimOutput = document.querySelector("#trim span");

function captilizingString(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}
function tocamelCase(string) {
  const lowercase = string.toLowerCase();
  const wordsArray = lowercase.split(" ");
  const finalArray = wordsArray.map((word, i) => {
    if (i == 0) return word;
    return captilizingString(word);
  });
  return finalArray.join("");
}

function topascalCase(string) {
  const lowercase = string.toLowerCase();
  const wordsArray = lowercase.split(" ");
  const finalArray = wordsArray.map((word) => {
    return captilizingString(word);
  });
  return finalArray.join("");
}

function tosnakeCase(string) {
  return string.replaceAll(" ", "_");
}
function toskebabCase(string) {
  return string.replaceAll(" ", "-");
}

function updateScreen() {
  lowerCaseOutput.innerText = input.value.toLowerCase();
  upperCaseOutput.innerText = input.value.toUpperCase();
  camelCaseOutput.innerText = tocamelCase(input.value.trim());
  pascalCaseOutput.innerText = topascalCase(input.value.trim());
  snakeCaseOutput.innerText = tosnakeCase(input.value.trim());
  kebabCaseOutput.innerText = toskebabCase(input.value.trim());
  trimOutput.innerText = input.value.replaceAll(" ", "");
}
updateScreen();
input.addEventListener("input", updateScreen);
