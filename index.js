async function showProduct(){
    let cards = document.querySelector('.cards');
    
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if(!response.ok){
            throw new Error("HTTP Error status :" , response.status);
        }
    const data = await response.json();
    console.log(data);
    data.forEach((e) => {
        cards.innerHTML += `
        <div class="card">
        <img src="${e.image}" alt="" id="img">
        <h2 class="title">${e.category}</h2>
        <p class="text">amazon product - size 6 multi colored</p>
        <strong class="price">${e.price}$</strong>
    </div>
        `
    });
    return data;
    } catch (error) {
        console.log(error);
    }
}
showProduct();


document.querySelector('.form-input').addEventListener('submit', (e) => {
    e.preventDefault();

    alert("success");
})
