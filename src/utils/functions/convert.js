const convertMoney = (money) => {
  return money
    .toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\u20BD/g, "");
};

export { convertMoney };
