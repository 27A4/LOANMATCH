const params = new URLSearchParams(window.location.search);

const bank = params.get("bank") || "";
const product = params.get("product") || "";

document.getElementById("bank").value = bank;
document.getElementById("product").value = product;


document
    .getElementById("consultationForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const formData = new FormData(this);

        const customerData = {
            bank: formData.get("bank"),
            product: formData.get("product"),
            fullName: formData.get("fullName"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            message: formData.get("message")
        };

        console.log("Thông tin khách hàng:", customerData);

        document.getElementById("formMessage").textContent =
            "Đăng ký tư vấn thành công!";

        this.reset();

        document.getElementById("bank").value = bank;
        document.getElementById("product").value = product;
    });