import './App.css';
import {useRef} from 'react';
function App() {
  const fileInputRef = useRef();
  const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
  const onUploadClick = ()=>{

  }
  return (
    <div className="Container">
        <img src={url} alt='logo' />
      <div className='wrapper'>
        <h1>Simple File Sharing</h1>
        <p>Upload and share the download link.</p>
         <button onClick={()=>onUploadClick()}>Upload</button>
         <input 
         type='file' 
         ref={fileInputRef}
         style={{display:'none'}}
         />
      </div>
    </div>
  );
}

export default App;
