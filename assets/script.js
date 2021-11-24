// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Angad Bhatti" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

let gbQty = document.querySelector("#qty-gb")                   //assigning var gbQty to quarySelector
let ccQty = document.querySelector("#qty-cc")                   //assigning var ccQty to quarySelector
let sugarQty = document.querySelector("#qty-sugar")             //assigning var sugarQty to quarySelector
let totalQty = document.querySelector("#qty-total")             //assigning var totalQty to quarySelector


// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`


// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb++;                                                   //incrementing gb by 1
    gbQty.textContent = gb;                                 //updating gingerbread qty box text with gb
    totalQty.textContent = gb + cc + sugar;                 //setting total = gb + cc + sugar
})

// Event listener for clicks on the "-" button for Gingerbread cookies
document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb <= 0)                                            //stops gb from decrementing below 0
        gb = 0;

    else
    {
        gb--;                                                //decrementing gb by 1
        gbQty.textContent = gb;                              //updating gingerbread qty box text with gb
        totalQty.textContent = gb + cc + sugar;              //setting total = gb + cc + sugar
    }
})


// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    cc++;                                                //incrementing cc by 1
    ccQty.textContent = cc;                              //updating chocolate chip cookies qty box text with cc
    totalQty.textContent = gb + cc + sugar;              //setting total = gb + cc + sugar
})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc <= 0)                                        //stops cc from decrementing below 0
        cc = 0;
    
    else
    {
        cc--;                                               //decrementing cc by 1
        ccQty.textContent = cc;                             //updating chocolate chip cookies qty box text with cc
        totalQty.textContent = gb + cc + sugar;             //setting total = gb + cc + sugar
    }
})


// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++;                                            //incrementing sugar by 1
    sugarQty.textContent = sugar;                       //updating sugar qty box text with sugar
    totalQty.textContent = gb + cc + sugar;             //setting total = gb + cc + sugar
})

// Event listener for clicks on the "+" button for Sugar Sprinkle cookies
document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar <= 0)                                         //stops sugar from decrementing below 0
        sugar = 0;
    
    else
    {
        sugar--;                                            //decrementing sugar by 1   
        sugarQty.textContent = sugar;                       //updating sugar qty box text with sugar
        totalQty.textContent = gb + cc + sugar;             //setting total = gb + cc + sugar
    }
})
