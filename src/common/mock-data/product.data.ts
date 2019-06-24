const productData = [
  {
    _id: 1,
    name: "Laptop Gaming ASUS ROG Zephyrus G GA502DU-AL024T",
    img_link: "http://product.hstatic.net/1000026716/product/ava_0d05674b0345419a818dcbecaea686bb_large.png",
    price: 32900000,
    isNew: 1,
    discount: 4,
    category_id: 2
  },
  {
    _id: 2,
    name: "Laptop ASUS TUF Gaming FX505GE-AL440T",
    img_link: "http://product.hstatic.net/1000026716/product/ava_2615765ca9fc4506bc8ace122efe0664_large.png",
    price: 27800000,
    isNew: 1,
    discount: 0,
    category_id: 2
  },
  {
    _id: 3,
    name: "Laptop Gaming Acer Nitro 5 2019 AN515-54-52EZ",
    img_link: "http://product.hstatic.net/1000026716/product/ava_2615765ca9fc4506bc8ace122efe0664_large.png",
    price: 250000,
    isNew: 0,
    discount: 2,
    category_id: 3
  },
  {
    _id: 4,
    name: "Laptop Gaming Acer Nitro 7 2019 AN515-54-52EZ",
    img_link: "http://product.hstatic.net/1000026716/product/ava_2615765ca9fc4506bc8ace122efe0664_large.png",
    price: 32900000,
    isNew: 1,
    discount: 0,
    category_id: 3
  },
  {
    _id: 5,
    name: "Laptop ASUS TUF Gaming GE12SXF-AL440T",
    img_link: "http://product.hstatic.net/1000026716/product/ava_0d05674b0345419a818dcbecaea686bb_large.png",
    price: 21500000,
    isNew: 0,
    discount: 0,
    category_id: 2
  },
  {
    _id: 6,
    name: "Laptop Gaming MSI GF75 Thin 8SC-025VN",
    img_link: "http://product.hstatic.net/1000026716/product/ava_1b77cabf9a0e4faba436a90c6822d2c1_large.png",
    price: 25000000,
    isNew: 1,
    discount: 7,
    category_id: 4
  },
  {
    _id: 7,
    name: "Laptop Gaming MSI GL75 Thin 8SC-025VN",
    img_link: "http://product.hstatic.net/1000026716/product/ava_2615765ca9fc4506bc8ace122efe0664_large.png",
    price: 32900000,
    isNew: 1,
    discount: 0,
    category_id: 4
  },
  {
    _id: 8,
    name: "Laptop Gaming MSI GF75 Thin WF5-025EN",
    img_link: "http://product.hstatic.net/1000026716/product/ava_1b77cabf9a0e4faba436a90c6822d2c1_large.png",
    price: 27800000,
    isNew: 1,
    discount: 2,
    category_id: 4
  },
  {
    _id: 9,
    name: "Laptop Gaming Acer Nitro 2 2019 AN515-54-52EZ",
    img_link: "http://product.hstatic.net/1000026716/product/ava_0d05674b0345419a818dcbecaea686bb_large.png",
    price: 25900000,
    isNew: 1,
    discount: 0,
    category_id: 3
  },
  {
    _id: 10,
    name: "Laptop Gaming MSI GL50 Thin 8SC-025VN",
    img_link: "http://product.hstatic.net/1000026716/product/ava_1b77cabf9a0e4faba436a90c6822d2c1_large.png",
    price: 2300000,
    isNew: 1,
    discount: 0,
    category_id: 4
  },
  {
    _id: 11,
    name: "Laptop Gaming Acer Nitro 8 2019 AN515-54-52EZ",
    img_link: "http://product.hstatic.net/1000026716/product/ava_0d05674b0345419a818dcbecaea686bb_large.png",
    price: 19900000,
    isNew: 0,
    discount: 0,
    category_id: 3
  },
  {
    _id: 12,
    name: "Laptop Gaming Acer Nitro 52EZ",
    img_link: "http://product.hstatic.net/1000026716/product/ava_2615765ca9fc4506bc8ace122efe0664_large.png",
    price: 23000000,
    isNew: 0,
    discount: 0,
    category_id: 3
  },
  {
    _id: 13,
    name: "Laptop Gaming MSI GF75 025VN",
    img_link: "http://product.hstatic.net/1000026716/product/ava_0d05674b0345419a818dcbecaea686bb_large.png",
    price: 2100000,
    isNew: 0,
    discount: 0,
    category_id: 4
  },
  {
    _id: 14,
    name: "Laptop Gaming ASUS ROG Zephyrus F GA502DU-AL024T",
    img_link: "http://product.hstatic.net/1000026716/product/ava_0d05674b0345419a818dcbecaea686bb_large.png",
    price: 22900000,
    isNew: 1,
    discount: 5,
    category_id: 2
  },
  {
    _id: 15,
    name: "Laptop Gaming ASUS ROG Zephyrus K GA502DU-AL024T",
    img_link: "http://product.hstatic.net/1000026716/product/ava_1b77cabf9a0e4faba436a90c6822d2c1_large.png",
    price: 24500000,
    isNew: 1,
    discount: 4,
    category_id: 2
  },
  {
    _id: 16,
    name: "Laptop ASUS TUF Gaming WX505GE-AL440T",
    img_link: "http://product.hstatic.net/1000026716/product/ava_0d05674b0345419a818dcbecaea686bb_large.png",
    price: 26500000,
    isNew: 1,
    discount: 6,
    category_id: 2
  },
  {
    _id: 17,
    name: "Laptop Gaming MSI GL75 500VN",
    img_link: "http://product.hstatic.net/1000026716/product/ava_0d05674b0345419a818dcbecaea686bb_large.png",
    price: 30900000,
    isNew: 0,
    discount: 7,
    category_id: 4
  },
  {
    _id: 18,
    name: "Laptop Gaming Acer Nitro 69GPO",
    img_link: "http://product.hstatic.net/1000026716/product/ava_2615765ca9fc4506bc8ace122efe0664_large.png",
    price: 22900000,
    isNew: 0,
    discount: 0,
    category_id: 3
  },
];

export default productData;
