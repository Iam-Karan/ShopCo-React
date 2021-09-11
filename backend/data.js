import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Karan",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "patel",
      email: "karan@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Iphone 12 Pro",
      category: "Mobile",
      image:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&.v=1604021661000",
      price: 1200,
      brand: "Apple",
      rating: 4.7,
      numReviews: 120,
      description: "high quality product",
      countInStock: 5,
    },
    {
      name: 'Macbook Pro 16"inch',
      category: "Laptop",
      image:
        "https://infinitediaries.net/wp-content/uploads/2018/07/MacBook-Pro-mid-2018-front-02.png",
      price: 1800,
      brand: "Apple",
      rating: 4.5,
      numReviews: 170,
      description: "high quality product",
      countInStock: 5,
    },
    {
      name: "Airpods Pro",
      category: "Airpods",
      image:
        "https://www.asimmobiles.com/wp-content/uploads/2019/01/airpods.png",
      price: 220,
      brand: "Apple",
      rating: 4.6,
      numReviews: 100,
      description: "high quality product",
      countInStock: 5,
    },
    {
      name: "Iphone 11",
      category: "Mobile",
      image: "http://pngimg.com/uploads/iphone_11/iphone_11_PNG38.png",
      price: 820,
      brand: "Apple",
      rating: 4.3,
      numReviews: 200,
      description: "high quality product",
      countInStock: 5,
    },
    {
      name: 'Ipad 8"inch',
      category: "Tab",
      image:
        "https://cdn.shopify.com/s/files/1/0283/0824/2518/products/ipad-pro-12-select-202003_GEO_CA_1200x1200.png?v=1588263639",
      price: 1020,
      brand: "Apple",
      rating: 4,
      numReviews: 270,
      description: "high quality product",
      countInStock: 5,
    },
    {
      name: "Airpods",
      category: "Airpods",
      image:
        "https://www.sunrise.ch/var/commerce/products/web/Default/en/apple_airpods_2_generationparent/picture.1612197887445.transform/original/19864_product_image1000x1000png.png",
      price: 150,
      brand: "Apple",
      rating: 4,
      numReviews: 250,
      description: "high quality product",
      countInStock: 0,
    },
  ],
  slider: [
    {
      image:
        "https://www.tronikx.com.mt/wp-content/uploads/2021/03/Apple-Banner.jpg",
    },
    {
      image:
        "https://content.vodafone.co.nz/dims4/default/6699bc5/2147483647/strip/true/crop/1219x640+570+0/resize/1200x630!/quality/90/?url=http%3A%2F%2Fvodafonenz-brightspot.s3.amazonaws.com%2F3d%2F7e%2Fbc19d8a74fcea1c2532b2199c4b0%2Fcbu-presale-family-page-hello-banner-desktop-banner-iphone-12-pro-no-cta-copy-2x.png",
    },
    {
      image:
        "https://www.sizescreens.com/wp-content/uploads/2019/09/Apple-iPad-10.2-3-1.jpg",
    },
    {
      image:
        "https://www.apple.com/v/airpods-pro/c/images/meta/og__ch3csr9zmviq_overview.png",
    },
  ],
};

export default data;
