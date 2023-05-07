class Header {
  handlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `
      <div class="header-container">
        <div
        class="header-counter"
        onclick="headerComponent.handlerOpenShoppingPage()"
        >
          в корзине ${count} товаров
        </div>
      </div>
    `;

    ROOT_HEADER.innerHTML = html;
  }
}

const headerComponent = new Header();
