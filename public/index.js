//https://en.wikipedia.org/wiki/Template:Letters_with_macron
const arrayLogicText = [
  "ĀB̄C̄D̄",
  "ĀB̄C̄D",
  "ĀB̄CD̄",
  "ĀB̄CD",
  "ĀBC̄D̄",
  "ĀBC̄D",
  "ĀBCD̄",
  "ĀBCD",
  "AB̄C̄D̄",
  "AB̄C̄D",
  "AB̄CD̄",
  "AB̄CD",
  "ABC̄D̄",
  "ABC̄D",
  "ABCD̄",
  "ABCD",
];

const arrayGroup16 = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]];

const arrayShortText16 = ["1"];

const arrayShortText16Fix = ["1"];

const arrayGroup8 = [
  [0, 4, 12, 8, 1, 5, 13, 9], //hàng
  [1, 5, 13, 9, 3, 7, 15, 11],
  [3, 7, 15, 11, 2, 6, 14, 10],
  [0, 4, 12, 8, 2, 6, 14, 10][(0, 1, 2, 3, 4, 5, 6, 7)], //cột
  [4, 5, 6, 7, 12, 13, 14, 15],
  [12, 13, 14, 15, 8, 9, 10, 11],
  [0, 1, 2, 3, 8, 9, 10, 11],
];

const arrayShortText8 = ["C̄", "D", "C", "D̄", "Ā", "B", "A", "B̄"];

const arrayShortText8Fix = ["G", "D", "C", "H", "E", "B", "A", "F"];

const arrayGroup4 = [
  [0, 4, 12, 8], //hàng
  [1, 5, 13, 9],
  [3, 7, 15, 11],
  [2, 6, 14, 10],
  [0, 1, 2, 3], //cột
  [4, 5, 6, 7],
  [12, 13, 14, 15],
  [8, 9, 10, 11],
  [0, 1, 4, 5], //ô vuông
  [4, 5, 12, 13],
  [12, 13, 8, 9],
  [1, 3, 5, 7],
  [5, 7, 13, 15],
  [13, 15, 9, 11],
  [3, 2, 7, 6],
  [7, 6, 15, 14],
  [15, 14, 11, 10],
  [0, 8, 2, 10], //góc
  [0, 1, 8, 9], //đối 2 - 2
  [1, 3, 9, 11],
  [3, 2, 11, 10],
  [0, 4, 2, 6],
  [4, 12, 6, 14],
  [2, 8, 14, 10],
];

const arrayShortText4 = [
  "C̄D̄",
  "C̄D",
  "CD",
  "CD̄",
  "ĀB̄",
  "ĀB",
  "AB",
  "AB̄",
  "ĀC̄",
  "BC̄",
  "AC̄",
  "ĀD",
  "BD",
  "AD",
  "ĀC",
  "BC",
  "AC",
  "B̄D̄",
  "B̄C̄",
  "B̄D",
  "B̄C",
  "ĀD̄",
  "BD̄",
  "AD̄",
];

const arrayShortText4Fix = [
  "GH",
  "GD",
  "CD",
  "CH",
  "EF",
  "EB",
  "AB",
  "AF",
  "EG",
  "BG",
  "AG",
  "ED",
  "BD",
  "AD",
  "EC",
  "BC",
  "AC",
  "FH",
  "FG",
  "FD",
  "FC",
  "EH",
  "BH",
  "AH",
];

const arrayGroup2 = [
  [0, 4],
  [4, 12],
  [12, 8],
  [0, 8], //hàng
  [1, 5],
  [5, 13],
  [13, 9],
  [1, 9],
  [3, 7],
  [7, 15],
  [15, 11],
  [3, 11],
  [2, 6],
  [6, 14],
  [14, 10],
  [2, 10],
  [0, 1],
  [1, 3],
  [3, 2],
  [0, 2], //cột
  [4, 5],
  [5, 7],
  [7, 6],
  [4, 6],
  [12, 13],
  [13, 15],
  [15, 14],
  [12, 14],
  [8, 9],
  [9, 11],
  [11, 10],
  [8, 10],
];

