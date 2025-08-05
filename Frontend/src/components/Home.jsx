import React, { useState } from "react";
import { FaFileWord } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa";
import axios from "axios";

function Home() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convert, setConvert] = useState("");
  const [downloadError, setDownloadError] = useState("");
  const [loading, setLoading] = useState(false);
  const [pdfBlob, setPdfBlob] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setPdfBlob(null);
    setConvert("");
    setDownloadError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setConvert("Please select a file");
      return;
    }
    setLoading(true);
    setConvert("");
    setDownloadError("");
    setPdfBlob(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const response = await axios.post(
        "http://localhost:3000/convertfile",
        formData,
        {
          responseType: "blob",
        }
      );
      setPdfBlob(response.data);
      setConvert("File Converted Successfully");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setDownloadError("Error occurred: " + error.response.data.message);
      } else {
        setDownloadError("An error occurred during conversion.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (!pdfBlob) return;
    const url = window.URL.createObjectURL(new Blob([pdfBlob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf"
    );
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <>
      <div className="max-w-screen-2xl mx-auto container px-6 py-3 md:px-40">
        <div className="flex h-screen items-center justify-center">
          <div className="border-2 border-dashed px-4 py-2 md:px-8 md:py-6 border-indigo-400 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-4">
              Convert Word to PDF Online
            </h1>
            <p className="text-sm text-center mb-5">
              Easily convert Word documents to PDF format online, without having
              to install any software.
            </p>

            <div className="flex flex-col items-center space-y-4">
              <input
                type="file"
                accept=".doc,.docx"
                onChange={handleFileChange}
                className="hidden"
                id="FileInput"
              />
              <label
                htmlFor="FileInput"
                className="w-full flex items-center justify-center px-4 py-6 bg-gray-100 text-gray-700 rounded-lg shadow-lg cursor-pointer border-blue-300 hover:bg-blue-700 duration-300 hover:text-white"
              >
                <FaFileWord className="text-3xl mr-3" />
                <span className="text-2xl mr-2 ">
                  {selectedFile ? selectedFile.name : "Choose File"}
                </span>
              </label>
              <button
                onClick={handleSubmit}
                disabled={!selectedFile || loading}
                className="text-white bg-blue-500 hover:bg-blue-700 duration-300 font-bold px-4 py-2 rounded-lg"
              >
                {loading ? "Converting..." : "Convert File"}
              </button>
              {loading && (
              <div className="flex items-center space-x-2 text-blue-500 text-center">
                 <FaSpinner className="animate-spin text-2xl" />
                 <span>Converting, please wait...</span>
                </div>
              )}
              {convert && !loading && (
                <div className="text-green-500 text-center">{convert}</div>
              )}
              {pdfBlob && !loading && (
                <button
                  onClick={handleDownload}
                  className="text-white bg-green-500 hover:bg-green-700 duration-300 font-bold px-4 py-2 rounded-lg"
                >
                  Download PDF
                </button>
              )}
              {downloadError && (
                <div className="text-red-500 text-center">{downloadError}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;