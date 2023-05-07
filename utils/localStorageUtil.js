class LocalStorageUtil {
  getProducts() {
    const productsLocalStorage = localStorage.getItem(PRODUCTS);
    if (productsLocalStorage !== null) {
      return JSON.parse(productsLocalStorage);
    }
    return [];
  }
  putProducts(id) {
    let products = this.getProducts();
    let pushProduct = false;
    const index = products.indexOf(id);

    if (index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }

    localStorage.setItem(PRODUCTS, JSON.stringify(products));

    return { pushProduct, products };
  }
}

const localStorageUtil = new LocalStorageUtil();
