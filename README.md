# 📊 G-Scores - THPT Scores Statistics Web App

Đây là một dự án **Web App thống kê điểm thi THPT** được xây dựng bằng NestJS (backend) và ReactJS + Vite (frontend). Hệ thống hỗ trợ người dùng upload và tra cứu dữ liệu điểm thi từ file CSV, hiển thị thông tin và thống kê điểm một cách trực quan.

## 🚀 Tính năng chính

- 🔐 RESTful API lấy dữ liệu điểm thi
- 📁 Upload & xử lý file CSV đầu vào
- 📊 Hiển thị và thống kê điểm thi theo môn
- 🔍 Tìm kiếm theo SBD, top 10 khối A 
- 📄 Giao diện dashboard, báo cáo
- 🧭 Kết nối giữa frontend và backend qua API
- 🐳 Docker hóa toàn bộ hệ thống

## 🛠️ Công nghệ sử dụng

| Công nghệ        | Mô tả                                  |
|------------------|----------------------------------------|
| NestJS           | Backend framework (Node.js + TypeScript) |
| ReactJS + Vite   | Frontend UI, build nhanh & hiện đại     |
| TailwindCSS      | Styling tiện lợi và responsive          |
| TypeORM          | ORM cho MySQL, hỗ trợ migration         |
| MySQL            | Cơ sở dữ liệu quan hệ                   |
| Docker           | Tạo môi trường phát triển nhất quán     |
| CSV Parser       | Đọc và xử lý dữ liệu điểm thi từ file   |

---

## 📁 Cấu trúc thư mục

```bash
GO-intern/
├── backend/                # NestJS backend API
│   ├── src/
│   │   ├── common/         # Các helper dùng chung
│   │   ├── database/       # Cấu hình TypeORM & entity
│   │   ├── seeders/        # Xử lý seed dữ liệu từ CSV
│   │   ├── student/        # Module xử lý dữ liệu điểm
│   │   ├── app.module.ts   # Module của ứng dụng 
│   │   └── main.ts         # Entry point backend
│   └── dockerfile
│
├── frontend/               # ReactJS + Vite frontend
│   ├── src/
│   │   ├── components/     # Các component giao diện
│   │   ├── pages/          # Các trang Dashboard, Search,...
│   │   ├── routes/         # route 
│   │   └── main.jsx        # Entry point frontend
│   └── dockerfile
│
├── docker-compose.yml      # Docker Compose file
└── README.md
```

## 🐳 Chạy toàn bộ hệ thống bằng Docker

Clone project
```bash
git clone https://github.com/your-username/GO-intern.git
cd GO-intern
```

Chạy ứng dụng
```bash
docker-compose up --build
```


## ⚙️ Chạy thủ công (local)
```bash
git clone https://github.com/your-username/GO-intern.git
cd GO-intern
```

1. Backend (NestJS)
```bash
Cấu hình lại DB: backend/src/config/typeorm.config.ts hoặc .env
cd backend
npm install 
npm run seed (import dữ liệu vào database )
npm run dev 
```

2. Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```

## 🧪 Link Demo ứng dụng 
👉 [Xem video trên Google Drive](https://drive.google.com/file/d/YourFileID/view)

## 📌 API

GET /student/:/:registrationNumber – Tìm điểm thi theo SBD

GET /student/report – Báo cáo số lượng thí sinh theo 4 level của từng môn học 

GET /student/top-10/GroupA - Top 10 thí sinh điểm cao nhất khối A 