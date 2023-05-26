season = '';
seasonCoefficient = null;

while (season !== 'winter' && season !== 'summer') {
    season = prompt('Winter or Summer period?').toLowerCase();
} 

if (season === 'winter') {
    seasonCoefficient = 2;
} else if (season === 'summer') {
    seasonCoefficient = 0.8;
}

category = '';
products = '';
price = '';

vegetables = [['cabbage', 8], ['avocado', 30], ['tomato', 10]];

fruits = [['grapes', 20], ['raspberry', 25], ['coconut', 50]];

while (category !== 'vegetables' && category !== 'fruits') {
    category = prompt('Choose category in which you want to buy products: vegetables or fruits?').toLowerCase();
}

if (category === 'vegetables') {
    while (products !== 'cabbage' && products !== 'avocado' && products !== 'tomato') {
    products = prompt('Choose product from category vegetables: cabbage, avocado, tomato.').toLowerCase();
    }

    for (i = 0; i !== vegetables.length; i++) {
        element = vegetables[i];
        if (element.indexOf(products) == 0) {
        price = vegetables[i][1];
        }    
    }
}

if (category === 'fruits') {
    while (products !== 'grapes' && products !== 'raspberry' && products !== 'coconut') {
    products = prompt('Choose product from category fruits: grapes, raspberry, coconut.').toLowerCase();
    }

    for (i = 0; i !== fruits.length; i++) {
        element = fruits[i];
        if (element.indexOf(products) == 0) {
            price = fruits[i][1];
            
        }    
    }
}


productQuantity = 0;

do {
    productQuantity = +prompt(`Enter count of ${products}`);
} while (isNaN(productQuantity) || productQuantity <= 1); 

result = (Math.ceil(price * productQuantity * seasonCoefficient));

document.write('<div class="product" align="center" style="width: 300px; height: 300px; margin: auto; background-color: grey;">');
document.write(`<img src='images/${category}/${products}.svg' width="100" height="100">`);
document.write(`<p>Selected product: <b>${products}</b></p>`);
document.write(`<p>Count of ${products}s: <b>${productQuantity}</b></p>`);
document.write(`<p>Selected period: <b>${season}</b></p>`);
document.write(`<p>Selected category: <b>${category}</b></p>`);
document.write(`<p>Final sum: <b>${result} UAH</b></p>`);
document.write('</div>');