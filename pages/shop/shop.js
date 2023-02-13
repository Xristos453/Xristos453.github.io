export function load_shop(){
    function Coffee(name, src, about, price){
        this.name= name;
        this.src = src;
        this.about = about;
        this.price = price;
    }

    const coffee = [new Coffee("Cappuccino", "/coffee/cappuccino.jpg", "Some coffee", "100$"),];

    const shop_content = document.querySelector(".shop__content");
    const modal = document.querySelector(".shop__container-modal");
    coffee.forEach( 
        (item) => {
            const new_element = document.createElement("div");
            const title = document.createElement("b");
            const img = document.createElement("img");
            const price = document.createElement("b");
            title.innerText = item.name;
            img.setAttribute("src", item.src);
            img.setAttribute("alt", item.name);
            price.innerText =item.price;
            new_element.classList.add("shop__content-item");
            new_element.appendChild(title);
            new_element.appendChild(img);
            new_element.appendChild(price);
            shop_content.appendChild(new_element);
            new_element.addEventListener("click", () => {
                document.querySelector(".modal-container img").setAttribute("src", item.src);
                document.querySelector(".modal-container p").innerText = item.about;
                modal.classList.remove("hidden");
            })
        });
    
    document.querySelector(".modal-close_button").addEventListener("click",
    () => { modal.classList.add("hidden"); });

}
