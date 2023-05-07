class Products {
  handlerSetLocalStorage(element, id) {
    const { pushProduct, products } = localStorageUtil.putProducts(id);

    if (pushProduct) {
      element.innerText = 'Удалить из корзины';
    } else {
      element.innerText = 'Добавить в корзину';
    }
    headerComponent.render(products.length);
  }

  handlerOpenSingleProduct(id) {
    singleProductPage.render(id);
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = '';

    CATALOG.forEach(({ id, name, price, img }) => {
      let activeText = '';

      if (productsStore.indexOf(id) === -1) {
        activeText = 'Добавить в корзину';
      } else {
        activeText = 'Удалить из корзины';
      }

      htmlCatalog += `
        <div class="products-element">
          <span
            onclick="productsPage.handlerOpenSingleProduct('${id}')"
            class="products-element__name"
            >
              ${name}
            </span>
          <img
            class="products-element__img"
            src="${img}"
            alt="${name}"
          />
          <span class="products-element__price">
            ${price}
          </span>
          <button
            class="products-element__btn"
            onclick="productsPage.handlerSetLocalStorage(this, '${id}');"
          >
            ${activeText}
          </button>
        </div>
      `;
    });

    const html = `
      <div class="products-container">
        ${htmlCatalog}
      </div>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
