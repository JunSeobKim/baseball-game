const readlineSync = require("readline-sync");

function selectMenu() {
  menu = ["Data input", "Data output", "Game start!"];
  menuNumber = readlineSync.keyInSelect(menu, "Select Menu");
}

// 팀1
function dataInputTeam1() {
  team1 = ["", [], [], [], [], [], [], [], [], []];

  // 팀이름 입력
  team1[0] = readlineSync.question(
    "Please enter the name of the first team > ",
    { defaultInput: "Unknown team" }
  );
  // 선수 입력
  for (let i = 1; i < 10; i++) {
    team1[i][0] = readlineSync.question(`Player${i} name > `);
    team1[
      i
    ][1] = readlineSync.questionFloat(
      `Player${i} batting average (0.1 < h < 0.5) > `,
      { defaultInput: 0.3 }
    );
    // 타율 0.1 ~ 0.5 사이인지 판별
    if (!(0.1 < team1[i][1] && 0.5 > team1[i][1])) {
      console.log(
        `Player${i} batting average was not well entered. Please data input again.`
      );
    }
    console.log(team1[i]);
  }
}

// 팀2
function dataInputTeam2() {
  team2 = ["", [], [], [], [], [], [], [], [], []];

  // 팀이름 입력
  team2[0] = readlineSync.question(
    "Please enter the name of the second team > "
  );
  // 선수 입력
  for (let i = 1; i < 10; i++) {
    team2[i][0] = readlineSync.question(`Player${i} name > `);
    team2[
      i
    ][1] = readlineSync.questionFloat(
      `Player${i} batting average (0.1 < h < 0.5) > `,
      { defaultInput: 0.3 }
    );
    // 타율 0.1 ~ 0.5 사이인지 판별
    if (!(0.1 < team2[i][1] && 0.5 > team2[i][1])) {
      console.log(
        `Player${i} batting average was not well entered. Please data input again.`
      );
    }
    console.log(team2[i]);
  }
}

exports.selectMenu = selectMenu;
exports.dataInputTeam1 = dataInputTeam1;
exports.dataInputTeam2 = dataInputTeam2;
