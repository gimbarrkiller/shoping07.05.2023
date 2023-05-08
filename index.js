function render() {
	const productsStore = localStorageUtil.getProducts();

	headerComponent.render(productsStore.length);
	productsPage.render();
}

render();
