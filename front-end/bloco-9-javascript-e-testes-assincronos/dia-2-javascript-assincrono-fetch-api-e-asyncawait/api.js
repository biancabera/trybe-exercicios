const cryptoFetch = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  const coins = await fetch(url)
  .then((response) => response.json())
  .then((data) => data.data)
  .catch((error) => error.toString());
  return coins;
}

const setCoin = async () => {
  const coins = await cryptoFetch();
  
  const listaCrypto = document.getElementById('lista-crypto');
  
  coins.filter((_,index) => index < 10)
  .forEach((coin) => {
  const criandoLista = document.createElement('li');
  const precoDolar = Number(coin.priceUsd);
  
  criandoLista.innerText = `${coin.name} (${coin.symbol}): ${precoDolar.toFixed(2)}`;
  
  listaCrypto.appendChild(criandoLista);
})

}

window.onload = () => setCoin();