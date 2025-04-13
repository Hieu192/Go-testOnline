import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${import.meta.env.VITE_BASE_URL}/student/top-10/groupA`)
      .then(response => {
        setStudents(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Lỗi khi lấy dữ liệu:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8 text-center">Top 10 khối A</h2>
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Detailed Scores</h2>
        <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-300 px-3 py-2">SBD </th>
                <th className="border border-gray-300 px-3 py-2">Toán</th>
                <th className="border border-gray-300 px-3 py-2 sm:table-cell hidden">Ngữ Văn</th>
                <th className="border border-gray-300 px-3 py-2 sm:table-cell hidden">Ngoại Ngữ</th>
                <th className="border border-gray-300 px-3 py-2">Vật Lí </th>
                <th className="border border-gray-300 px-3 py-2">Hóa Học </th>
                <th className="border border-gray-300 px-3 py-2 sm:table-cell hidden">Sinh học </th>
                <th className="border border-gray-300 px-3 py-2 sm:table-cell hidden">Lịch Sử </th>
                <th className="border border-gray-300 px-3 py-2 sm:table-cell hidden">Địa Lý </th>
                <th className="border border-gray-300 px-3 py-2 sm:table-cell hidden">GDCD </th>
                <th className="border border-gray-300 px-3 py-2">Tổng điểm khối A</th>
              </tr>
            </thead>
            {loading ? (
                <tr>
                  <td colSpan="11" className="text-center py-4">
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : (students.map((sinhVien, index) => (
              <tbody key={index}>
                <tr className="hover:bg-gray-50">
                  <td className="border px-3 py-2">{sinhVien.registrationNumber}</td>
                  <td className="border px-3 py-2">{sinhVien.math}</td>
                  <td className="border px-3 py-2 sm:table-cell hidden">{sinhVien.literature}</td>
                  <td className="border px-3 py-2 sm:table-cell hidden">{sinhVien.foreignLanguage}</td>
                  <td className="border px-3 py-2">{sinhVien.physics}</td>
                  <td className="border px-3 py-2">{sinhVien.chemistry}</td>
                  <td className="border px-3 py-2 sm:table-cell hidden">{sinhVien.biology}</td>
                  <td className="border px-3 py-2 sm:table-cell hidden">{sinhVien.history}</td>
                  <td className="border px-3 py-2 sm:table-cell hidden">{sinhVien.geography}</td>
                  <td className="border px-3 py-2 sm:table-cell hidden">{sinhVien.civicEducation}</td>
                  <td className="border px-3 py-2">{sinhVien.math + sinhVien.physics + sinhVien.chemistry}</td>
                </tr>
              </tbody>
            )))}
          </table>
        </div>

      </div>
    </div>
  );
};
  
  export default Dashboard;
  