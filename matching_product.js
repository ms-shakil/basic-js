const products =[
{name:"redmi note 12 phone",price:1200},
{name:" asus note 12 laptop",price:1200},
{name:"samsung note 12 phone",price:44400},
{name:" vivo note 12 laptop",price:1200},
{name:"redmi note 12 watch",price:1200},
{name:" one plus note 12 phone",price:3300}
]

function SearchProduct(products,item){
    for(const product of products){
        if(product.name.indexOf("phone") != -1){
            console.log(product)
        }
        
    }
}

SearchProduct(products,"phone")