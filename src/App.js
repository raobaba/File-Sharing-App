import './App.css';
import { useRef, useState, useEffect } from 'react';
import { uploadFile } from './Services/api';
function App() {
  const [file, setFile] = useState('');

  const fileInputRef = useRef();

  const url = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        console.log(response)
      }
    }
    getImage();
  }, [file])
  const onUploadClick = () => {
    fileInputRef.current.click();
  }
  return (
    <div className="Container">
      <img src={url} alt='logo' />
      <div className='wrapper'>
        <h1>Simple File Sharing</h1>
        <p>Upload and share the download link.</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type='file'
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
    </div>
  );
}

export default App;