const arrayShortText2 = [
  "ĀC̄D̄",
  "BC̄D̄",
  "AC̄D̄",
  "B̄C̄D̄",
  "ĀC̄D",
  "BC̄D",
  "AC̄D",
  "B̄C̄D",
  "ĀCD",
  "BCD",
  "ACD",
  "B̄CD",
  "ĀCD̄",
  "BCD̄",
  "ACD̄",
  "B̄CD̄",
  "ĀB̄C̄",
  "ĀB̄D",
  "ĀB̄C",
  "ĀB̄D̄",
  "ĀBC̄",
  "ĀBD",
  "ĀBC",
  "ĀBD̄",
  "ABC̄",
  "ABD",
  "ABC",
  "ABD̄",
  "AB̄C̄",
  "AB̄D",
  "AB̄C",
  "AB̄D̄",
];

const arrayShortText2Fix = [
  "EGH",
  "BGH",
  "AGH",
  "FGH",
  "EGD",
  "BGD",
  "AGD",
  "FGD",
  "ECD",
  "BCD",
  "ACD",
  "FCD",
  "ECH",
  "BCH",
  "ACH",
  "FCH",
  "EFG",
  "EFD",
  "EFC",
  "EFH",
  "EBG",
  "EBD",
  "EBC",
  "EBH",
  "ABG",
  "ABD",
  "ABC",
  "ABH",
  "AFG",
  "AFD",
  "AFC",
  "AFH",
];

const arrayGroup1 = [
  [0],
  [1],
  [2],
  [3],
  [4],
  [5],
  [6],
  [7],
  [8],
  [9],
  [10],
  [11],
  [12],
  [13],
  [14],
  [15],
];

const arrayShortText1 = [
  "ĀB̄C̄D̄",
  "ĀB̄C̄D",
  "ĀB̄CD̄",
  "ĀB̄CD",
  "ĀBC̄D̄",
  "ĀBC̄D",
  "ĀBCD̄",
  "ĀBCD",
  "AB̄C̄D̄",
  "AB̄C̄D",
  "AB̄CD̄",
  "AB̄CD",
  "ABC̄D̄",
  "ABC̄D",
  "ABCD̄",
  "ABCD",
];

const arrayShortText1Fix = [
  "EFGH",
  "EFGD",
  "EFCH",
  "EFCD",
  "EBGH",
  "EBGD",
  "EBCH",
  "EBCD",
  "AFGH",
  "AFGD",
  "AFCH",
  "AFCD",
  "ABGH",
  "ABGD",
  "ABCH",
  "ABCD",
];

let arrayGroupTrue;
let arrayIndexGroupTrue;
let arraymfull;
let arraym;

const createLogic = () => {
  let logicText = "";
  for (let i = 0; i < arraymfull.length; i++) {
    if (arraymfull[i] === 1) {
      logicText += arrayLogicText[i] + " + ";
    }
  }
  logicText = logicText.substring(0, logicText.length - 3);
  document.getElementById("logic-text").innerHTML = logicText;
};

const createTrueTable = () => {
  const Fcells = document.getElementsByClassName("F");
  for (let i = 0; i < arraymfull.length; i++) {
    Fcells[i].innerHTML = arraymfull[i];
  }
};

const createCacnoTable = () => {
  for (let i = 0; i < arraymfull.length; i++) {
    const mElement = document.getElementById(`m${i}`);
    mElement.innerHTML = arraymfull[i] + `<p>m${i}`;

    if (arraymfull[i] === 1) {
      mElement.style.color = "red";
    } else {
      mElement.style.color = "black";
    }
  }
};

