document.addEventListener('DOMContentLoaded', () => {

    // 1. Dữ liệu mặc định an toàn (nếu file JSON chưa khớp hoặc load lỗi)
    const fallbackBanks = [
        { id: "MB", name: "MB Bank (Ngân hàng Quân đội)" },
        { id: "VCB", name: "Vietcombank" },
        { id: "BIDV", name: "BIDV" },
        { id: "TCB", name: "Techcombank" },
        { id: "VPB", name: "VPBank" }
    ];

    const fallbackProducts = [
        // Gói vay cho MB
        { id: "mb_1", bankId: "MB", name: "Vay mua nhà An Cư MB", rate: 6.8 },
        { id: "mb_2", bankId: "MB", name: "Vay mua ô tô MB Drive", rate: 7.5 },
        { id: "mb_3", bankId: "MB", name: "Vay tiêu dùng chấp hành MB", rate: 8.5 },

        // Gói vay cho VCB
        { id: "vcb_1", bankId: "VCB", name: "Vay mua nhà ở Vietcombank", rate: 6.5 },
        { id: "vcb_2", bankId: "VCB", name: "Vay mua xe Vietcombank", rate: 7.0 },

        // Gói vay cho BIDV
        { id: "bidv_1", bankId: "BIDV", name: "Vay mua nhà An Gia BIDV", rate: 6.0 },
        { id: "bidv_2", bankId: "BIDV", name: "Vay sản xuất kinh doanh BIDV", rate: 7.2 },

        // Gói vay cho Techcombank
        { id: "tcb_1", bankId: "TCB", name: "Vay bất động sản Techcombank", rate: 7.5 },

        // Gói vay cho VPBank
        { id: "vpb_1", bankId: "VPB", name: "Vay mua ô tô VPBank", rate: 8.9 }
    ];

    let banksData = fallbackBanks;
    let productsData = fallbackProducts;
    let calculatedSchedule = [];

    // 2. Lấy các phần tử trên giao diện
    const bankSelect = document.getElementById('bank-select');
    const packageSelect = document.getElementById('package-select');
    const amountInput = document.getElementById('amount');
    const rateInput = document.getElementById('rate');
    const monthsInput = document.getElementById('months');
    const dateInput = document.getElementById('disbursement-date');
    const btnSchedule = document.getElementById('btn-schedule');
    const modal = document.getElementById('schedule-modal');
    const closeModalBtn = document.getElementById('close-modal');

    // Mặc định đặt ngày giải ngân là hôm nay nếu chưa có
    if (dateInput && !dateInput.value) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        dateInput.value = `${yyyy}-${mm}-${dd}`;
    }

    // 3. Đọc dữ liệu từ file JSON trong assets/data/
    async function loadDataAndInit() {
        try {
            const [resBanks, resProducts] = await Promise.all([
                fetch('../assets/data/banks.json'),
                fetch('../assets/data/products.json')
            ]);

            if (resBanks.ok) {
                const bData = await resBanks.json();
                if (Array.isArray(bData) && bData.length > 0) banksData = bData;
            }
            if (resProducts.ok) {
                const pData = await resProducts.json();
                if (Array.isArray(pData) && pData.length > 0) productsData = pData;
            }
        } catch (err) {
            console.log("Đang dùng dữ liệu tích hợp sẵn do chưa đọc được JSON:", err);
        }

        renderBankOptions();
        setupEventListeners();
        calculateLoan();
    }

    // 4. Đổ danh sách ngân hàng vào Dropdown
    function renderBankOptions() {
        if (!bankSelect) return;
        bankSelect.innerHTML = '<option value="">-- Chọn ngân hàng --</option>';

        banksData.forEach(bank => {
            const opt = document.createElement('option');
            // Linh hoạt lấy ID hoặc Mã ngân hàng
            const bankVal = bank.id || bank.code || bank.bank_id || bank.name;
            const bankText = bank.name || bank.bank_name || bank.title || bankVal;
            
            opt.value = bankVal;
            opt.textContent = bankText;
            bankSelect.appendChild(opt);
        });

        // Mặc định chọn ngân hàng đầu tiên
        if (bankSelect.options.length > 1) {
            bankSelect.selectedIndex = 1;
            renderPackageOptions(bankSelect.value);
        }
    }

    // 5. Đổ danh sách gói vay tương ứng khi chọn Ngân hàng
    function renderPackageOptions(selectedBankId) {
        if (!packageSelect) return;
        packageSelect.innerHTML = '<option value="">-- Chọn gói vay --</option>';

        if (!selectedBankId) {
            packageSelect.disabled = true;
            return;
        }

        // Lọc các gói vay thuộc ngân hàng đã chọn (so sánh không phân biệt hoa/thường)
        const matchedProducts = productsData.filter(p => {
            const pBank = String(p.bankId || p.bank_id || p.bankCode || p.bank || '').toLowerCase();
            const targetBank = String(selectedBankId).toLowerCase();
            return pBank === targetBank || targetBank.includes(pBank) || pBank.includes(targetBank);
        });

        if (matchedProducts.length > 0) {
            packageSelect.disabled = false;
            matchedProducts.forEach(pkg => {
                const opt = document.createElement('option');
                const rate = pkg.rate || pkg.interest_rate || pkg.interestRate || 7.5;
                const name = pkg.name || pkg.title || pkg.product_name || "Gói vay ưu đãi";
                
                opt.value = pkg.id || name;
                opt.dataset.rate = rate;
                opt.textContent = `${name} (${rate}%/năm)`;
                packageSelect.appendChild(opt);
            });

            // Tự động chọn gói vay đầu tiên
            packageSelect.selectedIndex = 1;
            const firstOpt = packageSelect.options[1];
            if (rateInput && firstOpt && firstOpt.dataset.rate) {
                rateInput.value = firstOpt.dataset.rate;
            }
        } else {
            // Nếu ngân hàng này trong JSON chưa có gói vay, hiển thị thông báo thay vì khóa cứng
            packageSelect.disabled = false;
            const opt = document.createElement('option');
            opt.value = "default";
            opt.dataset.rate = 7.5;
            opt.textContent = "Gói vay ưu đãi tiêu chuẩn (7.5%/năm)";
            packageSelect.appendChild(opt);
            packageSelect.selectedIndex = 1;
            if (rateInput) rateInput.value = 7.5;
        }
    }

    // 6. Định dạng tiền tệ VNĐ (VD: 500.000.000 VND)
    function formatVND(num) {
        if (isNaN(num) || num <= 0) return '0 VND';
        return new Intl.NumberFormat('vi-VN').format(Math.round(num)) + ' VND';
    }

    // 7. Hàm tự động tính toán dư nợ giảm dần chuẩn
    function calculateLoan() {
        const P = parseFloat(amountInput?.value) || 0;
        const rYear = parseFloat(rateInput?.value) || 0;
        const N = parseInt(monthsInput?.value) || 0;
        const startDateVal = dateInput?.value;

        if (P <= 0 || rYear <= 0 || N <= 0) {
            updateUI(0, 0, 0, 0);
            if (btnSchedule) {
                btnSchedule.classList.remove('active');
                btnSchedule.disabled = true;
            }
            return;
        }

        const rMonthly = (rYear / 100) / 12;
        const monthlyPrincipal = P / N;
        let remainingBalance = P;
        let totalInterest = 0;
        calculatedSchedule = [];

        const startDate = startDateVal ? new Date(startDateVal) : new Date();

        for (let i = 1; i <= N; i++) {
            const interestPaid = remainingBalance * rMonthly;
            const totalMonthlyPaid = monthlyPrincipal + interestPaid;
            remainingBalance -= monthlyPrincipal;
            totalInterest += interestPaid;

            let payDate = new Date(startDate);
            payDate.setMonth(payDate.getMonth() + i);

            calculatedSchedule.push({
                period: i,
                date: payDate.toLocaleDateString('vi-VN'),
                principal: monthlyPrincipal,
                interest: interestPaid,
                total: totalMonthlyPaid,
                remaining: remainingBalance < 0 ? 0 : remainingBalance
            });
        }

        const firstMonthPay = calculatedSchedule[0].total;
        const totalPayment = P + totalInterest;

        updateUI(firstMonthPay, P, totalInterest, totalPayment);

        if (btnSchedule) {
            btnSchedule.classList.add('active');
            btnSchedule.disabled = false;
        }
    }

    // 8. Cập nhật giao diện kết quả
    function updateUI(firstPay, principal, interest, total) {
        const elemMonthly = document.getElementById('monthly-pay');
        const elemPrincipal = document.getElementById('total-principal');
        const elemInterest = document.getElementById('total-interest');
        const elemTotal = document.getElementById('total-payment');

        if (elemMonthly) elemMonthly.textContent = formatVND(firstPay);
        if (elemPrincipal) elemPrincipal.textContent = formatVND(principal);
        if (elemInterest) elemInterest.textContent = formatVND(interest);
        if (elemTotal) elemTotal.textContent = formatVND(total);
    }

    // 9. Gắn sự kiện lắng nghe tương tác
    function setupEventListeners() {
        // Sự kiện khi chọn Ngân hàng
        if (bankSelect) {
            bankSelect.addEventListener('change', (e) => {
                renderPackageOptions(e.target.value);
                calculateLoan();
            });
        }

        // Sự kiện khi chọn Gói vay
        if (packageSelect) {
            packageSelect.addEventListener('change', (e) => {
                const selectedOpt = e.target.options[e.target.selectedIndex];
                if (selectedOpt && selectedOpt.dataset.rate && rateInput) {
                    rateInput.value = selectedOpt.dataset.rate;
                }
                calculateLoan();
            });
        }

        // Sự kiện thay đổi số tiền / lãi suất / số tháng / ngày giải ngân
        [amountInput, rateInput, monthsInput, dateInput].forEach(elem => {
            if (elem) {
                elem.addEventListener('input', calculateLoan);
                elem.addEventListener('change', calculateLoan);
            }
        });

        // Bật Modal Lịch trả nợ
        if (btnSchedule) {
            btnSchedule.addEventListener('click', () => {
                const tbody = document.getElementById('schedule-body');
                if (!tbody) return;

                tbody.innerHTML = '';
                calculatedSchedule.forEach(item => {
                    const tr = document.createElement('tr');
                    tr.innerHTML = `
                        <td>${item.period}</td>
                        <td style="text-align:center">${item.date}</td>
                        <td>${formatVND(item.principal)}</td>
                        <td>${formatVND(item.interest)}</td>
                        <td><strong>${formatVND(item.total)}</strong></td>
                        <td>${formatVND(item.remaining)}</td>
                    `;
                    tbody.appendChild(tr);
                });

                if (modal) modal.style.display = 'flex';
            });
        }

        // Đóng Modal
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', () => {
                if (modal) modal.style.display = 'none';
            });
        }

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    loadDataAndInit();
});