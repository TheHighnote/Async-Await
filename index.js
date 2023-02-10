const { readFile } = require("fs").promises;

const mostFrequentWord = (text) => {
  const words = text.toLowerCase().match(/[^_\W]+/g);
  const tally = {};
  let mostFrequentWord = null;

  words.forEach((word) => {
    tally[word] = (tally[word] || 0) + 1;
    if (!tally[mostFrequentWord] || tally[word] > tally[mostFrequentWord])
      mostFrequentWord = word;
  });
  return mostFrequentWord;
};

const findPassword = async () => {
  try {
    const poem1 = await readFile("poems/starting-poem.txt", "utf-8");
    const poem2Name = mostFrequentWord(poem1);
    const poem2 = await readFile(`poems/${poem2Name}.txt`, "utf-8");
    const poem3Name = mostFrequentWord(poem2);
    const poem3 = await readFile(`poems/${poem3Name}.txt`, "utf-8");
    console.log(poem3);
    console.log(`Password: ` + mostFrequentWord(poem3));
  } catch (error) {
    console.log("YOU SUCKK!!!!");
  }
};

findPassword();
