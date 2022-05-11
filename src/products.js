class Products {
  products = [];
  categories = [];
  errors = {};

  constructor(props) {
    this.loadData();
  }

  loadData = async () => {
    const res = await Promise.allSettled([
      axiosInstance.get("products"),
      axiosInstance.get("categories"),
    ]);

    if (res[0].status === "fulfilled") {
      this.products = res[0].value;
      this.createSwiper();
    }
    if (res[1].status === "fulfilled") {
      this.categories = res[1].value;
      this.displayCategories();
    }
    if (res[0].status === "rejected") {
      this.errors["products"] = "Banners Data not available";
    }
    if (res[1].status === "rejected") {
      this.errors["categories"] = "categories Data not available";
    }
  };

  displayCategories() {}

  displayProducts() {}
}