const addGroupTrue = (arrayGroupTrue, arrayGroup, arrayIndexGroupTrue) => {
  for (let i = 0; i < arrayGroup.length; i++) {
    let isGroupTrue = true;
    const existIndexs = [];
    for (let j = 0; j < arrayGroup[i].length; j++) {
      //xét mỗi tổ hợp
      const index = arrayGroup[i][j];

      //Kiểm tra phần tử index có tồn tại rồi chưa
      for (let k = 0; k < arrayGroupTrue.length; k++) {
        for (let m = 0; m < arrayGroupTrue[k].length; m++) {
          const existIndex = arrayGroupTrue[k][m];
          if (existIndex === index) {
            //nếu phần tử tổ hợp đang xét trùng với phần tử đã có
            if (!existIndexs.includes(index)) {
              //nếu trong mảng tồn tại chưa có phần tử trùng này
              existIndexs.push(index);
            }
          }
        }
      }
      //kiểm tra ô bằng 0 hay bằng 1
      if (arraymfull[index] === 0) {
        isGroupTrue = false;
      }
    }
    if (isGroupTrue === true && existIndexs.length < arrayGroup[i].length) {
      arrayGroupTrue.push(arrayGroup[i]);
      if (arrayGroup[0].length === 16) {
        arrayIndexGroupTrue[0].push(i);
      } else if (arrayGroup[0].length === 8) {
        arrayIndexGroupTrue[1].push(i);
      } else if (arrayGroup[0].length === 4) {
        arrayIndexGroupTrue[2].push(i);
      } else if (arrayGroup[0].length === 2) {
        arrayIndexGroupTrue[3].push(i);
      } else if (arrayGroup[0].length === 1) {
        arrayIndexGroupTrue[4].push(i);
      }
    }
  }
};

//fixing group 4
//fixing group 2
const handleDuplicateGroupTrue = (arrayGroupTrue, arrayIndexGroupTrue) => {
  const count = {};
  for (let i = 0; i < arraym.length; i++) {
    count[arraym[i]] = 0;
  }
  for (let i = 0; i < arrayGroupTrue.length; i++) {
    for (let j = 0; j < arrayGroupTrue[i].length; j++) {
      const key = arrayGroupTrue[i][j];
      count[key]++;
    }
  }
  for (let i = 0; i < arrayGroupTrue.length; i++) {
    if (arrayGroupTrue[i].length === 4) {
      //xử lý trường hợp group 4 ô
      if (
        count[arrayGroupTrue[i][0]] >= 2 &&
        count[arrayGroupTrue[i][1]] >= 2 &&
        count[arrayGroupTrue[i][2]] >= 2 &&
        count[arrayGroupTrue[i][3]] >= 2
      ) {
        arrayGroupTrue.splice(i, 1);
        const indexDuplicate =
          i - arrayIndexGroupTrue[0].length - arrayIndexGroupTrue[1].length;
        arrayIndexGroupTrue[2].splice(indexDuplicate, 1);
        count[arrayGroupTrue[i][0]]--;
        count[arrayGroupTrue[i][1]]--;
        count[arrayGroupTrue[i][2]]--;
        count[arrayGroupTrue[i][3]]--;
      }
    }
  }

  //xử lý trường hợp group 2 ô, chưa sửa được
  for (let i = 0; i < arrayGroupTrue.length; i++) {
    if (arrayGroupTrue[i].length === 2) {
      //xử lý trường hợp group 2 ô
      if (
        count[arrayGroupTrue[i][0]] >= 2 &&
        count[arrayGroupTrue[i][1]] >= 2 &&
        count[arrayGroupTrue[i][2]] >= 2 &&
        count[arrayGroupTrue[i][3]] >= 2
      ) {
        arrayGroupTrue.splice(i, 1);
        const indexDuplicate =
          i -
          arrayIndexGroupTrue[0].length -
          arrayIndexGroupTrue[1].length -
          arrayIndexGroupTrue[2].length;
        arrayIndexGroupTrue[3].splice(indexDuplicate, 1);
        count[arrayGroupTrue[i][0]]--;
        count[arrayGroupTrue[i][1]]--;
        count[arrayGroupTrue[i][2]]--;
        count[arrayGroupTrue[i][3]]--;
      }
    }
  }
};

