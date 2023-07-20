import ChickenDish from "./mongoDB/models/dishModel.js";
console.log("inside db connection");

export const saveDishes = async () => {
  try {
    console.log("inside try bl");

    const chickenDishes = [
      {
        name: "Tandoori Chicken",
        portions: [
          { size: "Full", measurement: "piece(s)", weight: 300 },
          { size: "Half", measurement: "piece(s)", weight: 150 },
        ],
      },
      {
        name: "Chicken Biryani",
        portions: [
          { size: "Regular", measurement: "plate", weight: 400 },
          { size: "Family", measurement: "plate", weight: 800 },
        ],
      },
      {
        name: "Chicken Shawarma",
        portions: [
          { size: "Regular", measurement: "wrap", weight: 250 },
          { size: "Large", measurement: "wrap", weight: 400 },
        ],
      },
      {
        name: "Chicken Fried Rice",
        portions: [
          { size: "Regular", measurement: "plate", weight: 300 },
          { size: "Large", measurement: "plate", weight: 500 },
        ],
      },
      {
        name: "Chicken Chettinad",
        portions: [
          { size: "Regular", measurement: "bowl", weight: 300 },
          { size: "Large", measurement: "bowl", weight: 500 },
        ],
      },
      {
        name: "Chicken Hyderabadi Biryani",
        portions: [
          { size: "Regular", measurement: "plate", weight: 400 },
          { size: "Family", measurement: "plate", weight: 800 },
        ],
      },
      {
        name: "Chicken 65",
        portions: [
          { size: "Regular", measurement: "plate", weight: 200 },
          { size: "Large", measurement: "plate", weight: 350 },
        ],
      },
      {
        name: "Chicken Reshmi Kebab",
        portions: [
          { size: "Regular", measurement: "skewer", weight: 100 },
          { size: "Large", measurement: "skewer", weight: 150 },
        ],
      },
      {
        name: "Chicken Kathi Roll",
        portions: [
          { size: "Regular", measurement: "roll", weight: 200 },
          { size: "Large", measurement: "roll", weight: 300 },
        ],
      },
      {
        name: "Chicken Hariyali Tikka",
        portions: [
          { size: "Regular", measurement: "skewer", weight: 150 },
          { size: "Large", measurement: "skewer", weight: 250 },
        ],
      },
      {
        name: "Chicken Kolhapuri",
        portions: [
          { size: "Regular", measurement: "bowl", weight: 300 },
          { size: "Large", measurement: "bowl", weight: 500 },
        ],
      },
      {
        name: "Chicken Lollipop",
        portions: [
          { size: "Regular", measurement: "piece(s)", weight: 50 },
          { size: "Large", measurement: "piece(s)", weight: 80 },
        ],
      },
      {
        name: "Chicken Manchurian",
        portions: [
          { size: "Regular", measurement: "bowl", weight: 250 },
          { size: "Large", measurement: "bowl", weight: 400 },
        ],
      },
      {
        name: "Chicken Malai Tikka",
        portions: [
          { size: "Regular", measurement: "skewer", weight: 150 },
          { size: "Large", measurement: "skewer", weight: 250 },
        ],
      },
      {
        name: "Chicken Popcorn",
        portions: [
          { size: "Regular", measurement: "box", weight: 200 },
          { size: "Large", measurement: "box", weight: 350 },
        ],
      },
      {
        name: "Chicken Tandoori",
        portions: [
          { size: "Full", measurement: "piece(s)", weight: 300 },
          { size: "Half", measurement: "piece(s)", weight: 150 },
        ],
      },
      {
        name: "Chicken Shawaya",
        portions: [
          { size: "Regular", measurement: "plate", weight: 300 },
          { size: "Large", measurement: "plate", weight: 500 },
        ],
      },
      {
        name: "Chicken Malai Kebab",
        portions: [
          { size: "Regular", measurement: "skewer", weight: 100 },
          { size: "Large", measurement: "skewer", weight: 150 },
        ],
      },
      {
        name: "Chicken Satay",
        portions: [
          { size: "Regular", measurement: "skewer", weight: 100 },
          { size: "Large", measurement: "skewer", weight: 150 },
        ],
      },
      {
        name: "Chicken Sizzler",
        portions: [
          { size: "Regular", measurement: "plate", weight: 400 },
          { size: "Large", measurement: "plate", weight: 600 },
        ],
      },
      {
        name: "Chicken Burger",
        portions: [
          { size: "Regular", measurement: "burger", weight: 200 },
          { size: "Large", measurement: "burger", weight: 300 },
        ],
      },
      {
        name: "Chicken Nuggets",
        portions: [
          { size: "Regular", measurement: "serving", weight: 100 },
          { size: "Large", measurement: "serving", weight: 150 },
        ],
      },
      {
        name: "Chicken Popcorn",
        portions: [
          { size: "Regular", measurement: "box", weight: 200 },
          { size: "Large", measurement: "box", weight: 300 },
        ],
      },
      {
        name: "Crispy Fried Chicken",
        portions: [
          { size: "Regular", measurement: "piece(s)", weight: 100 },
          { size: "Large", measurement: "piece(s)", weight: 150 },
        ],
      },
      {
        name: "Spicy Chicken Wings",
        portions: [
          { size: "Regular", measurement: "serving", weight: 150 },
          { size: "Large", measurement: "serving", weight: 250 },
        ],
      },
      {
        name: "Chicken Sandwich",
        portions: [
          { size: "Regular", measurement: "sandwich", weight: 200 },
          { size: "Large", measurement: "sandwich", weight: 300 },
        ],
      },
      {
        name: "Chicken Wrap",
        portions: [
          { size: "Regular", measurement: "wrap", weight: 200 },
          { size: "Large", measurement: "wrap", weight: 300 },
        ],
      },
      {
        name: "Chicken Strips",
        portions: [
          { size: "Regular", measurement: "serving", weight: 150 },
          { size: "Large", measurement: "serving", weight: 250 },
        ],
      },
      {
        name: "Chicken Tenders",
        portions: [
          { size: "Regular", measurement: "serving", weight: 150 },
          { size: "Large", measurement: "serving", weight: 250 },
        ],
      },
      {
        name: "Grilled Chicken Sub",
        portions: [
          { size: "Regular", measurement: "sub", weight: 250 },
          { size: "Large", measurement: "sub", weight: 400 },
        ],
      },
      {
        name: "Chicken Quesadilla",
        portions: [
          { size: "Regular", measurement: "piece(s)", weight: 200 },
          { size: "Large", measurement: "piece(s)", weight: 300 },
        ],
      },
      {
        name: "Buffalo Chicken Pizza",
        portions: [
          { size: "Regular", measurement: "slice", weight: 150 },
          { size: "Large", measurement: "slice", weight: 200 },
        ],
      },
      {
        name: "Chicken Tacos",
        portions: [
          { size: "Regular", measurement: "taco", weight: 150 },
          { size: "Large", measurement: "taco", weight: 200 },
        ],
      },
      {
        name: "Chicken Shawarma Wrap",
        portions: [
          { size: "Regular", measurement: "wrap", weight: 250 },
          { size: "Large", measurement: "wrap", weight: 350 },
        ],
      },
      {
        name: "Chicken Caesar Salad",
        portions: [
          { size: "Regular", measurement: "bowl", weight: 300 },
          { size: "Large", measurement: "bowl", weight: 450 },
        ],
      },
    ];

    const modifiedChickenDishes = chickenDishes.map((dish) => ({
      ...dish,
      portions: dish.portions.map((portion) => ({
        ...portion,
        size: {
          name: portion.size,
          measurement: portion.measurement,
          weight: portion.weight,
        },
      })),
    }));

    //iterating through chickenDishes
    chickenDishes.forEach((dishData) => {
      const dish = new ChickenDish(dishData);
      dish
        .save()
        .then((savedDish) => {
          console.log("Dish saved:", savedDish);
        })
        .catch((error) => {
          console.error("Error saving dish:", error);
        });
    });
  } catch (error) {
    console.error("Error saving dishes:", error);
  }
};
