class SingleProduct {
  handlerClear() {
    ROOT_SINGLE_PRODUCT.innerHTML = '';
  }

  render(id) {
    const productInfo = CATALOG.find(i => i.id === id);

    const html = `
      <div class="product-container">
        <div
          class="product__close"
          onclick="singleProductPage.handlerClear()"
        ></div>
        <div class="product-element__info">
          <img
            class="product-element__info_img"
            src="${productInfo.img}"
            alt="${productInfo.name}"
          />
          <div class="product-element__info_text">
            <div class="product-element__name">${productInfo.name}</div>
            <div class="product-element__price">${productInfo.price}</div>
          </div>
        </div>
      </div>
    `;

    ROOT_SINGLE_PRODUCT.innerHTML = html;
  }
}

const singleProductPage = new SingleProduct();
