const players = require("./players");

console.log("신나는 야구 게임!");

const score = 0; // 점수
const ballCount = [0, 0, 0, 0]; // 스트라이크, 볼, 안타, 아웃

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
        break;
      case -1:
        break;
    }
  }
}

function randomBallCount() {
  const randomInt = Math.floor(Math.random() * (5 - 1) + 1);
  switch (randomInt) {
    case 1: // 스트라이크
      console.log("스트라이크!");
      ballCount[0] += 1;
      break;
    case 2: // 볼
      console.log("볼!");
      ballCount[1] += 1;
      break;
    case 3: // 안타
      console.log("안타!");
      ballCount[2] += 1;
      nextBatter();
      break;
    case 4: // 아웃
      console.log("아웃!");
      ballCount[3] += 1;
      nextBatter();
      break;
  }
  ballCountCheck();
  console.log(`${ballCount[0]}S ${ballCount[1]}B ${ballCount[3]}O\n`);
}

// 다음타자
function nextBatter() {
  if (ballCount[3] < 3) {
    console.log("다음 타자가 타석에 입장했습니다.");
  }
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
  console.log("첫 번째 타자가 타석에 입장했습니다.\n");
  for (;;) {
    randomBallCount();
    // 아웃 체크
    if (ballCount[3] == 3) {
      console.log(`최종 안타수: ${ballCount[2]}`);
      console.log("GAME OVER");
      break;
    }
  }
}

main();