const hardFix = () => {
  const hardFixIndex = document.getElementById("hardFixInput").value;
  if (hardFixIndex != "") {
    arrayGroupTrue.splice(hardFixIndex, 1);
    const lengthG16 = arrayIndexGroupTrue[0].length;
    const lengthG8 = arrayIndexGroupTrue[1].length;
    const lengthG4 = arrayIndexGroupTrue[2].length;
    const lengthG2 = arrayIndexGroupTrue[3].length;
    const lengthG1 = arrayIndexGroupTrue[4].length;
    if (hardFixIndex <= lengthG16 - 1) {
      arrayIndexGroupTrue[0].splice(hardFixIndex, 1);
    } else if (hardFixIndex <= lengthG16 + lengthG8 - 1) {
      arrayIndexGroupTrue[1].splice(hardFixIndex - lengthG16, 1);
    } else if (hardFixIndex <= lengthG16 + lengthG8 + lengthG4 - 1) {
      arrayIndexGroupTrue[2].splice(hardFixIndex - lengthG16 - lengthG8, 1);
    } else if (hardFixIndex <= lengthG16 + lengthG8 + lengthG4 + lengthG2 - 1) {
      arrayIndexGroupTrue[3].splice(
        hardFixIndex - lengthG16 - lengthG8 - lengthG4,
        1
      );
    } else if (
      hardFixIndex <=
      lengthG16 + lengthG8 + lengthG4 + lengthG2 + lengthG1 - 1
    ) {
      arrayIndexGroupTrue[4].splice(
        hardFixIndex - lengthG16 - lengthG8 - lengthG4 - lengthG2,
        1
      );
    }
  }

  printShortText();
  draw("black", "white");
};

let arrayShortTextTrue = [];
let arrayShortTextTrueFix = [];

const printShortText = () => {
  let mShortText = "= ";
  for (let i = 0; i < arrayGroupTrue.length; i++) {
    mShortText += "(";
    for (let j = 0; j < arrayGroupTrue[i].length; j++) {
      mShortText += `m${arrayGroupTrue[i][j]} + `;
    }
    mShortText = mShortText.substring(0, mShortText.length - 3);
    mShortText += ") + ";
  }
  mShortText = mShortText.substring(0, mShortText.length - 3);
  document.getElementById("m-short-text").innerHTML = mShortText;

  let shortText = "= ";
  arrayShortTextTrue = [];
  arrayShortTextTrueFix = [];
  for (let i = 0; i < arrayIndexGroupTrue.length; i++) {
    for (let j = 0; j < arrayIndexGroupTrue[i].length; j++) {
      const index = arrayIndexGroupTrue[i][j];
      if (i === 0) {
        shortText += `${arrayShortText16[index]} + `;
        arrayShortTextTrue.push(arrayShortText16[index]);
        arrayShortTextTrueFix.push(arrayShortText16Fix[index]);
      } else if (i === 1) {
        shortText += `${arrayShortText8[index]} + `;
        arrayShortTextTrue.push(arrayShortText8[index]);
        arrayShortTextTrueFix.push(arrayShortText8Fix[index]);
      } else if (i === 2) {
        shortText += `${arrayShortText4[index]} + `;
        arrayShortTextTrue.push(arrayShortText4[index]);
        arrayShortTextTrueFix.push(arrayShortText4Fix[index]);
      } else if (i === 3) {
        shortText += `${arrayShortText2[index]} + `;
        arrayShortTextTrue.push(arrayShortText2[index]);
        arrayShortTextTrueFix.push(arrayShortText2Fix[index]);
      } else if (i === 4) {
        shortText += `${arrayShortText1[index]} + `;
        arrayShortTextTrue.push(arrayShortText1[index]);
        arrayShortTextTrueFix.push(arrayShortText1Fix[index]);
      }
    }
    if (arrayIndexGroupTrue[i].length > 0) {
      shortText = shortText.substring(0, shortText.length - 3);
      shortText += " + ";
    }
  }
  shortText = shortText.substring(0, shortText.length - 3);
  document.getElementById("short-text").innerHTML = shortText;
};

