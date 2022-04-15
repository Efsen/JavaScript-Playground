// numbers

let price = 100
let tax = 0.18
let priceTax =  price * tax
let total = price + priceTax 
console.log("Fiyat:", price ,"Tax:", tax , "Tax Price:", priceTax , "Total:" , total ) 

//arttırma ve eksiltme
let counter = 320
counter =  counter + 1;
counter += 1;
counter ++;
console.log(counter)  

/*--------------*/

counter --;
counter -= 1;
counter = counter - 1;
console.log(counter)  

/*--------------*/

counter *= 10;
console.log(counter)

/*--------------*/

counter /= 2;
console.log(counter)  

//process priority

console.log( 2 + 3 * 10 )
console.log( (2 + 3) * 10 )

// mod
//sayı tek mi çift mi
console.log( 14 % 2) // 0 ise çift 1 ise tek

//8 ürün alan kolye tum urunler sigiyor mu ?
console.log("Koli Koli Örneği:" , 18 % 8 )

// üst alma

console.log( 2 * 2 * 2 * 2)
console.log( 2 ** 4)

//aşağı yuvarlama -> Math.floor

console.log( "Aşağı Yuvarlanan Sayı:", Math.floor(1.8) ) 

//yukarı yuvarlama -> Math.ceil

console.log( "Yukarı Yuvarlanan Sayı:", Math.ceil(1.6) )

//yakına yuvarlama -> Math.round
console.log( "Yuvarlanan sayı:", Math.round(15.6) )
console.log( "Yuvarlanan sayı:", Math.round(15.3) )


/* https://www.hackerrank.com/challenges/js10-arithmetic-operators/problem?isFullScreen=false*/
/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    area = length * width
    // Write your code here
    
    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (length + width ) 
    return perimeter;
}

