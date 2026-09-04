
const body = document.getElementById("comparisonBody");
const detailName = document.getElementById("detailName");
const detailDescription = document.getElementById("detailDescription");
const detailCategory = document.getElementById("detailCategory");

const comparisonData = {
  "consumer-unsecured": {
    category: "TIÊU DÙNG",
    name: "Vay tiêu dùng tín chấp",
    description: "Gói vay cho mục đích tiêu dùng không cần tài sản bảo đảm.",
    banks: [
      {
        name:"MB",
        condition:"Khách hàng đáp ứng điều kiện tín dụng của ngân hàng.",
        maxAmount:"Theo quy định từng thời kỳ",
        maxTerm:"Theo sản phẩm",
        documents:"CCCD và hồ sơ chứng minh thông tin/thu nhập theo yêu cầu.",
        process:"Đăng ký → thẩm định → phê duyệt → ký hồ sơ → giải ngân.",
        repayment:"Theo lịch trả nợ trên hợp đồng.",
        fees:"Theo biểu phí hiện hành."
      },
      {
        name:"Vietcombank",
        condition:"Khách hàng đáp ứng điều kiện vay và khả năng trả nợ.",
        maxAmount:"Theo quy định từng thời kỳ",
        maxTerm:"Theo sản phẩm",
        documents:"CCCD và hồ sơ theo yêu cầu của ngân hàng.",
        process:"Tiếp nhận hồ sơ → thẩm định → phê duyệt → giải ngân.",
        repayment:"Theo lịch trả nợ trên hợp đồng.",
        fees:"Theo biểu phí hiện hành."
      },
      {
        name:"VietinBank",
        condition:"Đáp ứng điều kiện khách hàng và điều kiện tín dụng.",
        maxAmount:"Theo quy định từng thời kỳ",
        maxTerm:"Theo sản phẩm",
        documents:"Giấy tờ tùy thân và các giấy tờ chứng minh theo yêu cầu.",
        process:"Đăng ký → kiểm tra hồ sơ → thẩm định → phê duyệt → giải ngân.",
        repayment:"Theo lịch trả nợ trên hợp đồng.",
        fees:"Theo biểu phí hiện hành."
      },
      {
        name:"BIDV",
        condition:"Đáp ứng điều kiện vay, thu nhập và khả năng trả nợ.",
        maxAmount:"Theo quy định từng thời kỳ",
        maxTerm:"Theo sản phẩm",
        documents:"CCCD, giấy tờ chứng minh thu nhập và hồ sơ liên quan.",
        process:"Nộp hồ sơ → thẩm định → phê duyệt → ký kết → giải ngân.",
        repayment:"Theo lịch trả nợ trên hợp đồng.",
        fees:"Theo biểu phí hiện hành."
      }
    ]
  }
};

async function init() {
  const id = new URLSearchParams(location.search).get("id") || "consumer-unsecured";
  const data = comparisonData[id] || comparisonData["consumer-unsecured"];

  detailCategory.textContent = data.category;
  detailName.textContent = data.name;
  detailDescription.textContent = data.description;

  body.innerHTML = data.banks.map(bank => `
    <tr>
      <td class="bank-cell">${bank.name}</td>
      <td>${bank.condition}</td>
      <td>${bank.maxAmount}</td>
      <td>${bank.maxTerm}</td>
      <td>${bank.documents}</td>
      <td>${bank.process}</td>
      <td>${bank.repayment}</td>
      <td>${bank.fees}</td>
    </tr>
  `).join("");
}

init();
