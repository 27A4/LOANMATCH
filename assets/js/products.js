
const categoryTabs = document.getElementById("categoryTabs");
const productGrid = document.getElementById("productGrid");
const categoryTitle = document.getElementById("categoryTitle");
const resultCount = document.getElementById("resultCount");

let categories = [];
let products = [];

async function init() {
  try {
    const [catRes, productRes] = await Promise.all([
      fetch("../assets/data/categories.json"),
      fetch("../assets/data/products.json")
    ]);
    categories = await catRes.json();
    products = await productRes.json();

    renderTabs();
    const selected = new URLSearchParams(location.search).get("category") || "all";
    selectCategory(selected);
  } catch (error) {
    productGrid.innerHTML = `<div class="empty">Không thể tải dữ liệu. Hãy chạy website bằng VS Code Live Server.</div>`;
  }
}

function renderTabs() {
  categoryTabs.innerHTML = categories.map(cat => `
    <button class="category-tab" data-category="${cat.id}">
      ${cat.name}
    </button>
  `).join("");

  categoryTabs.querySelectorAll(".category-tab").forEach(button => {
    button.addEventListener("click", () => selectCategory(button.dataset.category));
  });
}

function selectCategory(categoryId) {
  const category = categories.find(c => c.id === categoryId) || categories[0];
  categoryTabs.querySelectorAll(".category-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === category.id);
  });

  const filtered = category.id === "all"
    ? products
    : products.filter(product => product.category === category.id);

  categoryTitle.textContent = category.name;
  resultCount.textContent = `${filtered.length} sản phẩm`;
  renderProducts(filtered);
}

function renderProducts(items) {
  if (!items.length) {
    productGrid.innerHTML = `<div class="empty">Chưa có sản phẩm trong danh mục này.</div>`;
    return;
  }

  productGrid.innerHTML = items.map(product => `
    <article class="product-card">
      <span class="tag">${getCategoryName(product.category)}</span>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <a class="view-link" href="product-detail.html?id=${product.id}">
        Xem thông tin & so sánh →
      </a>
    </article>
  `).join("");
}

function getCategoryName(id) {
  return categories.find(c => c.id === id)?.name || "";
}

init();
