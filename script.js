fetch('https://handiniwijaya.github.io/card-test/assets/api-json/data_product.json')
    .then(data => {
        return data.json()
    })
    .then(fullData => {
        let data = ""
        fullData.map((item) => {
            data += `<div class="card">
            <img src=${item.img} class="img"  alt="">
            <h1 class="title">${item.product_name}</h1>
            <p class="description">${item.info} </p>
            <p class="price">Rp ${item.price} </p>
            <button class="cart">Add to cart</button>
        </div>`
        });
        document.getElementById("cards").innerHTML = data
    })
    .catch(err => console.log(err))