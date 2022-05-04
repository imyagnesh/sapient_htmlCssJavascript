import './style.scss';

const loadProducts = async () => {
  try {
    const res = await fetch(' http://localhost:3000/products');
    const json = await res.json();

    const productList = document.getElementById('product-list');

    for (let index = 0; index < json.length; index++) {
      const element = json[index];

      const gridItem = document.createElement('div');
      gridItem.className = 'grid__item';

      const itemTitle = document.createElement('h2');
      itemTitle.className = 'grid__item__title';
      itemTitle.innerHTML = element.name;

      const itemImage = document.createElement('img');
      itemImage.className = 'grid__item__image';
      itemImage.src = element.imageURL;
      itemImage.alt = element.name;

      const itemDesc = document.createElement('p');
      itemDesc.className = 'grid__item__desc';
      itemDesc.innerHTML = element.description;

      const gridBottom = document.createElement('div');
      gridBottom.className = 'grid__item__bottom';

      const gridPrice = document.createElement('div');
      gridPrice.className = 'grid__item__bottom__price';
      gridPrice.innerHTML = `MRP ${new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
      }).format(element.price)}`;

      const gridButton = document.createElement('button');
      gridButton.className = 'btn-primary';
      gridButton.innerHTML = 'Buy Now';

      gridBottom.appendChild(gridPrice);
      gridBottom.appendChild(gridButton);

      gridItem.appendChild(itemTitle);
      gridItem.appendChild(itemImage);
      gridItem.appendChild(itemDesc);
      gridItem.appendChild(gridBottom);
      productList.appendChild(gridItem);
    }
  } catch (error) {
    console.log(error);
  }
};

loadProducts();
