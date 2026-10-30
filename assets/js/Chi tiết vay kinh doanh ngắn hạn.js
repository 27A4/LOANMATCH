
const body = document.getElementById("comparisonBody");
const detail1Name = document.getElementById("detail1Name");
const detail1Description = document.getElementById("detail1Description");
const detail1Category = document.getElementById("detail1Category");

const comparisonData = {
  "consumer-unsecured": {
    category: "SẢN XUẤT KINH DOANH ",
    name: "Vay sản xuất kinh doanh ngắn hạn",
    description: "Bổ sung vốn phục vụ hoạt động sản xuất, kinh doanh trong ngắn hạn",
    banks: [    
      {
        name:"MB",
        condition:"Khách hàng cá nhân, hộ kinh doanh có đăng ký kinh doanh hợp pháp/ Doanh nghiệp đang hoạt động sản xuất kinh doanh ổn định, liên tục tại Việt Nam. ",
        maxAmount:"- Đối với cá nhân/hộ kinh doanh trên App MBBank: Từ 50.000.000 VNĐ đến 3.000.000.000 VNĐ (hoặc lên đến 90% nhu cầu vốn tùy phương án). - Đối với doanh nghiệp/SME: Lên đến hàng tỷ đồng tùy theo quy mô và tài sản bảo đảm (có thể cấp hạn mức tự động trên BIZMBBank). ",
        maxTerm:" Tối đa đến 12 tháng. ",
        documents:"- Hồ sơ pháp lý:• Đối với cá nhân/Hộ kinh doanh: CCCD/Hộ chiếu còn hiệu lực, Giấy đăng ký kết hôn hoặc Giấy xác nhận độc thân, Giấy chứng nhận đăng ký hộ kinh doanh (nếu có). • Đối với Doanh nghiệp: Giấy chứng nhận đăng ký doanh nghiệp, Điều lệ công ty, Quyết định bổ nhiệm Giám đốc/Kế toán trưởng. - Hồ sơ tài chính & Mục đích vay:• Phương án sản xuất kinh doanh, kế hoạch sử dụng vốn vay ngắn hạn. • Báo cáo tài chính (đối với doanh nghiệp), sổ sách theo dõi doanh thu/chi phí, tờ khai thuế VAT, hóa đơn đầu vào/đầu ra hoặc biên lai bán hàng (đối với hộ kinh doanh). • Hợp đồng kinh tế, đơn đặt hàng cần thanh toán bằng nguồn vốn vay. - Hồ sơ tài sản bảo đảm (TSBĐ):• Giấy chứng nhận quyền sử dụng đất, quyền sở hữu nhà ở (Sổ đỏ/Sổ hồng).• Giấy đăng ký xe ô tô, giấy tờ có giá (sổ tiết kiệm, chứng chỉ tiền gửi) nếu thế chấp bằng các tài sản này.",
        process:" Tiếp nhận nhu cầu -> Khảo sát & Thẩm định -> Phê duyệt & Ký hợp đồng -> Giải ngân.",
        repayment:"- Trả lãi: Cố định hàng tháng (vào ngày thỏa thuận, ví dụ ngày 25) tính trên dư nợ thực tế. -Trả gốc: Linh hoạt cuối kỳ (khi đáo hạn khoản vay < 12 tháng) hoặc định kỳ (theo tháng/quý). ",
        fees:"- Phí định giá tài sản & công chứng: Theo biểu phí cơ quan chức năng và đơn vị định giá. - Phí trả trước hạn: Từ 0,5% - 2% trên số tiền gốc trả sớm (một số gói ngắn hạn được miễn phí). - Phí phạt quá hạn: Bằng 150% lãi suất trong hạn tính trên phần nợ gốc bị chậm trả. ",
        register:"Đăng ký tư vấn"
      },
      {
        name:"Vietcombank",
        condition:"Cá nhân, hộ kinh doanh, doanh nghiệp hoạt động hợp pháp; đáp ứng điều kiện tín dụng của ngân hàng. ",
        maxAmount:" Tối đa lên đến 85% - 100% nhu cầu vốn của phương án kinh doanh (tùy thuộc vào quy mô và giá trị tài sản bảo đảm). Hạn mức thông thường cho gói cá nhân/hộ kinh doanh có thể lên đến hàng chục tỷ đồng. ",
        maxTerm:" Tối đa 12 tháng (1 năm). Khách hàng có thể chọn hình thức vay từng lần hoặc cấp hạn mức tín dụng để rút vốn nhiều lần trong năm. ",
        documents:"- Hồ sơ nhân thân/Pháp lý: CCCD của chủ hộ/đại diện pháp luật, giấy đăng ký kết hôn (nếu có), Giấy đăng ký kinh doanh. - Hồ sơ chứng minh tài chính: Báo cáo tài chính, tờ khai thuế, sổ sách theo dõi doanh thu - chi phí, hóa đơn đầu vào/đầu ra, hợp đồng kinh tế ký kết với đối tác. - Hồ sơ tài sản: Giấy chứng nhận quyền sở hữu đối với các tài sản đem đi thế chấp.",
        process:"Tiếp nhận hồ sơ → thẩm định → phê duyệt & công chứng → giải ngân. ",
        repayment:"- Trả lãi: Cố định hàng tháng vào một ngày cụ thể (do hai bên thỏa thuận, ví dụ ngày 25), tính trên số ngày và dư nợ thực tế. - Trả gốc: Áp dụng cuối kỳ khi khế ước nhận nợ đáo hạn (dưới 12 tháng) hoặc trả định kỳ (theo tháng/quý) tùy thuộc vào chu kỳ thu hồi vốn của phương án kinh doanh. ",
        fees:"- Phí định giá tài sản: Thu theo biểu phí định giá của Vietcombank hoặc công ty định giá độc lập được chỉ định. - Phí công chứng & Giao dịch bảo đảm: Khách hàng tự thanh toán trực tiếp cho văn phòng công chứng và cơ quan đăng ký đất đai theo quy định nhà nước. - Phí trả nợ trước hạn: Gói vay ngắn hạn bổ sung vốn lưu động thường được miễn phí trả trước hạn (hoặc áp dụng mức rất thấp tùy theo từng chương trình ưu đãi lãi suất cụ thể). - Phí phạt quá hạn: Bằng 150% lãi suất trong hạn tính trên phần nợ gốc bị chậm trả; lãi chậm trả bằng 10%/năm tính trên số dư lãi chậm trả. ",
        register:"Đăng ký tư vấn"
      },
      {
        name:"VietinBank",
        condition:" Cá nhân, hộ kinh doanh, doanh nghiệp siêu nhỏ (Micro SME) hoặc doanh nghiệp nhỏ và vừa hoạt động hợp pháp đáp ứng điều kiện trả và điều kiện tín dụng. ",
        maxAmount:"Hỗ trợ tối đa lên đến 80% - 90% nhu cầu vốn lưu động của phương án kinh doanh. ",
        maxTerm:"Tối đa 12 tháng (1 năm). Khách hàng có thể vay theo món (từng lần) hoặc cấp hạn mức thấu chi/hạn mức tín dụng để chủ động rút/trả vốn nhiều lần. ",
        documents:"- Pháp lý: CCCD, Giấy kết hôn/Xác nhận độc thân (Cá nhân) hoặc Đăng ký kinh doanh, Điều lệ (Doanh nghiệp). - Tài chính: Sổ sách doanh thu, tờ khai thuế, hóa đơn mua bán, hợp đồng kinh tế đầu vào/đầu ra. - Tài sản: Sổ đỏ/Sổ hồng hoặc giấy tờ có giá dùng để thế chấp. ",
        process:" Đăng ký & Tiếp nhận -> Thẩm định -> Phê duyệt & Hợp đồng -> Công chứng -> Giải ngân. ",
        repayment:"- Trả lãi: Cố định hàng tháng vào một ngày cụ thể (do hai bên thỏa thuận khi ký hợp đồng, thường từ ngày 25 đến cuối tháng), tính trên dư nợ và số ngày sử dụng thực tế. - Trả gốc: Áp dụng cuối kỳ khi khế ước nhận nợ đáo hạn (dưới 12 tháng) hoặc trả định kỳ (theo tháng/quý) tùy theo đặc thù vòng quay vốn lưu động của bạn. ",
        fees:"- Phí định giá tài sản: Thu theo biểu phí quy định của VietinBank hoặc công ty định giá độc lập tại thời điểm thế chấp• Phí công chứng & Đăng ký giao dịch bảo đảm: Khách hàng thanh toán trực tiếp cho văn phòng công chứng và cơ quan đăng ký đất đai theo khung giá nhà nước. - Phí trả nợ trước hạn: Khoản vay ngắn hạn bổ sung vốn lưu động thông thường được miễn phí trả trước hạn. Một số chương trình ưu đãi lãi suất đặc biệt có thể áp dụng mức phí từ 0,5% - 1% trên số tiền gốc trả sớm (nếu có quy định riêng). - Phí phạt quá hạn: Áp dụng bằng 150% lãi suất trong hạn tính trên phần nợ gốc bị chậm trả; phần lãi chậm trả chịu mức phạt tối đa 10%/năm. ",
        register:"Đăng ký tư vấn"
      },
      {
        name:"BIDV",
        condition:"Khách hàng cá nhân/Chủ hộ kinh doanh cần có hoạt động sản xuất kinh doanh thực tế tối thiểu từ 12 tháng trở lên. ",
        maxAmount:"Đáp ứng lên đến 100% nhu cầu vốn lưu động phục vụ phương án sản xuất. Đối với hạn mức thấu chi tài trợ vốn lưu động cá nhân, số tiền có thể lên đến 10 tỷ đồng. ",
        maxTerm:"Tối đa 12 tháng (1 năm). Khách hàng có thể linh hoạt chọn phương thức vay theo món (từng lần), cấp hạn mức tín dụng hoặc hạn mức thấu chi. ",
        documents:"- Hồ sơ pháp lý: CCCD của người vay và đồng sở hữu (nếu có), Giấy đăng ký kết hôn hoặc giấy xác nhận độc thân; Giấy đăng ký kinh doanh/Mã số thuế của Hộ kinh doanh hoặc Doanh nghiệp. - Hồ sơ tài chính & Mục đích: Sổ sách theo dõi doanh thu - chi phí, tờ khai thuế, hóa đơn đầu vào/đầu ra, các hợp đồng kinh tế hoặc đơn đặt hàng cần thanh toán vốn. - Hồ sơ tài sản: Sổ đỏ, sổ hồng hoặc các giấy tờ chứng minh quyền sở hữu hợp pháp đối với tài sản mang đi thế chấp. ",
        process:"Tiếp nhận & Đăng ký -> Khảo sát & Thẩm định -> Phê duyệt & Ký hợp đồng -> Giải ngân. ",
        repayment:"- Trả lãi: Thu hàng tháng tính trên dư nợ và số ngày sử dụng thực tế. Ngày thu lãi cố định do hai bên thỏa thuận khi ký hợp đồng (thường rơi vào các ngày từ 25 đến cuối tháng). - Trả gốc: Áp dụng trả cuối kỳ khi khế ước nhận nợ đáo hạn (thường dưới 12 tháng) hoặc trả định kỳ (theo tháng/quý) dựa vào đặc thù vòng quay vốn lưu động của phương án kinh doanh. ",
        fees:"- Phí định giá tài sản: Thu theo biểu phí quy định của BIDV hoặc công ty định giá độc lập đối tác do ngân hàng chỉ định. - Phí công chứng & Đăng ký giao dịch bảo đảm: Khách hàng chi trả trực tiếp cho văn phòng công chứng và cơ quan đăng ký đất đai theo khung giá quy định của Nhà nước. - Phí trả nợ trước hạn: Các gói vay ngắn hạn bổ sung vốn lưu động thông thường được miễn phí trả trước hạn. Tuy nhiên, một số gói vay áp dụng lãi suất ưu đãi đặc biệt có thể có điều khoản thu phí từ 0,2% - 1% trên số tiền gốc trả sớm (nếu tất toán trước thời gian quy định). - Phí phạt quá hạn: Áp dụng theo quy định của Ngân hàng Nhà nước: Bằng 150% lãi suất trong hạn tính trên phần nợ gốc bị chậm trả; phần lãi chậm trả bị phạt tối đa 10%/năm. ",
        register:"Đăng ký tư vấn"
      }
    ]
  }
};

async function init() {
  const id = new URLSearchParams(location.search).get("id") || "consumer-unsecured";
  const data = comparisonData[id] || comparisonData["consumer-unsecured"];

  detail1Category.textContent = data.category;
  detail1Name.textContent = data.name;
  detail1Description.textContent = data.description;

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
      <td style="padding: 12px; text-align: center;">
    <a href="../../Liên hệ.html?bank=${encodeURIComponent(bank.name)}&product=${encodeURIComponent(data.name)}"
       style="background-color: #173d7a; color: #fff; padding: 10px 14px; border-radius: 6px; text-decoration: none; font-size: 13px; font-weight: 600; display: inline-block; white-space: nowrap;">
        Đăng ký tư vấn
    </a>
</td>
    </tr>
  `).join("");
}

init();
