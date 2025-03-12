const pkg = require("regexp-tree");
const { parse, traverse } = pkg;

function changeStrToDigit(regexStr) {
  // 文字列置換の方法を修正
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const digits = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
  ];

  // 各文字を直接置換
  for (let i = 0; i < letters.length; i++) {
    // グローバル置換のために文字列をエスケープして新しい正規表現を作成
    const regex = new RegExp(letters[i], "g");
    regexStr = regexStr.replace(regex, digits[i]);
  }
  return regexStr;
}

function removeLastDigit(regexStr) {
  let count = 0;

  for (let i = regexStr.length - 2; i >= 0; i--) {
    if (/\d/.test(regexStr[i])) {
      count++;
    } else {
      break;
    }
  }
  return regexStr.slice(0, -count - 1) + "/";
}

function removeFirstDigit(regexStr) {
  let count = 0;

  for (let i = 1; i < regexStr.length; i++) {
    if (/\d/.test(regexStr[i])) {
      count++;
    } else {
      break;
    }
  }
  return "/" + regexStr.slice(count + 1);
}

function checkIDA(ast) {
  let found = false;
  traverse(ast, {
    Alternative(path) {
      const expressions = path.node.expressions;
      if (expressions.length === 2) {
        const firstRepetition = expressions[0];
        const secondRepetition = expressions[1];
        if (
          firstRepetition.type === "Repetition" &&
          secondRepetition.type === "Repetition" &&
          firstRepetition.expression.value === secondRepetition.expression.value
        ) {
          found = true;
        }
      }
    },
  });
  return found;
}

