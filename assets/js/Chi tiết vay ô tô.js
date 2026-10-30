// Dữ liệu so sánh các ngân hàng cho Vay mua ô tô 
const carComparisonData = {
  "auto-loan": {
    category: "Ô TÔ",
    name: "Vay mua ô tô",
    description: "Giải pháp tài chính hỗ trợ mua xe ô tô mới và cũ với lãi suất ưu đãi, thời hạn vay linh hoạt từ các ngân hàng hàng đầu.",
    banks: [
      {
        name: "MB",
        condition: "• Khách hàng từ 18 đến 65 tuổi có nguồn thu nhập ổn định.<br>• Có đủ năng lực hành vi dân sự.<br>• Không có nợ xấu tại thời điểm vay vốn.",
        maxAmount: "Cấp vốn tối đa lên tới 80% - 100% giá trị xe.",
        maxTerm: "Thời gian trả góp lên tới 8 năm (96 tháng).",
        documents: "• Đơn đề nghị vay vốn kiêm cam kết trả nợ (mẫu MB).<br>• Hồ sơ pháp lý: CCCD gắn chip, xác nhận tình trạng hôn nhân.<br>• Hồ sơ thu nhập: HĐLĐ, sao kê lương, nguồn thu kinh doanh.<br>• Hồ sơ xe: Hợp đồng mua bán, phiếu cọc, báo giá xe.",
        process: "Chuẩn bị hồ sơ ➔ Nộp hồ sơ & Định giá ➔ Thẩm định phê duyệt ➔ Ký hợp đồng ➔ Giải ngân",
        repayment: "• Gốc trả hàng tháng/quý<br>• Lãi trả hàng tháng theo dư nợ giảm dần",
        fees: "• Lãi suất ưu đãi từ 5,9% - 7,9%/năm<br>• Phí trả trước hạn: 1% - 3%"
      },
      {
        name: "Vietcombank",
        condition: "• Khách hàng từ 18 đến 60-65 tuổi.<br>• Lịch sử tín dụng tốt, không có nợ xấu.",
        maxAmount: "70% (thế chấp xe) hoặc 100% (thế chấp BĐS).",
        maxTerm: "Thời gian trả góp lên tới 7 năm (84 tháng).",
        documents: "• Đơn đề nghị vay vốn Vietcombank.<br>• CCCD/Hộ chiếu, xác nhận tình trạng hôn nhân.<br>• HĐLĐ, sao kê lương 3-6 tháng.<br>• Hợp đồng mua xe, phiếu thu cọc, báo giá xe.",
        process: "Tư vấn ➔ Thu thập hồ sơ ➔ Thẩm định & Định giá ➔ Phê duyệt ➔ Giải ngân",
        repayment: "• Gốc trả hàng tháng/quý<br>• Lãi trả hàng tháng theo dư nợ giảm dần",
        fees: "• Lãi suất ưu đãi từ 5,5% - 6,7%/năm cố định thời gian đầu"
      },
      {
        name: "VietinBank",
        condition: "• Khách hàng từ 18 đến 65 tuổi.<br>• Có tài sản bảo đảm và khả năng tài chính rõ ràng.",
        maxAmount: "Cấp vốn tối đa lên tới 80% giá trị xe.",
        maxTerm: "Thời gian trả góp lên tới 8 năm (96 tháng).",
        documents: "• Giấy đề nghị vay vốn (mẫu VietinBank).<br>• CCCD gắn chip, xác nhận cư trú.<br>• Bảng lương/sao kê 3 tháng gần nhất.<br>• Hợp đồng mua bán ô tô, thông báo lệ phí trước bạ.",
        process: "Tiếp nhận thông tin ➔ Thu thập hồ sơ ➔ Thẩm định & Định giá ➔ Phê duyệt ➔ Giải ngân",
        repayment: "• Gốc trả hàng tháng/quý<br>• Lãi trả hàng tháng theo dư nợ thực tế giảm dần",
        fees: "• Lãi suất ưu đãi từ 5,6% - 6,8%/năm cố định 12 tháng<br>• Lãi sau ưu đãi = Lãi tiết kiệm 12T + Biên độ ~3,5%/năm"
      },
      {
        name: "BIDV",
        condition: "• Cá nhân từ 18 tuổi đến không quá 65 tuổi.<br>• Có thu nhập ổn định đảm bảo khả năng trả nợ.",
        maxAmount: "Cấp vốn tối đa lên tới 85% giá trị xe.",
        maxTerm: "Thời gian trả góp lên tới 7 năm (84 tháng).",
        documents: "• Giấy đề nghị vay vốn theo mẫu BIDV.<br>• CCCD, xác nhận cư trú, giấy kết hôn.<br>• HĐLĐ, sao kê tài khoản ngân hàng.<br>• Hợp đồng mua bán xe ô tô, chứng từ đặt cọc.",
        process: "Nộp hồ sơ ➔ Thẩm định CIC ➔ Phê duyệt ➔ Giải ngân trực tiếp cho đại lý",
        repayment: "• Gốc và lãi trả hàng tháng theo dư nợ giảm dần<br>• Chủ động lựa chọn ngày thanh toán định kỳ",
        fees: "• Lãi suất ưu đãi từ 5,5% - 6,5%/năm<br>• Phí phạt trả trước hạn: 0,5% - 2%"
      }
    ]
  }
};

// Đổ dữ liệu ra bảng HTML
document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("comparisonBody");
  const detailCategory = document.getElementById("detailCategory");
  const detailName = document.getElementById("detailName");
  const detailDescription = document.getElementById("detailDescription");

  // Lấy id từ URL (ví dụ: auto-loan)
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id") || "auto-loan";

  // Lấy dữ liệu sản phẩm tương ứng
  const productData = carComparisonData[productId] || carComparisonData["auto-loan"];

  if (productData) {
    if (detailCategory) detailCategory.textContent = productData.category;
    if (detailName) detailName.textContent = productData.name;
    if (detailDescription) detailDescription.textContent = productData.description;

    if (tableBody && productData.banks) {
      tableBody.innerHTML = productData.banks.map(bank => `
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 12px; font-weight: bold; color: #1a365d;">${bank.name}</td>
          <td style="padding: 12px; font-size: 13px;">${bank.condition}</td>
          <td style="padding: 12px; font-size: 13px;">${bank.maxAmount}</td>
          <td style="padding: 12px; font-size: 13px;">${bank.maxTerm}</td>
          <td style="padding: 12px; font-size: 13px;">${bank.documents}</td>
          <td style="padding: 12px; font-size: 13px;">${bank.process}</td>
          <td style="padding: 12px; font-size: 13px;">${bank.repayment}</td>
          <td style="padding: 12px; font-size: 13px;">${bank.fees}</td>
          <td style="padding: 12px; text-align: center;">
            <a href="../../Liên hệ.html?bank=${encodeURIComponent(bank.name)}&product=${encodeURIComponent(productData.name)}"
   style="background-color: #173d7a; color: #fff; padding: 10px 14px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600; display: inline-block; white-space: nowrap;">
    Đăng ký tư vấn
</a>
          </td>
        </tr>
      `).join("");
    }
  }
});