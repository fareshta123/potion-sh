// 🌟 Step 1: Start the Game - Gather Player Info
let playerName = prompt("Welcome to the Magic Potion Shop! What is your name?");
let playerAge = Number(prompt("How old are you?"));
let favoriteElement = prompt("What is your favorite element? (fire, water, earth, air)");

alert(`Welcome ${playerName}! At ${playerAge}, you're just the right age to master the powers of ${favoriteElement}!`);

// 🌟 Step 2: Set Up Potion Stock
let potions = ['Healing Potion', 'Mana Elixir', 'Invisibility Draft', 'Fire Resistance'];

let potionStock = {
  'Healing Potion': { quantity: 5, price: 10 },
  'Mana Elixir': { quantity: 3, price: 15 },
  'Invisibility Draft': { quantity: 2, price: 25 },
  'Fire Resistance': { quantity: 4, price: 20 }
};

// Player's gold pouch
let gold = 0;

// 🌟 Step 3: Handle Customers
let serving = true;

while (serving) {
  let customer = prompt("A customer is here! Take their order? (yes/no)");
  
  if (!customer) {
    alert("Please enter 'yes' or 'no'.");
    continue;
  }

  customer = customer.toLowerCase();

  if (customer === 'yes') {
    // Show menu
    let menu = "Potion Menu:\n";
    for (let i = 0; i < potions.length; i++) {
      let p = potions[i];
      let stock = potionStock[p].quantity;
      let price = potionStock[p].price;
      menu += `${i + 1}. ${p} - ${price} gold (Stock: ${stock})\n`;
    }
    alert(menu);

    // Ask for order
    let choice = prompt("Which potion would the customer like? Enter the potion name exactly:");

    if (!choice) {
      alert("You must enter a potion name.");
      continue;
    }

    if (potions.includes(choice)) {
      if (potionStock[choice].quantity > 0) {
        // Process order
        potionStock[choice].quantity--;
        gold += potionStock[choice].price;
        alert(`You sold a ${choice}! Gold earned: ${potionStock[choice].price}.\nTotal gold: ${gold}`);
      } else {
        alert(`Sorry! ${choice} is out of stock.`);
      }
    } else {
      alert("That potion is not on the menu.");
    }

  } else if (customer === 'no') {
    alert(`You decide to take a break. So far, you've earned ${gold} gold.`);
    serving = false;
  } else {
    alert("Please enter 'yes' or 'no'.");
  }
}

alert(`Thanks for playing, ${playerName}! You earned a total of ${gold} gold. See you next time!`);