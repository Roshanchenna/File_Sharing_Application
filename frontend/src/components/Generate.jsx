import { useEffect, useRef, useState } from "react";
import { uploadFile } from "../services/api";
import img from "../../assests/Logo.jpg";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";

const Generate = () => {
  const fileInput = useRef();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [uploading, setUploading] = useState(false);
  const [copy, setCopy] = useState('');

  const changeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = () => {
    fileInput.current.click();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result).then(() => {
      setCopy('Link Copied to Clipboard');
      setTimeout(() => {
        setCopy('');
      }, 3000);
    });
    alert("Copied to clipboard");
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);
        setUploading(true);
        const response = await uploadFile(data);
        setResult(response.path);
        setUploading(false);
      }
    };
    getImage();
  }, [file]);

  return (
    <div className="flex h-screen bg-gray-800 text-white">
      <div className="flex items-center justify-center w-1/2 p-4">
        <img src={img} alt="Logo" className="max-h-full max-w-full object-contain" />
      </div>
      <div className="flex flex-col justify-center items-center w-1/2 p-4">
        <h1 className="text-4xl font-semibold py-2">
          File <span className="text-blue-600">Sharing</span> App
        </h1>
        <p className="text-xl py-2">Upload and share your files</p>
        <div className="flex justify-center items-center my-4">
          <button
            onClick={onUpload}
            className="flex items-center gap-2 bg-blue-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-800"
          >
            <FaCloudUploadAlt className="text-2xl" />
            Upload
          </button>
        </div>
        <input type="file" ref={fileInput} style={{ display: "none" }} onChange={changeFile} />
        {uploading && <p className="text-center">Uploading...</p>}
        {result && (
          <div className="mt-4">
            <p>Here is your link:</p>
            <div className="flex items-center py-2 px-4 bg-gray-700 rounded-md">
              <a href={result} target="_blank" rel="noopener noreferrer" className="truncate max-w-full text-blue-400">
                {result}
              </a>
              <span onClick={copyToClipboard} className="cursor-pointer ml-2">
                <MdOutlineContentCopy className="text-white text-xl" />
              </span>
            </div>
            {copy && <p className="mt-2 text-blue-300">{copy}</p>}
          </div>
        )}
        <p className="mt-4 text-sm text-gray-400">
          🛈 By uploading you are agreeing to our Terms & services and Privacy Policies
        </p>
      </div>
    </div>
  );
};

export default Generate;
