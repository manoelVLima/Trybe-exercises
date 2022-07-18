const URL = "https://api.coincap.io/v2/assets";
const URL1 = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'
const getBody = document.querySelector("body");

const fetchCoins = async () => {
  const coins = await fetch(URL)
    .then((response) => response.json())
    .then((result) => result.data);

  return coins; 
}
const usdCurrency  = async () => {
  const currency = await fetch(URL1).then((response) => response.json()).then((result) => result)
  return currency;
}
const setCoins = async () => {
  const coins = await fetchCoins();
  const currency = await usdCurrency();
  coins
    .filter((coin) => coin.rank <= 10)
    .forEach((eachCoin) => {
      const newCoin = document.createElement("p");
      newCoin.innerHTML = `${eachCoin.id} (${eachCoin.symbol}): ${eachCoin.priceUsd*currency.usd.brl}`;
      getBody.appendChild(newCoin);
    });
}

window.onload = fetchCoins(), setCoins(), usdCurrency;