const createGroupTrue = () => {
  arrayGroupTrue = [];
  arrayIndexGroupTrue = [[], [], [], [], []];
  addGroupTrue(arrayGroupTrue, arrayGroup16, arrayIndexGroupTrue); //theo thứ tự ưu tiên
  addGroupTrue(arrayGroupTrue, arrayGroup8, arrayIndexGroupTrue);
  addGroupTrue(arrayGroupTrue, arrayGroup4, arrayIndexGroupTrue);
  addGroupTrue(arrayGroupTrue, arrayGroup2, arrayIndexGroupTrue);
  addGroupTrue(arrayGroupTrue, arrayGroup1, arrayIndexGroupTrue);

  handleDuplicateGroupTrue(arrayGroupTrue, arrayIndexGroupTrue);

  printShortText();
};

const drawLine = (ctx, startPoint, endPoint, color, lineWidth = 2) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.moveTo(startPoint.x, startPoint.y);
  ctx.lineTo(endPoint.x, endPoint.y);
  ctx.stroke();
};

const drawNegative = (ctx, upPoint, downPoint, color, lineWidth = 2) => {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.moveTo(upPoint.x - 10, upPoint.y);
  ctx.lineTo(upPoint.x + 10, upPoint.y);
  ctx.lineTo(downPoint.x, downPoint.y);
  ctx.lineTo(upPoint.x - 10, upPoint.y);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(downPoint.x, downPoint.y + 5, 5, 0, 2 * Math.PI);
  ctx.stroke();
};

const text4Main = ["A", "B", "C", "D"];
const text4Negative = ["Ā", "B̄", "C̄", "D̄"];

const draw8LineMain = (ctx, color) => {
  for (let i = 0; i < 4; i++) {
    drawLine(
      ctx,
      { x: 50 + i * 50, y: 50 },
      { x: 50 + i * 50, y: 200 + arrayShortTextTrueFix.length * 150 },
      color
    );
    drawLine(
      ctx,
      { x: 75 + i * 50, y: 150 },
      { x: 75 + i * 50, y: 200 + arrayShortTextTrueFix.length * 150 },
      color
    );
    drawLine(ctx, { x: 75 + i * 50, y: 75 }, { x: 75 + i * 50, y: 100 }, color);
    drawLine(ctx, { x: 50 + i * 50, y: 75 }, { x: 75 + i * 50, y: 75 }, color);
    drawNegative(
      ctx,
      { x: 75 + i * 50, y: 100 },
      { x: 75 + i * 50, y: 140 },
      color
    );
    ctx.fillStyle = color;
    ctx.fillText(text4Main[i], 50 + i * 50, 40);
    ctx.fillText(text4Negative[i], 80 + i * 50, 175);
  }
};

