# Javascript memory-game

## todolist

- 게임 시작 버튼 누르면 게임 시작(카드들의 back-face이 보이게)

- HTML 구조 생성 및 카드 이미지 삽입(V.C 최동혁님 이미지 파일 공유)

- 카드 클릭 시 뒤집는 현상 구현(front-face가 나오도록)

- 카드 두 장 매치가 똑같을 때 그 카드는 다시 못 뒤집게 구현

- 카드 두 장 매치가 다를 때 다시 뒤집기

- 게임 재시작 시 다시 카드 들이 셔플되어 back-face만 보이게끔

-  css 작업

## <미완성 여부 및 버그>

1. css 작업

2. 카드 한 장 더블클릭 할 경우 성공 개수가 증가하는 오류 발생!
```
 - if (firstCard === this) return;
```
추가로 인해 더블클릭 오류 제거

그러나 첫번째 클릭한 카드가 뒤집기가 되지 않는 오류 발생...

```
 - if (firstCard === this) return;
``` 
다시 제거. 

수정 요망!
