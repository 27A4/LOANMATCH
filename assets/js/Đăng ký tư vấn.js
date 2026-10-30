const params = new URLSearchParams(window.location.search);

const bank = params.get("bank") || "";
const product = params.get("product") || "";

const bankInput = document.getElementById("bank");
const productInput = document.getElementById("product");
const consultationForm = document.getElementById("consultationForm");

if (bankInput) bankInput.value = bank;
if (productInput) productInput.value = product;

if (consultationForm) {
    consultationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!this.reportValidity()) return;

        const formData = new FormData(this);

        const customerData = {
            bank: formData.get("bank"),
            product: formData.get("product"),
            fullName: formData.get("fullName"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            address: formData.get("address"),
            message: formData.get("message")
        };

        console.log("Thông tin khách hàng:", customerData);

        document.getElementById("formMessage").textContent =
            "Đăng ký tư vấn thành công";

        this.reset();

        if (bankInput) bankInput.value = bank;
        if (productInput) productInput.value = product;
    });
}