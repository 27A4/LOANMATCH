const categoryTabs = document.getElementById("categoryTabs");
const subCategoryTabs = document.getElementById("subCategoryTabs");
const productGrid = document.getElementById("productGrid");
const categoryTitle = document.getElementById("categoryTitle");
const resultCount = document.getElementById("resultCount");

let categories = [];
let products = [];
let selectedCategory = "all";
let selectedSubCategory = "all";

// Danh mục Sub-tabs cho mục "Khác"
const subCategories = [
  { id: "all", name: "Tất cả nhu cầu khác" },
  { id: "refinancing", name: "Tái tài trợ / Đảo nợ" },
  { id: "education", name: "Du học & Đào tạo" },
  { id: "reimbursement", name: "Bù đắp tài chính & Nộp thuế" },
  { id: "green_finance", name: "Năng lượng xanh" }
];

async function init() {
  try {
    // 1. Nạp file danh mục
    const catRes = await fetch("../../../assets/data/Danh mục.json");
    if (!catRes.ok) {
      throw new Error(`Không tìm thấy file Danh mục.json (Mã lỗi: ${catRes.status})`);
    }
    categories = await catRes.json();

    // 2. Nạp file sản phẩm
    const productRes = await fetch("../../../assets/data/Sản phẩm.json");
    if (!productRes.ok) {
      throw new Error(`Không tìm thấy file Sản phẩm.json (Mã lỗi: ${productRes.status})`);
    }
    products = await productRes.json();

    renderTabs();
    renderSubTabs();

    const paramCategory = new URLSearchParams(location.search).get("category") || "all";
    selectCategory(paramCategory);
  } catch (error) {
    console.error("Lỗi nạp dữ liệu chi tiết:", error);
    if (productGrid) {
      productGrid.innerHTML = `
        <div class="empty" style="color: #dc2626; border-color: #fca5a5;">
          <strong>Lỗi nạp dữ liệu:</strong> ${error.message}<br>
          <small style="color: #6b7280; margin-top: 8px; display: block;">
            Vui lòng kiểm tra lại cú pháp hoặc đường dẫn file trong thư mục assets/data/.
          </small>
        </div>
      `;
    }
  }
}

function renderTabs() {
  if (!categoryTabs) return;
  categoryTabs.innerHTML = categories.map(cat => `
    <button class="category-tab" data-category="${cat.id}">
      ${cat.name}
    </button>
  `).join("");

  categoryTabs.querySelectorAll(".category-tab").forEach(button => {
    button.addEventListener("click", () => selectCategory(button.dataset.category));
  });
}

function renderSubTabs() {
  if (!subCategoryTabs) return;

  subCategoryTabs.innerHTML = subCategories.map(sub => `
    <button class="sub-tab-btn" data-sub="${sub.id}">
      ${sub.name}
    </button>
  `).join("");

  subCategoryTabs.querySelectorAll(".sub-tab-btn").forEach(button => {
    button.addEventListener("click", () => selectSubCategory(button.dataset.sub));
  });
}

function selectCategory(categoryId) {
  const category = categories.find(c => c.id === categoryId) || categories[0];
  selectedCategory = category ? category.id : "all";
  selectedSubCategory = "all";

  if (categoryTabs) {
    categoryTabs.querySelectorAll(".category-tab").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.category === selectedCategory);
    });
  }

  if (subCategoryTabs) {
    if (selectedCategory === "other") {
      subCategoryTabs.style.display = "flex";
      updateSubTabActive();
    } else {
      subCategoryTabs.style.display = "none";
    }
  }

  filterAndRender();
}

function selectSubCategory(subId) {
  selectedSubCategory = subId;
  updateSubTabActive();
  filterAndRender();
}

function updateSubTabActive() {
  if (!subCategoryTabs) return;
  subCategoryTabs.querySelectorAll(".sub-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.sub === selectedSubCategory);
  });
}

function filterAndRender() {
  const category = categories.find(c => c.id === selectedCategory) || categories[0];

  // 1. Lọc theo danh mục chính
  let filtered = selectedCategory === "all"
    ? products
    : products.filter(product => product.category === selectedCategory);

  // 2. Chỉ lọc sâu theo sub_category nếu người dùng chọn cụ thể 1 sub-tab (khác "all")
  if (selectedCategory === "other" && selectedSubCategory !== "all") {
    filtered = filtered.filter(product => product.sub_category === selectedSubCategory);
  }

  // Cập nhật tiêu đề & số lượng
  if (categoryTitle) {
    if (selectedCategory === "other" && selectedSubCategory !== "all") {
      const subObj = subCategories.find(s => s.id === selectedSubCategory);
      categoryTitle.textContent = subObj ? subObj.name : (category ? category.name : "Sản phẩm vay");
    } else {
      categoryTitle.textContent = category ? category.name : "Tất cả sản phẩm";
    }
  }
  
  if (resultCount) {
    resultCount.textContent = `${filtered.length} sản phẩm`;
  }

  renderProducts(filtered);
}

function renderProducts(items) {
  if (!productGrid) return;

  if (!items.length) {
    productGrid.innerHTML = `<div class="empty">Chưa có sản phẩm trong danh mục này.</div>`;
    return;
  }

  productGrid.innerHTML = items.map(product => {
    const detailUrl = product.category === "real-estate"
      ? `../Bất động sản/Chi tiết bất động sản.html?id=${product.id}`
      : product.category === "car" || product.category === "auto"
      ? `../Ô tô/Mua ô tô.html?id=${product.id}`
      : product.category === "business"
      ? `../Sản xuất kinh doanh/${product.id === "business-long" ? "Vay kinh doanh dài hạn" : "Vay kinh doanh ngắn hạn"}.html?id=${product.id}`
      : product.id === "consumer-secured"
      ? `../Tiêu dùng/Vay tiêu dùng có tài sản bảo đảm.html`
      : `../Tiêu dùng/Vay tiêu dùng tín chấp.html?id=${product.id}`;

    const tagLabel = getCategoryName(product.category, product.sub_category);

    return `
      <article class="product-card">
        <span class="tag">${tagLabel}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        
        <div class="product-actions" style="margin-top: 15px; display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
          <a class="view-link" href="${detailUrl}" style="background-color: #356fac; color: #ffffff; padding: 8px 16px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">
            Xem thông tin & So sánh →
          </a>
        </div>
      </article>
    `;
  }).join("");
}

function getCategoryName(catId, subCatId) {
  if (catId === "other") {
    if (subCatId) {
      const subObj = subCategories.find(s => s.id === subCatId);
      if (subObj && subObj.id !== "all") return subObj.name;
    }
    return "Mục đích khác";
  }
  return categories.find(c => c.id === catId)?.name || "Khoản vay";
}

init();