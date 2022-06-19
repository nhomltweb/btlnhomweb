const productApi="http://localhost:3000/product"
const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)


function app(){
    getProducts(renderProducts)

    // Cart
    cartItem()
    deleteItemCard()


}

app();


// Function
// Get 
function getProducts(callback){
    fetch(productApi)
        .then(function(response){
            return response.json()
        })
        .then(callback)
    
}
function renderProducts(products){
    var listProductBlock=document.querySelector('.list_product');
    var ht=products.map(function(product){
        return `
        <div class="grid__column-2-10">
            <!-- Product item-->
            <a class="home-product-item" href=${product.link}>
                <div class="home-product-item__img" style="background-image: url(${product.img});"></div>
                <h4 class="home-product-item__name">${product.name}</h4>
                <div class="home-product-item__price">
                    <span class="home-product-item__price-old">${product.priceOld}</span>
                    <span class="home-product-item__price-current">${product.priceNew || "Xe chơi,K bán"}</span>
                </div>
                <div class="home-product-item__action">
                    <span class="home-product-item__action-like home-product-item__action-like--liked">
                        <i class="home-product-item__action-like-icon-empty far fa-heart"></i>
                        <i class="home-product-item__action-like-icon-fill fas fa-heart"></i>
                    </span>
                    <div class="home-product-item__rating">
                        <i class="home-product-item__start-gold fas fa-star"></i>
                        <i class="home-product-item__start-gold fas fa-star"></i>
                        <i class="home-product-item__start-gold fas fa-star"></i>
                        <i class="home-product-item__start-gold fas fa-star"></i>
                        <i class="home-product-item__start-gold fas fa-star"></i>
                    </div>
                    <span class="home-product-item__sold">${product.sold}</span>
                </div>
                <div class="home-product-item__origin">
                    <span class="home-product-item__brand">${product.brand || "2TRacing"}</span>
                    <span class="home-product-item__origin-name">${product.from || "Việt Nam"}</span>
                </div>
                <div class="home-product-item__favourite">
                    <i class="fas fa-check"></i>
                    <span>Yêu Thích</span>
                </div>
                <div class="home-product-item__sale-off">
                    <span class="home-product-item__sale-off-percent">${product.discount || "0%"}</span>
                    <span class="home-product-item__sale-off-label">Giảm</span>
                </div>
            </a>                                                                    
        </div>
        `;
    });
    listProductBlock.innerHTML=ht.join('');
}

// Hiển thị số lượng trong cart
// Cart
function cartItem(){
    const itemCart=document.getElementsByClassName("header__cart-item")
    const a=itemCart.length
    const numberItem=document.getElementsByClassName("header__cart-notice")[0]
    numberItem.innerHTML=a
    //add them
    const cartList=document.querySelector(".header__cart-list-item")
    if(a === 0){
        const imgNew=document.createElement("img")
        imgNew.src="./assets/img/nocart.jpg"
        imgNew.style.width='70%'
        imgNew.style.height='85%'

        cartList.appendChild(imgNew)
    }
    

}
// delete item

function deleteItemCard(){
    const dele=[...document.getElementsByClassName("header__cart-item-remove")]
    dele.map(function(item){
        item.onclick=function(){
            item.parentElement.parentElement.parentElement.remove()
            cartItem()
        }
    });    
}
// đi đến page product
function pageProduct(products){
    var listProductPage=document.querySelector('.app__container');
    var ht=products.map(function(){
        return(`
            <div class="grid_product">
            <div class="product__page">
                <div class="product__info">
                    <div class="product__header">
                        <div class="product__img">
                            <img class="product__img-father" src="./assets/img/product/r1a.png" alt="">
                            <div class="propduct__img-list">
                                <img class="product__img-children" src="./assets/img/product/r1a.png" alt="">
                                <img class="product__img-children" src="./assets/img/product/r1a.png" alt="">
                                <img class="product__img-children" src="./assets/img/product/r1a.png" alt="">
                            </div>
                        </div>
                        <div class="product__body">
                            <h2>Yamaha R1 2020 Chính Hãng </h2>
                            <h1 class="product__body-price">760.000.000</h1>
                            <Button class="button-buy">Mua Ngay</Button>
                        </div>
                    </div>
                </div>
            </div>
            </div>`
        )
            
        }
        );
        
    listProductPage.innerHTML=ht.join('');
}
