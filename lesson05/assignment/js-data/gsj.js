async function goldRates() {
    const response = await fetch("https://api.metalpriceapi.com/v1/latest?api_key=93868a235967cf43d3ceca81c7490453&base=USD&currencies=EUR,XAU,XAG");
    const data = await response.json();

    let rates = document.querySelector('#API');
    const gold = JSON.stringify(data);

    rates.innerHTML = gold;
    
}
  