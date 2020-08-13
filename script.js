"use strict";
let mountains = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];
//////////////////////
const findNameOfTallestMountain = (array) => {
    if (array.length > 0) {
        let currentMountain = array[0];
        array.forEach((mountain) => {
            if (mountain.height > currentMountain.height) {
                currentMountain = mountain;
            }
        });
        return currentMountain.name;
    }
    else {
        return "";
    }
};
let tallestMountain = findNameOfTallestMountain(mountains);
console.log(tallestMountain);
let products = [
    {
        name: "Echeveria Succulent",
        price: 2.5,
    },
    {
        name: "Pincushion Cactus",
        price: 7.5,
    },
    {
        name: "Albiflora Cactus",
        price: 12,
    },
    {
        name: "Aloe Plant",
        price: 4,
    },
];
const calcAverageProductPrice = (array) => {
    if (array.length > 0) {
        let sum = 0;
        array.forEach((plant) => {
            sum += plant.price;
        });
        return sum / array.length;
    }
    else {
        return 0;
    }
};
let average = calcAverageProductPrice(products);
console.log(average);
let inventory = [
    {
        product: { name: "motor", price: 10.0 },
        quantity: 10,
    },
    {
        product: { name: "sensor", price: 12.5 },
        quantity: 4,
    },
    {
        product: { name: "LED", price: 1.0 },
        quantity: 20,
    },
];
