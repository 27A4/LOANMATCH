# LOANMATCH - Website tìm kiếm, lọc và so sánh khoản vay

## 1. Giới thiệu dự án
**LOANMATCH** là website hỗ trợ người dùng **tìm kiếm, lọc và so sánh các khoản vay** phù hợp với nhu cầu cá nhân.
Thay vì phải truy cập nhiều website của ngân hàng hoặc tổ chức tài chính khác nhau để tìm hiểu thông tin, LOANMATCH tập trung các thông tin về khoản vay trên một giao diện thống nhất.
Website giúp người dùng dễ dàng theo dõi và so sánh các tiêu chí như:
- Lãi suất
- Hạn mức vay
- Thời hạn vay
- Phương thức trả
- Đối tượng phù hợp
- Điều kiện và thông tin liên quan đến khoản vay
> **Lưu ý:** LOANMATCH không phải là website cho vay và không xử lý hồ sơ vay thực tế. Website chỉ phục vụ mục đích tra cứu thông tin, tìm kiếm, lọc, so sánh, mô phỏng khoản vay và đăng ký tư vấn.
>
> Các sản phẩm khoản vay trên website là **dữ liệu giả lập**, được xây dựng nhằm phục vụ mục đích học tập và trình diễn chức năng.
---
## 2. Vấn đề cần giải quyết
Hiện nay, khi muốn tìm hiểu về một khoản vay, người dùng thường phải truy cập nhiều website khác nhau.
Thông tin về:
- Hạn mức vay
- Lãi suất
- Thời hạn vay
- Điều kiện vay
- Phương thức trả
có thể được trình bày theo nhiều cách khác nhau.
Điều này khiến người dùng mất nhiều thời gian và khó đặt các sản phẩm vay cạnh nhau để so sánh.
**LOANMATCH** giải quyết vấn đề này bằng cách tập trung và chuẩn hóa thông tin khoản vay trên một giao diện thống nhất, giúp người dùng tìm kiếm, lọc và so sánh khoản vay dễ dàng hơn.
---
## 3. Đối tượng người dùng
LOANMATCH hướng đến các nhóm người dùng:
### Sinh viên năm cuối
- Có nhu cầu tìm hiểu về các khoản vay.
- Chưa có nhiều kinh nghiệm trong việc lựa chọn khoản vay.
- Quan tâm đến lãi suất, hạn mức và thời hạn vay.
### Người trẻ mới đi làm
- Có nhu cầu tìm hiểu các sản phẩm vay tiêu dùng.
- Quan tâm đến điều kiện vay và khả năng trả hàng tháng.
- Muốn tìm hiểu nhiều lựa chọn trước khi đưa ra quyết định.
### Người dùng có nhu cầu tham khảo khoản vay
- Muốn tìm kiếm và lọc khoản vay theo nhu cầu.
- Muốn so sánh nhiều sản phẩm trên cùng một giao diện.
- Muốn mô phỏng khoản trả hàng tháng trước khi tham khảo.
---
## 4. Mục tiêu dự án
Dự án LOANMATCH được xây dựng với các mục tiêu:
1. Xây dựng website có giao diện trực quan, thống nhất và dễ sử dụng.
2. Hỗ trợ người dùng tìm kiếm khoản vay theo nhu cầu.
3. Cho phép người dùng lọc và sắp xếp các khoản vay.
4. Cho phép người dùng so sánh nhiều khoản vay trên cùng một giao diện.
5. Xây dựng công cụ mô phỏng khoản trả hàng tháng.
6. Xây dựng biểu mẫu đăng ký tư vấn.
7. Áp dụng JavaScript/jQuery để tạo các chức năng tương tác.
8. Áp dụng Bootstrap để xây dựng giao diện Responsive trên máy tính, máy tính bảng và điện thoại.
---
## 5. Các chức năng chính
### 5.1. Trang chủ
Trang chủ giới thiệu tổng quan về LOANMATCH, bao gồm:
- Banner giới thiệu.
- Thanh điều hướng.
- Các mục đích vay phổ biến.
- Các khoản vay nổi bật.
- Ô nhập nhanh số tiền cần vay.
- Điều hướng nhanh đến danh mục khoản vay.
### 5.2. Trang danh mục khoản vay
Hiển thị danh sách các khoản vay và hỗ trợ người dùng:
- Tìm kiếm khoản vay.
- Lọc theo mục đích.
- Lọc theo số tiền.
- Lọc theo thời hạn.
- Lọc theo lãi suất.
- Sắp xếp khoản vay.
- Xem chi tiết khoản vay.
- Thêm khoản vay vào danh sách so sánh.
### 5.3. Trang chi tiết khoản vay
Hiển thị thông tin chi tiết của từng khoản vay:
- Tên khoản vay.
- Loại khoản vay.
- Lãi suất.
- Hạn mức tối thiểu/tối đa.
- Thời hạn tối thiểu/tối đa.
- Phương thức trả.
- Đối tượng phù hợp.
- Mô tả khoản vay.
- Câu hỏi thường gặp (FAQ).
### 5.4. Trang so sánh khoản vay
Cho phép người dùng lựa chọn nhiều khoản vay và đặt chúng cạnh nhau để so sánh.
Các tiêu chí so sánh gồm:
| Tiêu chí | Nội dung |
|---|---|
| Lãi suất | So sánh mức lãi suất |
| Hạn mức | So sánh số tiền vay tối thiểu/tối đa |
| Thời hạn | So sánh thời gian vay |
| Phương thức trả | So sánh cách thức trả |
| Đối tượng phù hợp | Xác định nhóm người dùng phù hợp |
### 5.5. Công cụ tính khoản vay
Người dùng nhập:
- Số tiền vay.
- Thời hạn vay.
- Lãi suất mô phỏng.
Hệ thống sử dụng JavaScript để tính toán và hiển thị **khoản trả dự kiến hàng tháng**.
> Kết quả tính toán chỉ mang tính chất tham khảo và không đại diện cho khoản vay thực tế.
### 5.6. Trang đăng ký tư vấn
Người dùng có thể gửi yêu cầu tư vấn thông qua biểu mẫu gồm:
- Họ tên.
- Email.
- Số điện thoại.
- Khoản vay quan tâm.
- Số tiền dự kiến.
- Nội dung yêu cầu.
JavaScript/jQuery được sử dụng để:
- Kiểm tra dữ liệu nhập vào.
- Kiểm tra các trường bắt buộc.
- Hiển thị thông báo kết quả.
---
## 6. Dữ liệu khoản vay
Website sử dụng khoảng **10–15 khoản vay giả lập** để phục vụ xây dựng và kiểm thử các chức năng.
Mỗi khoản vay bao gồm các thông tin:
- ID
- Tên khoản vay
- Loại khoản vay
- Lãi suất
- Hạn mức tối thiểu
- Hạn mức tối đa
- Thời hạn tối thiểu
- Thời hạn tối đa
- Phương thức trả
- Đối tượng phù hợp
- Mô tả
---
## 7. Công nghệ sử dụng-
| Công nghệ | Mục đích |
|---|---|
| HTML5 | Xây dựng cấu trúc website |
| CSS3 | Thiết kế giao diện |
| Bootstrap | Xây dựng giao diện Responsive |
| JavaScript | Xử lý logic và tương tác |
| jQuery | Hỗ trợ DOM và xử lý sự kiện |
| Git | Quản lý phiên bản |
| GitHub | Lưu trữ và quản lý mã nguồn |

---
## 8. Thiết kế Responsive
Website được thiết kế để hoạt động trên:
- Máy tính.
- Máy tính bảng.
- Điện thoại.
Các thành phần cần đảm bảo Responsive:
- Thanh điều hướng.
- Banner.
- Loan Card.
- Bộ lọc.
- Bảng so sánh.
- Công cụ tính khoản vay.
- Form đăng ký tư vấn.
---
## 9. Cấu trúc dự án
```text
LOANMATCH/
│
├── index.html
│
├── pages/
│   ├── loans.html
│   ├── loan-detail.html
│   ├── compare.html
│   ├── calculator.html
│   └── consultation.html
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── js/
│   ├── data.js
│   ├── loans.js
│   ├── compare.js
│   ├── calculator.js
│   └── validation.js
│
├── images/
│
└── README.md
