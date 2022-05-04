const loadProducts = async () => {
  try {
    const res = await fetch(' http://localhost:3000/products');
    const json = await res.json();
  } catch (error) {
    console.log(error);
  }
};

loadProducts();