function checkEDA(ast) {
  let automatonArray = [];
  let foundDisjunction = false;
  let foundRepetition = false;
  let disjunctionNode = null;
  let repetitionNode = null;
  let found3Disjnction = false;

  // Disjunctionの処理
  function Disjunction(Node) {
    if (
      //左右に"*"がかかっている場合
      Node.left.type === "Repetition" &&
      Node.right.type === "Repetition"
    ) {
      if (
        //左右が同値の場合
        Node.left.expression.value === Node.right.expression.value
      ) {
        automatonArray.push(
          [0, Number(Node.left.expression.value)],
          [0, Number(Node.right.expression.value) + 1000000],
          [
            Number(Node.left.expression.value),
            Number(Node.left.expression.value),
          ],
          [
            Number(Node.right.expression.value) + 1000000,
            Number(Node.right.expression.value) + 1000000,
          ],
          [
            Number(Node.left.expression.value),
            Number(Node.right.expression.value) + 1000000,
          ],
          [
            Number(Node.right.expression.value) + 1000000,
            Number(Node.left.expression.value),
          ]
        );
      } else {
        //左右が同値でない場合
        automatonArray.push(
          [0, Number(Node.left.expression.value)],
          [0, Number(Node.right.expression.value)],
          [
            Number(Node.left.expression.value),
            Number(Node.left.expression.value),
          ],
          [
            Number(Node.right.expression.value),
            Number(Node.right.expression.value),
          ]
        );
      }
    } else if (Node.left.type === "Repetition") {
      //左に"*"がかかっている場合
      if (
        //左右が同値の場合
        Node.left.expression.value === Node.right.value
      ) {
        automatonArray.push(
          [0, Number(Node.left.expression.value)],
          [0, Number(Node.right.value) + 1000000],
          [
            Number(Node.left.expression.value),
            Number(Node.left.expression.value),
          ]
        );
      } else {
        //左右が同値でない場合
        automatonArray.push(
          [0, Number(Node.left.expression.value)],
          [0, Number(Node.right.value)],
          [
            Number(Node.left.expression.value),
            Number(Node.left.expression.value),
          ]
        );
      }
    } else if (Node.right.type === "Repetition") {
      //右に"*"がかかっている場合
      if (
        //左右が同値の場合
        Node.left.value === Node.right.expression.value
      ) {
        automatonArray.push(
          [0, Number(Node.left.value)],
          [0, Number(Node.right.expression.value) + 1000000],
          [
            Number(Node.right.expression.value) + 1000000,
            Number(Node.right.expression.value) + 1000000,
          ]
        );
      } else {
        //左右が同値でない場合
        automatonArray.push(
          [0, Number(Node.left.value)],
          [0, Number(Node.right.expression.value)],
          [
            Number(Node.right.expression.value),
            Number(Node.right.expression.value),
          ]
        );
      }
    } else {
      //ノーマルの場合
      if (Node.left.value === Node.right.value) {
        //左右が同値の場合
        automatonArray.push(
          [0, Number(Node.left.value)],
          [0, Number(Node.right.value) + 1000000]
        );
      } else {
        //左右が同値でない場合
        automatonArray.push(
          [0, Number(Node.left.value)],
          [0, Number(Node.right.value)]
        );
      }
    }
  }

  function Repetition(RNode) {
    // 3つの選択肢を含む正規表現の処理を修正
    if (
      RNode.expression.expression &&
      RNode.expression.expression.left &&
      RNode.expression.expression.right
    ) {
      // 左側がさらにDisjunctionの場合
      if (
        RNode.expression.expression.left.type === "Disjunction" &&
        RNode.expression.expression.left.left &&
        RNode.expression.expression.left.right
      ) {
        const leftLeft = RNode.expression.expression.left.left.value;
        const leftRight = RNode.expression.expression.left.right.value;
        const right = RNode.expression.expression.right.value;

        // 3つの選択肢のうち2つ以上が同じ値の場合、脆弱性あり
        if (
          leftLeft === leftRight ||
          leftRight === right ||
          right === leftLeft
        ) {
          found3Disjnction = true;
        } else {
          TwoDisjunction(RNode);
        }
      } else {
        TwoDisjunction(RNode);
      }
    } else {
      TwoDisjunction(RNode);
    }

    function TwoDisjunction(Node) {
      if (
        //これ以降のDisjunctionの確認方法はGroupになってる
        Node.expression.type === "Group" &&
        Node.expression.expression.type === "Repetition"
      ) {
        //"*"がネストしている場合
        let Node2 = Node.expression.expression;
        automatonArray.push(
          [0, Number(Node2.expression.value)],
          [0, Number(Node2.expression.value) + 1000000],
          [Number(Node2.expression.value), Number(Node2.expression.value)],
          [
            Number(Node2.expression.value) + 1000000,
            Number(Node2.expression.value) + 1000000,
          ],
          [
            Number(Node2.expression.value),
            Number(Node2.expression.value) + 1000000,
          ],
          [
            Number(Node2.expression.value) + 1000000,
            Number(Node2.expression.value),
          ]
        );
      } else if (
        //"*"が"|"にかかっているかつ中身の左右が同値の場合
        Node.expression.type === "Group" &&
        Node.expression.expression.type === "Disjunction" &&
        Node.expression.expression.left &&
        Node.expression.expression.right &&
        Node.expression.expression.left.value ===
          Node.expression.expression.right.value
      ) {
        automatonArray.push(
          [0, Number(Node.expression.expression.left.value)],
          [0, Number(Node.expression.expression.right.value) + 1000000],
          [
            Number(Node.expression.expression.left.value),
            Number(Node.expression.expression.left.value),
          ],
          [
            Number(Node.expression.expression.right.value) + 1000000,
            Number(Node.expression.expression.right.value) + 1000000,
          ],
          [
            Number(Node.expression.expression.left.value),
            Number(Node.expression.expression.right.value) + 1000000,
          ],
          [
            Number(Node.expression.expression.right.value) + 1000000,
            Number(Node.expression.expression.left.value),
          ]
        );
      } else if (
        Node.expression.type === "Group" &&
        Node.expression.expression.type === "Disjunction"
      ) {
        //"*"が"|"にかかっている場合
        automatonArray.push(
          [0, Number(Node.expression.expression.left.value)],
          [0, Number(Node.expression.expression.right.value)],
          [
            Number(Node.expression.expression.left.value),
            Number(Node.expression.expression.left.value),
          ],
          [
            Number(Node.expression.expression.right.value),
            Number(Node.expression.expression.right.value),
          ]
        );
      } else if (Node.expression && Node.expression.value !== undefined) {
        //"*"単体の場合
        automatonArray.push(
          [0, Number(Node.expression.value)],
          [Number(Node.expression.value), Number(Node.expression.value)]
        );
      }
    }
  }

  traverse(ast, {
    Disjunction(path) {
      if (!foundDisjunction && !foundRepetition) {
        foundDisjunction = true;
        disjunctionNode = path.node;
        Disjunction(disjunctionNode);
      }
    },
    Repetition(path) {
      if (!foundRepetition && !foundDisjunction) {
        foundRepetition = true;
        repetitionNode = path.node;
        Repetition(repetitionNode);
      }
    },
  });

  function checkPaths(arr) {
    let selfLoopCount = 0;
    const pairs = new Set();

    for (const [from, to] of arr) {
      if (from === to) {
        selfLoopCount++;
      } else {
        pairs.add(`${from}-${to}`);
      }
    }

    return (
      selfLoopCount >= 2 &&
      [...pairs].some((p) => {
        const [a, b] = p.split("-");
        return pairs.has(`${b}-${a}`);
      })
    );
  }

  return checkPaths(automatonArray) || found3Disjnction;
}

function detectReDoS(node) {
  if (!(node.value instanceof RegExp)) {
    return false;
  }
  try {
    let regexStr = node.value.toString();
    regexStr = changeStrToDigit(regexStr);
    regexStr = removeLastDigit(regexStr);
    regexStr = removeFirstDigit(regexStr);

    const ast = parse(regexStr);
    return checkIDA(ast) || checkEDA(ast);
  } catch (error) {
    console.error("Error parsing regex:", error.message, "\nRegex:", regexStr);
    return false;
  }
}

module.exports = { detectReDoS };