const drawAND = (ctx, logicText, indexLogicText, startPoint, color) => {
  drawLine(
    ctx,
    { x: 400, y: startPoint.y - 25 },
    { x: 400, y: startPoint.y + logicText.length * 25 },
    color
  );
  ctx.beginPath();
  ctx.arc(
    400,
    startPoint.y - 12.5 + Math.floor((logicText.length * 25) / 2),
    Math.floor((logicText.length * 25 + 25) / 2),
    -Math.PI / 2,
    Math.PI / 2
  );
  ctx.stroke();
  drawLine(
    ctx,
    {
      x: 400 + Math.floor((logicText.length * 25 + 25) / 2),
      y: startPoint.y - 12.5 + Math.floor((logicText.length * 25) / 2),
    },
    {
      x: 550,
      y: startPoint.y - 12.5 + Math.floor((logicText.length * 25) / 2),
    },
    color
  );
  ctx.fillText(
    arrayShortTextTrue[indexLogicText],
    400 + Math.floor((logicText.length * 25 + 25) / 2) + 10,
    startPoint.y - 12.5 + Math.floor((logicText.length * 25) / 2) - 10
  );
  drawLine(
    ctx,
    {
      x: 550,
      y: startPoint.y - 12.5 + Math.floor((logicText.length * 25) / 2),
    },
    {
      x: 700,
      y:
        offsetY +
        (arrayShortTextTrueFix.length * 150) / 2 +
        indexLogicText * 10,
    },
    color
  );

  for (let i = 0; i < logicText.length; i++) {
    if (logicText[i] === "A") {
      drawLine(
        ctx,
        { x: startPoint.x, y: startPoint.y + 25 * i },
        { x: 400, y: startPoint.y + 25 * i },
        color
      );
      ctx.beginPath();
      ctx.arc(startPoint.x, startPoint.y + 25 * i, 5, 0, 2 * Math.PI);
      ctx.fill();
    } else if (logicText[i] === "B") {
      drawLine(
        ctx,
        { x: startPoint.x + 50, y: startPoint.y + 25 * i },
        { x: 400, y: startPoint.y + 25 * i },
        color
      );
      ctx.beginPath();
      ctx.arc(startPoint.x + 50, startPoint.y + 25 * i, 5, 0, 2 * Math.PI);
      ctx.fill();
    } else if (logicText[i] === "C") {
      drawLine(
        ctx,
        { x: startPoint.x + 100, y: startPoint.y + 25 * i },
        { x: 400, y: startPoint.y + 25 * i },
        color
      );
      ctx.beginPath();
      ctx.arc(startPoint.x + 100, startPoint.y + 25 * i, 5, 0, 2 * Math.PI);
      ctx.fill();
    } else if (logicText[i] === "D") {
      drawLine(
        ctx,
        { x: startPoint.x + 150, y: startPoint.y + 25 * i },
        { x: 400, y: startPoint.y + 25 * i },
        color
      );
      ctx.beginPath();
      ctx.arc(startPoint.x + 150, startPoint.y + 25 * i, 5, 0, 2 * Math.PI);
      ctx.fill();
    } else if (logicText[i] === "E") {
      drawLine(
        ctx,
        { x: startPoint.x + 25, y: startPoint.y + 25 * i },
        { x: 400, y: startPoint.y + 25 * i },
        color
      );
      ctx.beginPath();
      ctx.arc(startPoint.x + 25, startPoint.y + 25 * i, 5, 0, 2 * Math.PI);
      ctx.fill();
    } else if (logicText[i] === "F") {
      drawLine(
        ctx,
        { x: startPoint.x + 75, y: startPoint.y + 25 * i },
        { x: 400, y: startPoint.y + 25 * i },
        color
      );
      ctx.beginPath();
      ctx.arc(startPoint.x + 75, startPoint.y + 25 * i, 5, 0, 2 * Math.PI);
      ctx.fill();
    } else if (logicText[i] === "G") {
      drawLine(
        ctx,
        { x: startPoint.x + 125, y: startPoint.y + 25 * i },
        { x: 400, y: startPoint.y + 25 * i },
        color
      );
      ctx.beginPath();
      ctx.arc(startPoint.x + 125, startPoint.y + 25 * i, 5, 0, 2 * Math.PI);
      ctx.fill();
    } else if (logicText[i] === "H") {
      drawLine(
        ctx,
        { x: startPoint.x + 175, y: startPoint.y + 25 * i },
        { x: 400, y: startPoint.y + 25 * i },
        color
      );
      ctx.beginPath();
      ctx.arc(startPoint.x + 175, startPoint.y + 25 * i, 5, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
};

let offsetY;
const calculateOffset = () => {
  if (arrayShortTextTrueFix.length <= 3) {
    offsetY = 180;
  } else {
    offsetY = 180;
  }
};

const drawOR = (ctx, color) => {
  for (let i = 0; i < arrayShortTextTrueFix.length; i++) {
    drawLine(
      ctx,
      {
        x: 700,
        y: offsetY + (arrayShortTextTrueFix.length * 150) / 2 + i * 10,
      },
      {
        x: 800,
        y: offsetY + (arrayShortTextTrueFix.length * 150) / 2 + i * 10,
      },
      color
    );
  }

  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.arc(
    700,
    200 + (arrayShortTextTrueFix.length * 150) / 2,
    100,
    -Math.PI / 4,
    Math.PI / 4
  );
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(
    710,
    250 + (arrayShortTextTrueFix.length * 150) / 2,
    135,
    -Math.PI / 3,
    (-1.4 * Math.PI) / 12
  );
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(
    710,
    150 + (arrayShortTextTrueFix.length * 150) / 2,
    135,
    (1.4 * Math.PI) / 12,
    Math.PI / 3
  );
  ctx.stroke();
  drawLine(
    ctx,
    { x: 830, y: 200 + (arrayShortTextTrueFix.length * 150) / 2 },
    { x: 900, y: 200 + (arrayShortTextTrueFix.length * 150) / 2 },
    color
  );
  ctx.fillText("F", 840, 200 + (arrayShortTextTrueFix.length * 150) / 2 - 10);
};

const draw = (color, backgroundColor) => {
  if (color === "") {
    color = "black";
  }
  if (backgroundColor === "") {
    backgroundColor = "white";
  }
  const canvas = document.getElementById("logic-canvas");
  canvas.height = 250 + arrayShortTextTrueFix.length * 150;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "16px Arial";
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  calculateOffset();
  draw8LineMain(ctx, color);
  for (let i = 0; i < arrayShortTextTrueFix.length; i++) {
    drawAND(
      ctx,
      arrayShortTextTrueFix[i],
      i,
      { x: 50, y: 200 + 150 * i },
      color
    );
  }
  drawOR(ctx, color);
};

const handleStart = () => {
  const freecode = document.getElementById("freecode").value;
  const remainTimeElement = document.getElementById("remainTime");

  if (freecode == "test") {
    remainTimeElement.innerHTML = "Số lượt miễn phí còn lại: 999999999";

    arraym = document.getElementById("question-input").value.split(",");
    arraymfull = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < arraym.length; i++) {
      arraymfull[arraym[i]] = 1;
    }

    let logicQuestionText = "f(A,B,C,D) = Σm(";
    for (let i = 0; i < arraym.length; i++) {
      logicQuestionText += arraym[i] + ",";
    }
    logicQuestionText = logicQuestionText.slice(
      0,
      logicQuestionText.length - 1
    );
    logicQuestionText += ")";
    document.getElementById("logic-question").innerHTML = logicQuestionText;

    createLogic();
    createTrueTable();
    createCacnoTable();
    createGroupTrue();
    draw("black", "white");
  } else {
    fetch("https://stormy-outerwear-colt.cyclic.app/freecode", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        freecode: freecode,
        device: navigator.userAgent,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "wrong freecode") {
          alert("freecode sai");
        } else if (data.message == "wrong device") {
          alert("Mỗi freecode chỉ dùng được trên 1 thiết bị");
        } else if (data.message == "empty remain") {
          alert("Bạn đã dùng hết lượt miễn phí, vui lòng mua thêm lượt");
        } else if (data.message == "accept") {
          remainTimeElement.innerHTML =
            "Số lượt miễn phí còn lại:" + data.remainTimes;

          arraym = document.getElementById("question-input").value.split(",");
          arraymfull = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (let i = 0; i < arraym.length; i++) {
            arraymfull[arraym[i]] = 1;
          }

          let logicQuestionText = "f(A,B,C,D) = Σm(";
          for (let i = 0; i < arraym.length; i++) {
            logicQuestionText += arraym[i] + ",";
          }
          logicQuestionText = logicQuestionText.slice(
            0,
            logicQuestionText.length - 1
          );
          logicQuestionText += ")";
          document.getElementById("logic-question").innerHTML =
            logicQuestionText;

          createLogic();
          createTrueTable();
          createCacnoTable();
          createGroupTrue();
          draw("black", "white");
        } else {
          alert("Vui lòng thử lại");
        }
      })
      .catch(() => {
        alert("Vui lòng thử lại");
      });
  }
};
