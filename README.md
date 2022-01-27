### 타입스크립트를 활용한 todoList!
개발자들이 가장 기본적으로 만들어본다는 todolist를 만들어 보았습니다.

### 일반적인 todolist? No!!


### 리렌더링을 최적화하기..?  2022/01/27
item(할 일)을 삭제할 때 todopopup에 있는 state 와 삭제하는 state가 같으면 자동으로 꺼지게 구현을 하려 했습니다... 미들웨어를 쓰지 않고 해보려 했지만 실패..ㅜ     item(할 일)을 클릭했을 때 todopopup에 자세히 뜨고 list는 리렌더링되지 않도록 구현     하지만 list에서 item remove 함수를 만들어 item에게 전달 파라미터로 item의 id와 선택되어있는 item의 id를 받아와 삭제 로직을 구현했지만 (선택된 item의 id와 삭제하려는 item의 id가 같을경우 todopopup을 초기화 시켜주기위해) 선택된 item의 id가 리랜더링이 되지않아 파라미터를 호출하지 못하여 안되었습니다. 그 외 다른 useSelector,useState등 여러 방법을 사용해봤지만 잘안되어서 결국 middleware를 사용하여 처리하였습니다...    그리고 thunk를 쓸까 saga를 쓸까 고민을 했지만 thunk는 과거에 여러번 써본 경험이 있어 saga를 써보았다 제네레이트 문법이나 여러가지 새로운걸 알게되서 재밌게 구현해보았습니다.


