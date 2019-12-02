# Baseball-game

Baseball game with Javascript

### 개요

- 가상 야구 게임의 점수판을 구현한다.
- 할 수 있는 단계까지만 구현한다.
- 각 단계별로 지정된 클린 코딩 룰을 적용한다. (예: 1단계는 1단계 클린 코딩 적용)
- 각 단계별로 구현한 코드 동작에 대해 README.md에 정리한다.
- 특별히 명시되지 않은 부분은 자유롭게 구현한다.

## 1단계

- gameStart()함수에 무한루프를 만들어 3아웃이 되기전까지 경기진행
- randomBallCount()함수로 스트라이크, 볼, 안타, 아웃 중 한 가지의 결과 출력
  - Math.random 함수로 1~4의 숫자를 랜덤으로 받는다.
  - 각 숫자에 switch case문으로 스트라이크, 볼, 안타, 아웃을 구현
  - ballCountCheck()함수로 경기가 끝날 때 마다 삼진아웃, 볼넷 체크
  - 경기가 끝날 때 마다 현재볼카운트 상황 출력
- ballCountCheck() 함수
  - ballCount 배열에 있는 스트라이크, 볼 체크를 통해 삼진아웃, 볼넷 판별
  - 다음 선수가 나가야 할 경우 nextBatter()함수 사용한다.
- nextBatter() 함수
  - 다음 타자가 입장할 때의 함수
  - 스트라이크, 볼 카운트를 초기화시킨다.
- gameStart() 함수
  - 3아웃이 될 경우 게임을 종료한다.
