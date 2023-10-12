const convert = {
  A: 1,
  B: 5,
  Z: 10,
  L: 50,
  C: 100,
  D: 500,
  R: 1000,
};

function checkDuplicateNumber(str) {
  const dup = [];
  for (let i = 0; i < str.length; ++i) {
    dup.push(str[i]);
    if (dup.length >= 4) {
      if (dup[i] == dup[i - 3] && dup[i] == dup[i - 2] && dup[i] == dup[i - 1])
        return false;
    }
  }

  return true;
}

function alienNumber(str) {
  if (!checkDuplicateNumber(str))
    return "Error: found duplicate number more than 3";

  const sr = str.split("").map((e) => {
    return convert[e];
  });

  let result = 0;
  for (let i = 0; i < sr.length; i++) {
    if (sr[i] < sr[i + 1]) {
      if ((sr[i] + "")[0] == "5" || sr[i + 1] / sr[i] > 10) {
        return "Error: number format is invalid";
      }

      result += sr[i + 1] - sr[i];
      i++;
    } else {
      result += sr[i];
    }
  }
  return result;
}

const input = "RRRDCLZAB";
console.log(alienNumber(input));
