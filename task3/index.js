// написать функцию, принимает в себя строку из скобочек []{}()
//         и возвращает валидна она или нет

//  console.log("--- true", validBracket("()()"));
//         console.log("--- true", validBracket("{[]()}[]"));
//         console.log("--- false", validBracket("{(})"));
//         console.log("--- false", validBracket("({{{[]}}}"));

let str = "{[]()}[]";
let stackBracket = [];

let isValid = function (str) {
  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] == "{" || str[i] == "[" || str[i] == "(") {
        stackBracket.push(str[i]);
      }
      if (stackBracket.length > 0) {
        let lastBracket = stackBracket[stackBracket.length - 1];
        if (
          (lastBracket == "{" && str[i] == "}") ||
          (lastBracket == "(" && str[i] == ")") ||
          (lastBracket == "[" && str[i] == "]")
        ) {
          stackBracket.pop();
        }
      }
    }
    console.log(stackBracket.length > 0 ? "false" : "true");
  } else {
    console.log("false");
  }
};

isValid(str);
