let products = [{
        title: 'prod1',
        price: 5.2
    }, {
        title: 'prod2',
        price: 0.18
    },
    {
        title: 'prod3',
        price: 15
    }, {
        title: 'prod4',
        price: 25
    },
    {
        title: 'prod5',
        price: 18.9
    }, {
        title: 'prod6',
        price: 8
    },
    {
        title: 'prod7',
        price: 19
    }, {
        title: 'prod8',
        price: 63
    }
];

function filterCollection(product, min, max) {
    products = product.filter(product => product.price > min && product.price < max).sort((a, b) => a.price - b.price);

}
filterCollection(products, 15, 30)
console.log(products)