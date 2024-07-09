import { useEffect, useRef, useState } from "react";
import { uploadFile } from "./services/api";
import img from './Logo.jpg';
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
const App = () => {
  const fileInput = useRef();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [uploading, setUploading] = useState(false);
  const [copy,setCopy] = useState('')
  const changeFile = (e) => {
    setFile(e.target.files[0]);
  };
  const onUpload = () => {
    fileInput.current.click();
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result).then(()=>{
      setCopy("'Link Copied to Clipboard'");
      setTimeout(()=>{
        setCopy('')
      },3000)
    })
    alert("copied to clipboard")
  }; 
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);
        setUploading(true); // Start uploading
        const response = await uploadFile(data);
        setResult(response.path);
        setUploading(false); // Upload complete
      }
    };
    getImage();
  }, [file]);
  return (
<div id="box" className="flex h-screen">
  <div className="flex items-center justify-center w-1/2">
    <img src={img} alt="img" className="max-h-full max-w-full object-contain" />
  </div>
  <div className="flex flex-col justify-center items-center w-1/2 text-center p-4">
    <h1 className="text-4xl font-semibold py-2 text-white">
      File <span className="text-blue-800">Sharing</span> App
    </h1>
    <p className="text-xl font-normal py-2 text-white">Upload and share Your Files</p>
    <div className="flex justify-center items-center m-auto">
      <button
        onClick={onUpload}
        className="flex items-center gap-2 text-white bg-slate-700 border-blue-400 border-solid blueShadow duration-200 font-medium rounded-lg text-sm px-5 py-2.5 focus:ring-4 focus:outline-none focus:ring-slate-950 me-2 mb-2"
      >
        <FaCloudUploadAlt className="text-2x" />
        Upload
      </button>
    </div>
    <input type="file" ref={fileInput} style={{ display: "none" }} onChange={changeFile} />
    {uploading && <p id="loader" className="text-center text-white">Uploading...</p>}
    {result && (
      <div className="">
        <p className="text-white">Here is your Link :</p>
        <div className="flex items-center py-2 px-2 rounded-md">
          <a href={result} target="_blank" className="truncate max-w-full text-blue-800">
            {result}
          </a>
          <span onClick={copyToClipboard} className="cursor-pointer ml-2">
            <MdOutlineContentCopy className="text-white"/>
          </span>
        </div>
        {copy && (
          <p className="my-2 py-1 px-1 rounded-md text-blue-200">
            {copy}
          </p>
        )}
      </div>
    )}
    <p id="p" className="my-2 mx-2 py-2 text-sm text-white">
      🛈 By uploading you are agreeing to our Terms & services and Privacy Policies
    </p>
  </div>
</div>
  
  );
};

export default App;
