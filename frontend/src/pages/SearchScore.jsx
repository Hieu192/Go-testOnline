import { useState } from "react";
import axios from "axios";

const SearchScores = () => {
  const [searchScore, setSearchScore] = useState("");
  const [loading, setLoading] = useState(false);
  const [sinhVien, setSinhVien] = useState({
    mssv: "",
    toan: "",
    van: "",
    anh: "",
    ly: "",
    hoa: "",
    sinh: "",
  });

  const handleSearch = async () => {
    if (!searchScore.trim()) {
      alert("Vui lòng nhập!");
      return;
    }
    setLoading(true); 
    try {
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/student/${searchScore}`);
      console.log(res.data);
      setSinhVien(res.data);
    } catch (error) {
      alert("Lỗi khi tìm kiếm", error.message);
    } finally {
      alert("Tìm kiếm hoàn tất!");
      setLoading(false); // Tắt trạng thái loading sau khi hoàn thành
    }
  };

    return (
      <div className="space-y-6 ">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">User Registration</h2>
          <label className="block mb-1">Registration Number:</label>
          <div className="flex space-x-2">
            <input
              type="text" 
              className="border px-2 py-1 rounded w-full"
              placeholder="Enter registration number"
              value={searchScore}
              onChange={(e) => setSearchScore(e.target.value)}
            />
            <button  
              className="bg-black text-white px-4 py-1 rounded"
              onClick={handleSearch}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-2">Detailed Scores</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border border-gray-300 px-3 py-2">SBD </th>
                  <th className="border border-gray-300 px-3 py-2">Toán</th>
                  <th className="border border-gray-300 px-3 py-2">Ngữ Văn</th>
                  <th className="border border-gray-300 px-3 py-2">Ngoại Ngữ</th>
                  <th className="border border-gray-300 px-3 py-2">Vật Lí </th>
                  <th className="border border-gray-300 px-3 py-2">Hóa Học </th>
                  <th className="border border-gray-300 px-3 py-2">Sinh học </th>
                  <th className="border border-gray-300 px-3 py-2">Lịch Sử </th>
                  <th className="border border-gray-300 px-3 py-2">Địa Lý </th>
                  <th className="border border-gray-300 px-3 py-2">GDCD </th>
                </tr>
              </thead>
              <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="border px-3 py-2">{sinhVien.registrationNumber}</td>
                    <td className="border px-3 py-2">{sinhVien.math}</td>
                    <td className="border px-3 py-2">{sinhVien.literature}</td>
                    <td className="border px-3 py-2">{sinhVien.foreignLanguage}</td>
                    <td className="border px-3 py-2">{sinhVien.physics}</td>
                    <td className="border px-3 py-2">{sinhVien.chemistry}</td>
                    <td className="border px-3 py-2">{sinhVien.biology}</td>
                    <td className="border px-3 py-2">{sinhVien.history}</td>
                    <td className="border px-3 py-2">{sinhVien.geography}</td>
                    <td className="border px-3 py-2">{sinhVien.civicEducation}</td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchScores;
  