# PWA

link : https://mildmocha.github.io/PWA/ <br
                                         <br>
 TodoList를 PWA웹앱으로 만듦  
<br><br>

Input 값으로 Item을 생성하고 <br>
드래그 앤 드롭으로 Item을 옮길 수 있으며,<br> 마우스 오른쪽 버튼을 누르면 Item이 삭제된다
 <br><br>
item에 ID를 부여해서 드래그를 시작했을 때 ID값을 변수 from에 저장해서 <br>
드롭대상의 ID를 변수 to에 저장해 from과 to가 같으면 아무 변화가 없고<br>
다르면 to로 이동한다. 
<br>
item을 각 카테고리별 키 값을 갖고있는 json으로 변환시켜 localstorage에 저장하고 불러온다.<br>
item에 마우스 오른쪽버튼을 누르면 그 item의 id값을 filter해서 삭제한다
