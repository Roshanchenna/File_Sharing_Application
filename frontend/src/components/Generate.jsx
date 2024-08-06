import { useEffect, useRef, useState } from "react";
import { uploadFile } from "../services/api";
import img from "../../assests/Logo.jpg";
import { FaCloudUploadAlt, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Generate = () => {
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [uploading, setUploading] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const [previousUrls, setPreviousUrls] = useState([]);
  const navigate = useNavigate();
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadClick = () => {
    fileInput.current?.click();
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopyStatus('Link Copied to Clipboard');
      setTimeout(() => setCopyStatus(''), 3000);
    });
  };

  const handleLogout = () => {
    console.log("Logout clicked");
    localStorage.removeItem('token');
    navigate('/');
  };

  useEffect(() => {
    const uploadImage = async () => {
      if (file) {
        const data = new FormData();
        data.append('name', file.name);
        data.append('file', file);
        setUploading(true);
        try {
          const response = await uploadFile(data);
          setResult(response.path);
          setPreviousUrls(prev => [...prev, { name: file.name, url: response.path }]);
        } catch (error) {
          console.error("Error uploading file:", error);
          // Handle error (e.g., show error message to user)
        } finally {
          setUploading(false);
        }
      }
    };
    uploadImage();
  }, [file]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">
            File <span className="text-blue-500">Sharing</span> App
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-600 text-white font-medium rounded-lg text-sm px-4 py-2 hover:bg-red-700 transition duration-300"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <img src={img} alt="Logo" className="max-h-48 mx-auto mb-6" />
            <p className="text-xl text-center mb-6">Upload and share your files securely</p>
            <div className="flex justify-center">
              <button
                onClick={handleUploadClick}
                className="flex items-center gap-2 bg-blue-600 text-white font-medium rounded-lg text-lg px-6 py-3 hover:bg-blue-700 transition duration-300"
              >
                <FaCloudUploadAlt className="text-2xl" />
                Upload File
              </button>
            </div>
            <input 
              type="file" 
              ref={fileInput} 
              className="hidden"
              onChange={handleFileChange} 
            />
            {uploading && <p className="text-center mt-4">Uploading...</p>}
            {result && (
              <div className="mt-6">
                <p className="mb-2">Your file link:</p>
                <div className="flex items-center py-2 px-4 bg-gray-700 rounded-md">
                  <a href={result} target="_blank" rel="noopener noreferrer" className="truncate flex-grow text-blue-400">
                    {result}
                  </a>
                  <button onClick={() => copyToClipboard(result)} className="ml-2 text-gray-300 hover:text-white">
                    <MdOutlineContentCopy className="text-xl" />
                  </button>
                </div>
                {copyStatus && <p className="mt-2 text-green-400">{copyStatus}</p>}
              </div>
            )}
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Previous Uploads</h2>
            {previousUrls.length > 0 ? (
              <ul className="space-y-4">
                {previousUrls.map((item, index) => (
                  <li key={index} className="bg-gray-700 p-3 rounded-md flex justify-between items-center">
                    <span className="truncate mr-2">{item.name}</span>
                    <div className="flex items-center">
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 mr-2">
                        View
                      </a>
                      <button onClick={() => copyToClipboard(item.url)} className="text-gray-300 hover:text-white">
                        <MdOutlineContentCopy />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No previous uploads</p>
            )}
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-400 text-center">
          By uploading, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Generate;