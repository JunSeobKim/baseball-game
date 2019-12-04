const players = require("./players");

console.log("신나는 야구 게임!");

let score = 0; // 점수
let ballCount = [0, 0, 0, 0]; // 스트라이크, 볼, 안타, 아웃
let nowTeam = 1;
let now = 0;
let out = 0;
let scoreTeam1 = 0;
let scoreTeam2 = 0;
let player = 1;
let rotation = [[], [], [], [], [], [], [], [], [], [], [], []]; // 1회초 ~ 6회말

function main() {
  for (;;) {
    players.selectMenu();
    // CANCEL 선택 시 종료
    if (menuNumber == -1) {
      break;
    }
    switch (menuNumber) {
      case 0:
        players.dataInputTeam1();
        players.dataInputTeam2();
        break;
      case 1:
        console.log(team1);
        console.log(team2);
        break;
      case 2:
        gameStart();
        break;
      case -1:
        break;
    }
  }
}

function randomBallCount1(player) {
  let randomInt1 = Math.random();
  if (randomInt1 < team1[player][1]) {
    console.log("안타!");
    ballCount[2] += 1;
    nextBatter();
  } else if (
    team1[player][1] <= randomInt1 &&
    randomInt1 < (11 + 10 * team1[player][1]) / 20
  ) {
    console.log("스트라이크!");
    ballCount[0] += 1;
  } else if (
    randomInt1 < (11 + 10 * team1[player][1]) / 20 <= randomInt1 &&
    randomInt1 < 0.9
  ) {
    console.log("볼!");
    ballCount[1] += 1;
  } else if (0.9 <= randomInt1) {
    console.log("아웃!");
    ballCount[3] += 1;
    nextBatter();
  }
  ballCountCheck();
  console.log(`${ballCount[0]}S ${ballCount[1]}B ${ballCount[3]}O\n`);
}

function randomBallCount2(player) {
  let randomInt2 = Math.random();
  if (randomInt2 < team2[player][1]) {
    console.log("안타!");
    ballCount[2] += 1;
    nextBatter();
  } else if (
    team2[player][1] <= randomInt2 &&
    randomInt2 < (11 + 10 * team2[player][1]) / 20
  ) {
    console.log("스트라이크!");
    ballCount[0] += 1;
  } else if (
    randomInt2 < (11 + 10 * team2[player][1]) / 20 <= randomInt2 &&
    randomInt2 < 0.9
  ) {
    console.log("볼!");
    ballCount[1] += 1;
  } else if (0.9 <= randomInt2) {
    console.log("아웃!");
    ballCount[3] += 1;
    nextBatter();
  }
  ballCountCheck();
  console.log(`${ballCount[0]}S ${ballCount[1]}B ${ballCount[3]}O\n`);
}

// 다음타자
function nextBatter() {
  if (ballCount[3] < 3) {
    console.log("다음 타자가 타석에 입장했습니다.");
  }
  out = 1;
  ballCount[0] = 0;
  ballCount[1] = 0;
}

// 삼진아웃, 볼넷 체크
function ballCountCheck() {
  if (ballCount[0] == 3) {
    // 삼진아웃 체크
    console.log("아웃!");
    ballCount[3] += 1;
    nextBatter();
  }
  if (ballCount[1] == 4) {
    // 볼넷 체크
    console.log("사구!");
    ballCount[2] += 1;
    nextBatter();
  }
}

// 게임 시작
function gameStart() {
  console.log(`1회초 ${team1[0]} 공격
  `);
  for (; player < 10; player++) {
    if (nowTeam == 1) {
      for (;;) {
        console.log(`${team1[player][0]}`);
        randomBallCount1(player);
        if (out == 1) {
          out = 0;
          break;
        }
      }
      outCheck();
    }
    if (nowTeam == 2) {
      for (;;) {
        console.log(`${team2[player][0]}`);
        randomBallCount2(player);
        if (out == 1) {
          out = 0;
          break;
        }
      }
      outCheck();
    }
    if (now == 12) {
      console.log(`경기 종료
      ${team1[0]} VS ${team2[0]}
      ${scoreTeam1} : ${scoreTeam2}
      Thank you!`);
      break;
    }
    if (player == 9) {
      player = 0;
    }
  }
}
// 아웃, 공수교대 체크
function outCheck() {
  if (ballCount[3] == 3) {
    console.log(`최종 안타수: ${ballCount[2]}`);
    console.log("공수 교대");
    player = 1;
    score = ballCount[2] - 3; //득점
    if (score <= 0) {
      score = 0;
    }
    rotation[now] = score; // 득점 저장
    score = 0; // 득점 초기화
    ballCount = [0, 0, 0, 0]; // 볼카운트 초기화
    if (nowTeam == 1) {
      scoreTeam1 += rotation[now];
      nowTeam = 2;
    } else if (nowTeam == 2) {
      scoreTeam2 += rotation[now];
      nowTeam = 1;
    }
    now++;
  }
}

main();
