
const body = document.getElementById("comparisonBody");
const detailName = document.getElementById("detailName");
const detailDescription = document.getElementById("detailDescription");
const detailCategory = document.getElementById("detailCategory");

const comparisonData = {
"real-estate-young-home":
{
  category: "BĐS",
  name: "Vay mua nhà",
  description: "Bạn đã làm việc rất chăm chỉ trong 05 năm qua và bạn cần thêm 05 năm nữa để biến giấc mơ về một ngôi nhà trở thành sự thật?",
  banks: [
    {
      name: "MB",
      condition: `
        • Khách hàng từ 23 đến 40 tuổi tại thời điểm vay vốn và không quá 75 tuổi khi kết thúc khoản vay.<br>
        • Khách hàng có đủ năng lực pháp luật dân sự và năng lực hành vi dân sự.<br>
        • Khách hàng có khả năng tài chính đảm bảo nguồn trả nợ cho khoản vay.<br>
        • Khách hàng đáp ứng các quy định và điều kiện cho vay của MB từng thời kỳ.
      `,
      maxAmount: "Cấp vốn tối đa lên tới 10 tỷ đồng; mức cho vay lên đến 80% giá trị tài sản bảo đảm.",
      maxTerm: "Thời gian trả góp lên tới 35 năm.",
      documents: `
        • Đơn đề nghị vay vốn kiêm cam kết trả nợ theo mẫu của MB.<br>
        • Hồ sơ pháp lý: CCCD/Hộ chiếu, hồ sơ thông tin cư trú, đăng ký kết hôn/giấy xác nhận tình trạng hôn nhân.<br>
        • Hồ sơ chứng minh mục đích: Hợp đồng mua bán, quyết định trúng đấu giá,...<br>
        • Hồ sơ thu nhập: Hợp đồng lao động, sao kê lương, hợp đồng cho thuê tài sản, đăng ký kinh doanh,...<br>
        • Hồ sơ tài sản bảo đảm: Giấy chứng nhận sở hữu tài sản.
      `,
        process:"Chuẩn bị hồ sơ → Nộp hồ sơ → Thẩm định → Phê duyệt → Ký hồ sơ → Giải ngân.",
        repayment: `
    • 5 năm đầu: không phải trả nợ gốc.<br>
    • 10 năm tiếp theo: chỉ trả 15% nợ gốc.<br>
    • Gốc và lãi có thể trả theo tháng, quý, bán niên hoặc năm.
  `,
        fees:`
    • Lãi suất cho vay mua nhà ưu đãi, cạnh tranh.<br>
    • Thủ tục đơn giản, phê duyệt nhanh chóng.<br>
    • Phê duyệt tự động.
  `,
      },
      {
        name: "Vietcombank",
        condition: `
    • Công dân Việt Nam từ 18 tuổi đến không quá 75 tuổi tại thời điểm kết thúc khoản vay.<br>
    • Có thu nhập ổn định, đủ khả năng trả nợ.<br>
    • Có tài sản bảo đảm là bất động sản hoặc giấy tờ có giá.
  `,
        maxAmount: "Tối đa 100% giá trị Hợp đồng mua bán/Hợp đồng chuyển nhượng nhà.",
        maxTerm: "Thời hạn vay tối đa 30 năm",
        documents: `
    • CMND/CCCD/Hộ chiếu.<br>
    • Thông tin cư trú của khách hàng.<br>
    • Giấy đăng ký kết hôn/Chứng nhận độc thân.<br>
    • Giấy khai sinh/Giấy xác nhận quan hệ thân nhân trong trường hợp vay để mua nhà cho bố mẹ/con.<br>
    • Hồ sơ nhân thân của bên bảo đảm: CMND/CCCD/Hộ chiếu, thông tin cư trú, giấy đăng ký kết hôn/chứng nhận độc thân.<br>
    • Giấy khai sinh/Giấy xác nhận quan hệ thân nhân của cơ quan có thẩm quyền về mối quan hệ giữa khách hàng vay và bên bảo đảm.
  `,
        process:"Chuẩn bị hồ sơ → Nộp hồ sơ → Thẩm định → Phê duyệt → Ký hồ sơ → Giải ngân.",
        repayment: `
    • Tiền gốc: Trả hàng tháng hoặc hàng quý.<br>
    • Lãi vay: Trả hàng tháng theo dư nợ giảm dần.
  `,
        fees: "Phương án sử dụng vốn: Theo mẫu biểu/biểu mẫu của Vietcombank."
      },
      {
        name: "VietinBank",
        condition: "Khách hàng có vốn tự tham gia thực hiện phương án và có mục đích vay phục vụ nhu cầu đời sống.",
        maxAmount: "Theo phương án vay và giá trị tài sản bảo đảm.",
        maxTerm: "Hỗ trợ với thời hạn lên tới 35 năm.",
        documents:
        `
        • CCCD.<br>
        • Hồ sơ chứng minh thu nhập.<br>
        • Hồ sơ chứng minh mục đích sử dụng vốn.<br>
        • Hợp đồng mua bán.<br>
        • Giấy tờ nhà/đất.<br>
        • Hồ sơ tài sản bảo đảm.<br>
        `,
        process: "Chuẩn bị hồ sơ → Nộp hồ sơ → Thẩm định → Phê duyệt → Ký hồ sơ → Giải ngân.",
        repayment: "Theo lịch trả nợ trên hợp đồng; gốc/lãi tuỳ phương thức khoản vay.",
        fees: "Theo biểu phí Vietinbank và thoả thuận trong hợp đồng."    
      },
      {
        name: "BIDV",
        condition:
        `
    • Cá nhân có quốc tịch Việt Nam hoặc đối tượng đủ điều kiện theo quy định BIDV. <br>
    • Có khả năng trả nợ. <br>
    • Sinh sống/làm việc tại địa bàn phù hợp. <br>
    • Có tài sản bảo đảm theo quy định.`,
        maxAmount: "Cho vay tối đa 100% nhu cầu vốn.",
        maxTerm: "Đã có chứng nhận tối đa 30 năm.",
        documents:
        `
    • Đơn đề nghị vay vốn.<br>
    • CCCD/hộ chiếu.<br>
    • Hồ sơ cư trú, tình trạng hôn nhân.<br>
    • Chứng minh nguồn trả nợ.<br>
    • Hợp đồng mua bán nhà.<br>
    • Hồ sơ tài sản bảo đảm.<br>
`,
        process: "Chuẩn bị hồ sơ → Nộp hồ sơ → Thẩm định → Phê duyệt → Ký hồ sơ → Giải ngân.",
        repayment: "Theo lịch trả nợ trên hợp đồng. Có thể lựa chọn kỳ trả nợ phù hợp.",
        fees: "Phí trả nợ trước hạn tùy chính sách từng thời kỳ."
      }
    ]
  },
  
    "real-estate-land": {
    category: "BĐS",
    name: "Vay mua đất",
    description: "Sau nhiều năm đầu tư và tích lũy, việc lựa chọn một không gian sống phù hợp chính là cách để tận hưởng trọn vẹn thành quả và cân bằng nhịp sống mỗi ngày.",
    banks: [
      {
        name: "MB",
        condition:
        `
        • Khách hàng từ đủ 19 tuổi trở lên đến 70 tuổi tại thời điểm vay vốn và không quá 75 tuổi khi kết thúc khoản vay. <br>
        • Khách hàng có đủ năng lực pháp luật dân sự và năng lực hành vi dân sự. <br>
        • Khách hàng có khả năng tài chính đảm bảo nguồn trả nợ cho khoản vay. <br>
        • Khách hàng đáp ứng các quy định và điều kiện cho vay của MB từng thời kỳ.
        `,
        maxAmount: "Theo quy định từng thời kỳ.",
        maxTerm: "Thời gian vay đến 35 năm",
        documents: `
        • Đơn đề nghị vay vốn kiêm cam kết trả nợ theo mẫu của MB.<br>
        • Hồ sơ pháp lý: CCCD/Hộ chiếu, hồ sơ thông tin cư trú, đăng ký kết hôn/giấy xác nhận tình trạng hôn nhân.<br>
        • Hồ sơ chứng minh mục đích: Hợp đồng mua bán, quyết định trúng đấu giá,...<br>
        • Hồ sơ thu nhập: Hợp đồng lao động, sao kê lương, hợp đồng cho thuê tài sản, đăng ký kinh doanh,...<br>
        • Hồ sơ tài sản bảo đảm: Giấy chứng nhận sở hữu tài sản.
      `,
        process:"Chuẩn bị hồ sơ → Nộp hồ sơ → Thẩm định → Phê duyệt → Ký hồ sơ → Giải ngân.",
        repayment: "Ân hạn nợ gốc đến 5 năm",
        fees: "Lãi suất ưu đại theo quy định từng thời kỳ."
      },
      {
        name: "Vietcombank",
        condition: 
        `
    • Công dân Việt Nam từ 18 tuổi đến không quá 75 tuổi tại thời điểm kết thúc khoản vay.<br>
    • Có thu nhập ổn định, đủ khả năng trả nợ.<br>
    • Có tài sản bảo đảm là bất động sản hoặc giấy tờ có giá.
  `,
        maxAmount: "Tối đa 100% giá trị Hợp đồng mua bán/Hợp đồng chuyển nhượng đất.",
        maxTerm: "Thời hạn vay tối đa 30 năm.",
        documents: `
    • CMND/CCCD/Hộ chiếu.<br>
    • Thông tin cư trú của khách hàng.<br>
    • Giấy đăng ký kết hôn/Chứng nhận độc thân.<br>
    • Giấy khai sinh/Giấy xác nhận quan hệ thân nhân trong trường hợp vay để mua nhà cho bố mẹ/con.<br>
    • Hồ sơ nhân thân của bên bảo đảm: CMND/CCCD/Hộ chiếu, thông tin cư trú, giấy đăng ký kết hôn/chứng nhận độc thân.<br>
    • Giấy khai sinh/Giấy xác nhận quan hệ thân nhân của cơ quan có thẩm quyền về mối quan hệ giữa khách hàng vay và bên bảo đảm.
  `,
        process:"Chuẩn bị hồ sơ → Nộp hồ sơ → Thẩm định → Phê duyệt → Ký hồ sơ → Giải ngân.",
        repayment: `
    • Tiền gốc: Trả hàng tháng hoặc hàng quý;<br>
    • Lãi vay: Trả hàng tháng theo dư nợ giảm dần.
  `,
        fees: "Phương án sử dụng vốn: Theo mẫu biểu/biểu mẫu của Vietcombank."
      },
       {
        name: "VietinBank",
        condition:
        `
        • Có vốn tự tham gia thực hiện phương án.
        • Có phương án sử dụng vốn hợp pháp.
        • Đủ khả năng trả nợ.
        • Có tài sản bảo đảm theo quy định.`,
        maxAmount: "Theo phương án vay và giá trị tài sản bảo đảm",
        maxTerm: "Hỗ trợ với thời hạn lên tới 35 năm",
        documents:
        `
        • CCCD.
        • Hồ sơ chứng minh thu nhập.
        • Hồ sơ chứng minh mục đích sử dụng vốn.
        • Hợp đồng mua bán.
        • Giấy tờ nhà/đất.
        • Hồ sơ tài sản bảo đảm.
        `,
        process: "Chuẩn bị hồ sơ → Nộp hồ sơ → Thẩm định → Phê duyệt → Ký hồ sơ → Giải ngân.",
        repayment: "Theo lịch trả nợ trên hợp đồng.",
        fees: "Theo biểu phí Vietinbank và thoả thuận trong hợp đồng."    
      },
       {
        name: "BIDV",
        condition:
        `
    • Cá nhân có quốc tịch Việt Nam hoặc đối tượng đủ điều kiện theo quy định BIDV. <br>
    • Có khả năng trả nợ.<br>
    • Sinh sống/làm việc tại địa bàn phù hợp.<br>
    • Có tài sản bảo đảm theo quy định.`,
        maxAmount: "Cho vay tối đa 100% nhu cầu vốn",
        maxTerm: "Đã có chứng nhận tối đa 30 năm",
        documents:
        `
    • Đơn đề nghị vay vốn.
    • CCCD/hộ chiếu.
    • Hồ sơ cư trú, tình trạng hôn nhân.
    • Chứng minh nguồn trả nợ.
    • Hợp đồng mua bán nhà.
    • Hồ sơ tài sản bảo đảm.
`,
        process: "Chuẩn bị hồ sơ → Nộp hồ sơ → Thẩm định → Phê duyệt → Ký hồ sơ → Giải ngân.",
        repayment: "Theo lịch trả nợ trên hợp đồng. Có thể lựa chọn kỳ trả nợ phù hợp.",
        fees: "Phí trả nợ trước hạn tùy chính sách từng thời kỳ."
      }
    ]
  },

  "real-estate-construction": {
    category: "BĐS",
    name: "Vay xây dựng, sửa chữa nhà",
    description: "Hỗ trợ nguồn vốn xây mới, sửa chữa và cải tạo nhà ở, căn hộ, biệt thự, nhà phố, chung cư.",
    banks: [
      {
        name: "MB",
        condition: `
      • Khách hàng có nhu cầu xay dựng, sửa chữa nhà ở. <br>
      • Khách hàng có khả năng trả nợ. <br>
      • Khách hàng có khả năng tài chính đảm bảo theo yêu cầu. <br>
      • Khách hàng có mục đích sử dụng vốn hợp pháp.
        `,
        maxAmount: "Theo phương án/sửa và giá trị tài sản bảo đảm. Hỗ trợ lên tới 90% nhu cầu vốn",
        maxTerm: "Thời gian vay đến 10 năm",
        documents: `
     • CCCD. <br>
     • Hồ sơ chứng minh thu nhập. <br>
     • Giấy tờ chứng minh quyền sở hữu/quyền sử dụng nhà đất.<br>
     • Phương án/dự toán xây dựng, sửa chữa. <br>
     • Hợp đồng với nhà thầu/đơn vị thi công nếu có. <br>
     • Hồ sơ tài sản bảo đảm.
     `,
     process: "Chuẩn bị hồ sơ → Nộp hồ sơ → Thẩm định → Phê duyệt → Ký hồ sơ → Giải ngân.",
        repayment: "Trả gốc và lãi định kỳ. Có thể trả trước hạn theo điều kiện hợp đồng.",
        fees: "Phí trả nợ trước hạn. Phí thẩm định hoặc đăng ký tài sản và chi phí công chứng nếu phát sinh.",

      },
      {
        name: "Vietcombank",
        condition: `
      • Công dân Việt Nam từ 18 tuổi đến không quá 75 tuổi tại thời điểm kết thúc khoản vay. <br>
      • Có tài sản bảo đảm là bất động sản, giấy tờ có giá.
        `,
        maxAmount: "100% giá trị xây sửa nhà",
        maxTerm: "Thời hạn vay tối đa 30 năm",
        documents:`
     • Hồ sơ chứng minh nguồn trả nợ: Hợp đồng lao động, bảng lương, sao kê tài khoản ngân hàng, v.v. <br>
     • Hồ sơ chứng minh mục đích vay vốn: Hợp đồng xây dựng/sửa chữa giữa khách hàng và chủ thầu/đơn vị thi công, hóa đơn xây sửa nhà, v.v.`,
        process: "Chuẩn bị hồ sơ → Nộp hồ sơ → Thẩm định → Phê duyệt → Ký hồ sơ → Giải ngân.",
        repayment: `
     • Tiền gốc vay: Trả hàng tháng hoặc hàng quý. <br>
     • Lãi vay: Trả hàng tháng theo dư nợ giảm dần.
     `,
        fees: "Theo biểu phí của Vietcombank."
      },
 {
        name: "VietinBank",
        condition:
        `
        • Có vốn tự tham gia thực hiện phương án. <br>
        • Có phương án sử dụng vốn hợp pháp. <br>
        • Đủ khả năng trả nợ. <br>
        • Có tài sản bảo đảm theo quy định.`,
        maxAmount: "Theo phương án xây, sửa nhà và tài sản đảm bảo",
        maxTerm: "Hỗ trợ với thời hạn lên tới 35 năm",
        documents:
        `
        • CCCD.
        • Hồ sơ chứng minh thu nhập.
        • Hồ sơ chứng minh mục đích sử dụng vốn.
        • Hợp đồng mua bán.
        • Giấy tờ nhà/đất.
        • Hồ sơ tài sản bảo đảm.
        `,
        process: "Chuẩn bị hồ sơ → Nộp hồ sơ → Thẩm định → Phê duyệt → Ký hồ sơ → Giải ngân.",
        repayment: "Theo lịch trả nợ trên hợp đồng.",
        fees: "Theo biểu phí Vietinbank và thoả thuận trong hợp đồng."    
      },
      {
        name: "BIDV",
        condition: "Có nhu cầu xây dựng, sửa chữa nhà ở, có nguồn trả nợ và đáp ứng điều kiện tín dụng của BIDV.",
        maxAmount: "Hỗ trợ lên tới 100% nhu cầu vốn xây dựng, sửa chữa nhà ở.",
        maxTerm: "Tối đa 20 năm",
        documents: 
        `
        • CCCD <br>
        • Hồ sơ cư trú/hôn nhân. <br>
        • Chứng minh thu nhập. <br>
        • Giấy tờ nhà đất. <br>
        • Giấy phép xây dựng nếu thuộc trường hợp phải có. <br>
        • Phương án/dự toán xây dựng hoặc cải tạo. <br>
        • Hồ sơ tài sản bảo đảm.
        `,
        process: "Chuẩn bị hồ sơ → Nộp hồ sơ → Thẩm định → Phê duyệt → Ký hồ sơ → Giải ngân.",
        repayment: "Trả gốc và lãi theo lịch; có thể trả trước hạn theo điều kiện hợp đồng.",
        fees: "Phí trả trước hạn tùy chính sách từng thời kỳ + chi phí liên quan đến tài sản."
      }
    ]
  },
};

async function init() {
  const id = new URLSearchParams(location.search).get("id") || "real-estate-young-home";
  const data = comparisonData[id] || comparisonData["real-estate-young-home"];

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

      <td>
        <a
          class="consult-btn"
          href="consultation.html?bank=${encodeURIComponent(bank.name)}&product=${encodeURIComponent(data.name)}"
        >
          Đăng ký tư vấn
        </a>
      </td>
    </tr>
  `).join("");
}

init();
