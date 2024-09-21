
import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() 
{
  let post = '게임회사 1위';
  let [글제목,글제목변경] = useState(['전략 게임 추천','게임 업계 매출','게임 시장 트랜드']);
  let [like,like_change] = useState(0);
 
  return(
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'skyblue',fontSize:'16px'}}>ReactBlog</h4>
      </div>
      <button onClick={()=>
      {
        let copy = [...글제목];
        copy[0] = 'RPG 게임 추천';
        글제목변경(copy);
        //글제목[0] = 'RPG 게임 추천';
        //글제목변경(['RPG 게임 추천','게임 업계 매출','게임 시장 트랜드']);
      }}>글수정</button>

      <button onClick={()=>
      {
        let copy2 = [...글제목];
        copy2.sort();
        글제목변경(copy2);
      }}>가나다순 정렬</button>
      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{like_change(like+1)}}>👍</span> {like}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
    </div>
  );
}
function Modal()
{
return (<div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
      </div>
      )
}
export default App;
