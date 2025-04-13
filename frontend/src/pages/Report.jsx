import { useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import axios from "axios";

const Reports = (cacheReport) => {
    const [loading, setLoading] = useState(true);
    const [report, setReport] = useState();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/student/report`)
          .then(response => {
            setReport(response.data);
            console.log(response.data);
            setLoading(false);
          })
          .catch(error => {
            console.error('Lỗi khi lấy dữ liệu điểm:', error);
            setLoading(false);
          });
    }, []);


    const levelToScore = {
      level4: "0-4",
      level3: "4-6",
      level2: "6-8",
      level1: "8-10"
    };
    const subjectNames = {
      math: "Toán",
      literature: "Văn",
      foreignLanguage: "Ngoại Ngữ",
      physics: "Lý",
      chemistry: "Hóa",
      biology: "Sinh",
      history: "Sử",
      geography: "Địa",
      civicEducation: "GDCD"
    };
    return (
      <div className="px-4 sm:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center">Reports</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <span className="text-gray-500 text-lg">Đang tải dữ liệu...</span>
            </div>
          ) : (Object.keys(report).map((subject) => {
            const subjectData = report[subject];
            const labels = Object.keys(subjectData).map(level => levelToScore[level]); 
            const data = Object.values(subjectData); 

            return (
                <div key={subject} className="bg-white shadow rounded-lg p-4">
                    <h3 className="mb-4 font-semibold text-center text-lg">Phổ điểm môn {subjectNames[subject]}</h3>
                    <BarChart labels={labels} data={data} highlightBars={[]} />
                </div>
            );
          }))}
        </div>

      </div>
    );
  };
  
  export default Reports;
  