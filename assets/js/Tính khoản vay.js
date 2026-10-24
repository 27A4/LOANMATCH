document.addEventListener("DOMContentLoaded", function () {
    const bankSelect = document.getElementById("bank-select");
    const packageSelect = document.getElementById("package-select");
    const amountInput = document.getElementById("amount");
    const rateInput = document.getElementById("rate");
    const monthsInput = document.getElementById("months");
    const dateInput = document.getElementById("disbursement-date");

    const methodEl = document.getElementById("loan-method");

    const monthlyPayEl = document.getElementById("monthly-pay");
    const totalPrincipalEl = document.getElementById("total-principal");
    const totalInterestEl = document.getElementById("total-interest");
    const totalPaymentEl = document.getElementById("total-payment");

    const btnSchedule = document.getElementById("btn-schedule");
    const scheduleModal = document.getElementById("schedule-modal");
    const closeModalBtn = document.getElementById("close-modal");
    const scheduleBody = document.getElementById("schedule-body");

    let scheduleData = [];

    // 1. Đọc tham số từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const paramBankId = urlParams.get("bank_id");
    const paramProductId = urlParams.get("product_id");

    if (dateInput) {
        const today = new Date();
        dateInput.value = today.toISOString().split("T")[0];
    }

    // 2. Tải danh sách Ngân hàng
    fetch("../assets/data/Ngân hàng.json")
        .then((res) => res.json())
        .then((banks) => {
            if (!bankSelect) return;
            bankSelect.innerHTML = '<option value="">-- Chọn ngân hàng --</option>';
            banks.forEach((bank) => {
                const opt = document.createElement("option");
                opt.value = String(bank.id || bank.bank_id).trim();
                opt.textContent = bank.name;
                bankSelect.appendChild(opt);
            });

            if (paramBankId) {
                bankSelect.value = String(paramBankId).trim();
                loadPackages(paramBankId, paramProductId);
            }
        })
        .catch((err) => console.error("Lỗi đọc file Ngân hàng.json:", err));

    if (bankSelect) {
        bankSelect.addEventListener("change", function () {
            loadPackages(this.value, null);
        });
    }

    // 3. Tải danh sách Gói vay theo Ngân hàng
    function loadPackages(bankId, selectedProductId) {
        if (!packageSelect) return;
        packageSelect.innerHTML = '<option value="">-- Chọn gói vay --</option>';

        if (!bankId) {
            packageSelect.disabled = true;
            return;
        }

        fetch("../assets/data/Sản phẩm.json")
            .then((res) => res.json())
            .then((products) => {
                const targetBankId = String(bankId).trim().toLowerCase();

                const filtered = products.filter((p) => {
                    const rawBank = p.bank_id || p.bankId || p.bank || "";
                    if (Array.isArray(rawBank)) {
                        return rawBank.some((b) => String(b).trim().toLowerCase() === targetBankId);
                    }
                    return String(rawBank).trim().toLowerCase() === targetBankId;
                });

                if (filtered.length > 0) {
                    filtered.forEach((prod) => {
                        const opt = document.createElement("option");
                        opt.value = String(prod.id || prod.product_id).trim();

                        const rateBase = prod.interest_rate || prod.interestRate || prod.rate || 0;
                        const rateShort = prod.interest_rate_short || rateBase;
                        const rateLong = prod.interest_rate_long || rateBase;

                        opt.dataset.rate = rateBase;
                        opt.dataset.rateShort = rateShort;
                        opt.dataset.rateLong = rateLong;

                        if (rateShort !== rateLong) {
                            opt.textContent = `${prod.name} (Ngắn hạn: ${rateShort}% | Dài hạn: ${rateLong}%)`;
                        } else {
                            opt.textContent = `${prod.name} (${rateBase}%/năm)`;
                        }

                        packageSelect.appendChild(opt);
                    });

                    packageSelect.disabled = false;

                    if (selectedProductId) {
                        packageSelect.value = String(selectedProductId).trim();
                    }

                    applySelectedPackage();
                } else {
                    packageSelect.disabled = true;
                    const opt = document.createElement("option");
                    opt.textContent = "-- Không có gói vay cho ngân hàng này --";
                    packageSelect.appendChild(opt);
                }
            })
            .catch((err) => console.error("Lỗi đọc file Sản phẩm.json:", err));
    }

    // 4. Áp dụng Lãi suất của Gói vay dựa theo Số tháng vay (Ngắn hạn vs Dài hạn)
    function applySelectedPackage() {
        if (!packageSelect || packageSelect.selectedIndex < 0) return;
        const selectedOpt = packageSelect.options[packageSelect.selectedIndex];

        if (selectedOpt && rateInput) {
            const months = parseInt(monthsInput ? monthsInput.value : 0) || 0;
            const rateShort = parseFloat(selectedOpt.dataset.rateShort) || parseFloat(selectedOpt.dataset.rate) || 0;
            const rateLong = parseFloat(selectedOpt.dataset.rateLong) || rateShort;

            if (months > 12) {
                rateInput.value = rateLong;
            } else {
                rateInput.value = rateShort;
            }
            calculateLoan();
        }
    }

    if (packageSelect) {
        packageSelect.addEventListener("change", applySelectedPackage);
    }

    // 5. Xử lý chuẩn xác nhập Số tiền vay (Không còn bị lặp chuỗi Unikey/EVKey)
    if (amountInput) {
        let isComposing = false;

        amountInput.addEventListener("compositionstart", function () {
            isComposing = true;
        });

        amountInput.addEventListener("compositionend", function () {
            isComposing = false;
            formatCurrencyInput(this);
        });

        amountInput.addEventListener("input", function () {
            if (!isComposing) {
                formatCurrencyInput(this);
            }
        });
    }

    function formatCurrencyInput(inputEl) {
        let cursorPosition = inputEl.selectionStart;
        let originalLength = inputEl.value.length;

        // Xóa sạch tất cả các ký tự không phải là chữ số
        let rawValue = inputEl.value.replace(/\D/g, "");

        if (rawValue) {
            // Định dạng phân cách hàng nghìn bằng dấu phẩy
            let formattedValue = Number(rawValue).toLocaleString("en-US");
            inputEl.value = formattedValue;

            // Giữ vị trí con trỏ chuột đúng vị trí đang gõ
            let newLength = formattedValue.length;
            cursorPosition = cursorPosition + (newLength - originalLength);
            inputEl.setSelectionRange(cursorPosition, cursorPosition);
        } else {
            inputEl.value = "";
        }

        calculateLoan();
    }

    if (monthsInput) {
        monthsInput.addEventListener("input", function () {
            applySelectedPackage();
            calculateLoan();
        });
    }

    [rateInput, dateInput].forEach((el) => {
        if (el) el.addEventListener("input", calculateLoan);
    });

    // 6. Xử lý tính toán Khoản vay & Cập nhật Phương thức vay
    function calculateLoan() {
        if (!amountInput || !rateInput || !monthsInput) return;

        const amount = parseFloat(amountInput.value.replace(/,/g, "")) || 0;
        const annualRate = parseFloat(rateInput.value) || 0;
        const months = parseInt(monthsInput.value) || 0;
        const startDateVal = dateInput ? dateInput.value : "";

        // Cập nhật Phương thức vay tự động (Vay ngắn hạn vs Vay dài hạn)
        if (methodEl) {
            if (months > 0) {
                methodEl.textContent = months <= 12 ? "Vay ngắn hạn" : "Vay dài hạn";
            } else {
                methodEl.textContent = "--";
            }
        }

        if (amount <= 0 || annualRate <= 0 || months <= 0) {
            resetResults();
            return;
        }

        const monthlyRate = annualRate / 100 / 12;
        const principalPerMonth = amount / months;

        let remainingAmount = amount;
        let totalInterest = 0;
        scheduleData = [];

        let currentDate = startDateVal ? new Date(startDateVal) : new Date();

        for (let i = 1; i <= months; i++) {
            const interestPayment = remainingAmount * monthlyRate;
            const monthTotalPayment = principalPerMonth + interestPayment;
            remainingAmount -= principalPerMonth;

            if (remainingAmount < 0) remainingAmount = 0;
            totalInterest += interestPayment;

            let payDate = new Date(currentDate);
            payDate.setMonth(payDate.getMonth() + i);

            scheduleData.push({
                period: i,
                date: formatDate(payDate),
                principal: Math.round(principalPerMonth),
                interest: Math.round(interestPayment),
                total: Math.round(monthTotalPayment),
                remaining: Math.round(remainingAmount),
            });
        }

        const totalPayment = amount + totalInterest;
        const firstMonthPay = scheduleData[0] ? scheduleData[0].total : 0;

        if (monthlyPayEl) monthlyPayEl.textContent = formatVND(firstMonthPay);
        if (totalPrincipalEl) totalPrincipalEl.textContent = formatVND(amount);
        if (totalInterestEl) totalInterestEl.textContent = formatVND(totalInterest);
        if (totalPaymentEl) totalPaymentEl.textContent = formatVND(totalPayment);

        if (btnSchedule) {
            btnSchedule.classList.add("active");
            btnSchedule.disabled = false;
        }
    }

    function resetResults() {
        if (monthlyPayEl) monthlyPayEl.textContent = "0 VND";
        if (totalPrincipalEl) totalPrincipalEl.textContent = "0 VND";
        if (totalInterestEl) totalInterestEl.textContent = "0 VND";
        if (totalPaymentEl) totalPaymentEl.textContent = "0 VND";
        if (methodEl) methodEl.textContent = "--";
        if (btnSchedule) {
            btnSchedule.classList.remove("active");
            btnSchedule.disabled = true;
        }
        scheduleData = [];
    }

    // 7. Hiển thị Modal Lịch trả nợ
    if (btnSchedule) {
        btnSchedule.addEventListener("click", function () {
            if (scheduleData.length === 0 || !scheduleBody) return;

            scheduleBody.innerHTML = "";
            scheduleData.forEach((row) => {
                const tr = document.createElement("tr");
                tr.innerHTML = `
                    <td>${row.period}</td>
                    <td>${row.date}</td>
                    <td>${row.principal.toLocaleString("vi-VN")}</td>
                    <td>${row.interest.toLocaleString("vi-VN")}</td>
                    <td>${row.total.toLocaleString("vi-VN")}</td>
                    <td>${row.remaining.toLocaleString("vi-VN")}</td>
                `;
                scheduleBody.appendChild(tr);
            });

            if (scheduleModal) scheduleModal.classList.add("open");
        });
    }

    if (closeModalBtn && scheduleModal) {
        closeModalBtn.addEventListener("click", () => scheduleModal.classList.remove("open"));
        window.addEventListener("click", (e) => {
            if (e.target === scheduleModal) scheduleModal.classList.remove("open");
        });
    }

    function formatVND(num) {
        return Math.round(num).toLocaleString("vi-VN") + " VND";
    }

    function formatDate(date) {
        const d = String(date.getDate()).padStart(2, "0");
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
    }

    calculateLoan();
});