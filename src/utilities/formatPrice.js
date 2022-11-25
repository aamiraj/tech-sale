const formatPrice = (price) => {
  const priceObject = new Intl.NumberFormat("bn-BD", {
    style: "currency",
    currency: "BDT",
    minimumFractionDigits: 2,
  });

  const readablePrice = priceObject.format(price)

  return readablePrice
};

export default formatPrice;
