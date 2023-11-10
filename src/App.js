import "./App.css";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  async function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    // Tạo đường dẫn đến đối tượng con trong Firebase Storage
    const storageRef = ref(storage, "music/" + uuidv4() + "-" + file.name);

    try {
      // Thực hiện việc tải lên và lắng nghe sự kiện progress (nếu cần thiết)
      const snapshot = await uploadBytes(storageRef, file);
      console.log("Tải lên thành công!");

      // Lấy URL của tệp đã tải lên
      const downloadURL = await getDownloadURL(snapshot.ref);

      // Cập nhật danh sách tệp đã tải lên với thông tin mới
      setUploadedFiles((prevFiles) => [
        ...prevFiles,
        { name: file.name, url: downloadURL },
      ]);
    } catch (error) {
      console.error("Lỗi tải lên:", error);
    }
  }

  return (
    <div className="App">
      <input type="file" id="fileInput" />
      <button onClick={uploadFile}>Tải lên</button>

      <h2>Các tệp đã tải lên:</h2>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.name}>
            <a href={file.url} target="_blank" rel="noopener noreferrer">
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
