const body = document.getElementById("comparisonBody");
const detail2Name = document.getElementById("detail2Name");
const detail2Description = document.getElementById("detail2Description");
const detail2Category = document.getElementById("detail2Category");

const comparisonData = {
  "consumer-unsecured": {
    category: "SẢN XUẤT KINH DOANH ",
    name: "Vay sản xuất kinh doanh trung/ dài hạn",
    description: "Bổ sung vốn phục vụ hoạt động sản xuất, kinh doanh trong thời gian trung/ dài hạn",
    banks: [
      {
        name:"MB",
        condition:"- Khách hàng cá nhân: Từ 19 - 70 tuổi, có đầy đủ năng lực hành vi dân sự, có hộ khẩu hoặc đăng ký cư trú tại tỉnh/thành phố có chi nhánh MB Bank hoạt động. - Khách hàng doanh nghiệp: Thành lập hợp pháp, kinh doanh có lãi hoặc có phương án chứng minh dòng tiền khả thi. ",
        maxAmount:"Hỗ trợ tối đa lên đến 90% nhu cầu vốn của phương án/dự án kinh doanh. ",
        maxTerm:" - Trung hạn: Từ trên 1 năm đến 5 năm. - Dài hạn: Từ trên 5 năm (phổ biến từ 7–10 năm tùy dự án, đầu tư máy móc hoặc nhà xưởng). ",
        documents:"- Pháp lý: CCCD, Giấy kết hôn/Xác nhận độc thân (Cá nhân) hoặc Đăng ký doanh nghiệp, Điều lệ, Quyết định bổ nhiệm (Doanh nghiệp). - Tài chính & Dự án: Báo cáo tài chính 1-2 năm gần nhất, Phương án/Dự án đầu tư kinh doanh khả thi, Hồ sơ chứng minh nguồn vốn tự có tham gia (tối thiểu 10% - 30%). - Mục đích vay: Hợp đồng mua bán máy móc/xe/đất đai, hóa đơn, giấy phép xây dựng nhà xưởng. - Tài sản bảo đảm: Sổ đỏ/Sổ hồng, Giấy tờ xe ô tô, hoặc Giấy tờ có giá trị để thế chấp. ",
        process:" Đăng ký & Tư vấn -> Thẩm định dự án & Tài sản -> Phê duyệt hạn mức -> Công chứng & Bảo hiểm -> Giải ngân. ",
        repayment:"- Trả lãi: Cố định hàng tháng hoặc hàng quý theo thỏa thuận trên hợp đồng, tính trên dư nợ giảm dần. - Trả gốc: Chia nhỏ trả định kỳ hàng tháng, hàng quý hoặc 6 tháng/lần (không áp dụng trả cuối kỳ như vay ngắn hạn). - Thời gian ân hạn gốc: Có thể được áp dụng từ 6 đến 12 tháng đầu tiên (hoặc lâu hơn tùy quy mô dự án). Trong thời gian ân hạn, chỉ cần trả lãi, chưa cần trả gốc. ",
        fees:"- Phí trả trước hạn: Áp dụng 1% - 3% trên số tiền gốc tất toán sớm. Thường sẽ được miễn hoặc giảm phí này sau từ năm thứ 3 đến năm thứ 5 của khoản vay. - Phí phạt quá hạn: Bằng 150% lãi suất trong hạn tính trên phần nợ gốc bị chậm trả; lãi chậm trả bằng 10%/năm tính trên số dư lãi chậm trả. - Phí định giá & Công chứng: Thu theo biểu phí của cơ quan chức năng và đơn vị định giá độc lập khi làm thủ tục tài sản bảo đảm. - Phí mua bảo hiểm tài sản: Khách hàng tự thanh toán cho bên bảo hiểm (MB Bank là bên thụ hưởng hợp pháp). ",
        register:"Đăng ký tư vấn"
      },
      {
        name:"Vietcombank",
        condition:" Công dân Việt Nam từ 18 đến 65 tuổi (đối với cá nhân, chủ hộ kinh doanh, chủ doanh nghiệp tư nhân) hoặc các pháp nhân doanh nghiệp thành lập hợp pháp đủ điều kiện vay và khả năng trả nợ. ",
        maxAmount:" Tối đa 70% - 85% giá trị phương án/dự án, số tiền cấp tín dụng cho khách hàng cá nhân/SME có thể lên đến 30 tỷ đồng. ",
        maxTerm:" Từ trên 12 tháng đến 84 tháng (tối đa 7 năm) tùy theo phương án đầu tư. ",
        documents:"- Hồ sơ nhân thân: CCCD/Hộ chiếu, thông tin cư trú, Giấy đăng ký kết hôn hoặc giấy xác nhận độc thân. - Hồ sơ mục đích vay: Giấy phép đăng ký kinh doanh; Phương án/Dự án đầu tư kinh doanh trung/ dài hạn; Hợp đồng mua bán máy móc, xe, đất đai, nhà xưởng; Giấy phép xây dựng (nếu có). - Hồ sơ tài chính: Báo cáo tài chính, tờ khai thuế, sổ sách theo dõi doanh thu - chi phí hiện tại để chứng minh năng lực tài trợ nguồn trả nợ. - Hồ sơ tài sản: Giấy chứng nhận quyền sở hữu đối với các tài sản đem đi thế chấp. ",
        process:" Tiếp nhận & Đăng ký -> Thẩm định chi tiết -> Phê duyệt -> Hợp đồng & Bảo hiểm -> Giải ngân. ",
        repayment:"- Kỳ trả lãi: Thu hàng tháng tính theo dư nợ giảm dần (thực tế sử dụng vốn) vào ngày cố định do hai bên thỏa thuận. - Kỳ trả gốc: Chia nhỏ trả góp định kỳ (hàng tháng, hàng quý hoặc 6 tháng/lần) tùy thuộc vào chu kỳ dòng tiền thu về của dự án. - Ân hạn gốc: Với các dự án đầu tư xây dựng hoặc lắp đặt máy móc lớn, Vietcombank có thể xem xét cho ân hạn nợ gốc từ 6 - 24 tháng (giai đoạn đầu khách hàng chỉ cần trả lãi, chưa phải trả gốc). ",
        fees:"- Phí định giá tài sản & Công chứng: Thu theo biểu phí thực tế của cơ quan chức năng hoặc đơn vị định giá độc lập phối hợp với ngân hàng. - Phí trả nợ trước hạn: Áp dụng từ 1% - 3% tính trên số dư nợ gốc tất toán sớm. Vietcombank thường áp dụng cơ chế giảm dần mức phí này theo thời gian và miễn phí phạt hoàn toàn sau một số năm nhất định (thường từ năm thứ 3 hoặc thứ 5 trở đi). - Phí phạt quá hạn: Bằng 150% lãi suất trong hạn tính trên phần nợ gốc bị chậm trả; phần lãi chậm trả bị tính phí phạt tối đa 10%/năm theo quy định. ",
        register:"Đăng ký tư vấn"
      },
      {
        name:"VietinBank",
        condition:"Cá nhân, hộ kinh doanh hoặc doanh nghiệp có năng lực pháp luật dân sự đầy đủ, hoạt động kinh doanh hợp pháp tại Việt Nam. ",
        maxAmount:"Hỗ trợ tối đa lên đến 70% - 80% tổng mức đầu tư hoặc nhu cầu vốn của dự án/phương án kinh doanh. ",
        maxTerm:"- Trung hạn: Từ trên 1 năm đến 5 năm. - Dài hạn: Từ trên 5 năm (tối đa có thể lên đến 10 - 15 năm tùy thuộc vào quy mô dự án và tuổi thọ tài sản cố định). ",
        documents:"- Hồ sơ pháp lý: CCCD, Giấy kết hôn/Xác nhận độc thân (Cá nhân) hoặc Đăng ký kinh doanh, Điều lệ, Quyết định bổ nhiệm (Doanh nghiệp). - Hồ sơ mục đích & Dự án: Phương án/Dự án đầu tư kinh doanh trung dài hạn, báo cáo đánh giá hiệu quả dự án, các hợp đồng mua bán, hóa đơn, giấy phép xây dựng liên quan. - Hồ sơ tài chính: Báo cáo tài chính tối thiểu 1-2 năm gần nhất, tờ khai thuế, chứng từ thể hiện nguồn vốn tự có đã chuẩn bị. - Hồ sơ tài sản: Giấy tờ chứng minh quyền sở hữu hợp pháp đối với tài sản mang đi thế chấp. ",
        process:"Đăng ký -> Thẩm định dự án -> Phê duyệt tín dụng -> Hoàn thiện thủ tục tài sản -> Giải ngân. ",
        repayment:"- Trả lãi: Cố định hàng tháng hoặc hàng quý theo thỏa thuận trên hợp đồng, tính trên dư nợ giảm dần. - Trả gốc: Chia nhỏ trả định kỳ hàng tháng, hàng quý hoặc 6 tháng/lần (không trả cuối kỳ như vay ngắn hạn). - Ân hạn gốc: Tùy theo tiến độ xây dựng hoặc lắp đặt trang thiết bị của dự án, VietinBank có thể cho phép ân hạn gốc từ 6 tháng đến 24 tháng. Trong thời gian này, khách hàng chỉ cần thanh toán tiền lãi, chưa phải trả gốc. ",
        fees:"- Phí trả nợ trước hạn: Dao động từ 1% - 3% trên số tiền gốc trả trước hạn trong những năm đầu (thường từ năm thứ 3 hoặc năm thứ 5 trở đi sẽ được miễn phí phạt). - Phí phạt quá hạn: Bằng 150% lãi suất trong hạn tính trên phần nợ gốc bị chậm trả; phần lãi chậm trả bị phạt tối đa 10%/năm. - Phí thẩm định & Định giá: Thu theo biểu phí quy định của VietinBank hoặc công ty định giá độc lập đối tác của ngân hàng. - Phí bảo hiểm tài sản: Khách hàng chi trả trực tiếp cho công ty bảo hiểm theo quy định quản lý rủi ro của ngân hàng. ",
        register:"Đăng ký tư vấn"
      },
      {
        name:"BIDV",
        condition:"Cá nhân, hộ kinh doanh hoặc doanh nghiệp có năng lực pháp luật dân sự đầy đủ, đăng ký kinh doanh hợp pháp. ",
        maxAmount:"Hỗ trợ lên đến 70% - 85% tổng mức đầu tư hoặc nhu cầu vốn của dự án. ",
        maxTerm:"- Trung hạn: Từ trên 1 năm đến 5 năm. - Dài hạn: Từ trên 5 năm (tối đa lên đến 10 - 15 năm tùy tính chất dự án). ",
        documents:"- Hồ sơ pháp lý: CCCD của người vay/ đồng sở hữu, Giấy kết hôn/ Xác nhận độc thân (Cá nhân) hoặc Đăng ký doanh nghiệp, Điều lệ (Doanh nghiệp). - Hồ sơ dự án & Mục đích: Phương án/Dự án đầu tư kinh doanh, dự toán chi phí, các hợp đồng mua bán máy móc/xe, giấy phép xây dựng nhà xưởng (nếu có). - Hồ sơ tài chính: Báo cáo tài chính tối thiểu 1-2 năm gần nhất, sổ sách doanh thu - chi phí hiện tại, chứng từ thể hiện nguồn vốn tự có đã góp vào dự án. - Hồ sơ tài sản: Giấy tờ chứng minh quyền sở hữu hợp pháp đối với tài sản mang đi thế chấp. ",
        process:"Đăng ký -> Thẩm định toàn diện -> Phê duyệt tín dụng -> Thủ tục tài sản & Bảo hiểm -> Giải ngân. ",
        repayment:"- Trả lãi: Thu hàng tháng hoặc hàng quý theo thỏa thuận trên hợp đồng, tính trên dư nợ giảm dần. - Trả gốc: Chia nhỏ trả góp định kỳ hàng tháng, hàng quý hoặc 6 tháng/lần (không áp dụng trả cuối kỳ). - Thời gian ân hạn gốc: Tùy theo tiến độ xây dựng hoặc lắp đặt máy móc của dự án, BIDV có thể cho phép ân hạn gốc từ 6 tháng đến 24 tháng. Trong thời gian này, bạn chỉ cần thanh toán tiền lãi, chưa phải trả nợ gốc. ",
        fees:"- Phí trả nợ trước hạn: Áp dụng mức từ 1% - 3% trên số tiền gốc trả trước hạn nếu tất toán sớm trong những năm đầu của hợp đồng. Mức phí này sẽ giảm dần và thường được miễn phí phạt từ năm thứ 5 trở đi. - Phí phạt quá hạn: Bằng 150% lãi suất trong hạn tính trên phần nợ gốc bị chậm trả; lãi chậm trả bị phạt tối đa 10%/năm. - Phí thẩm định & Định giá: Thu theo biểu phí quy định của BIDV hoặc công ty định giá độc lập đối tác của ngân hàng. - Phí bảo hiểm tài sản: Khách hàng chi trả trực tiếp cho công ty bảo hiểm (BIDV là bên thụ hưởng hợp pháp). ",
        register:"Đăng ký tư vấn"
      }
    ]
  }
};


async function init() {
  const id = new URLSearchParams(location.search).get("id") || "consumer-unsecured";
  const data = comparisonData[id] || comparisonData["consumer-unsecured"];

  detail2Category.textContent = data.category;
  detail2Name.textContent = data.name;
  detail2Description.textContent = data.description;

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
