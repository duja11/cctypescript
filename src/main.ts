import Coffee from './Coffee';
import Customization from './Customization';

// Créer des personnalisations
const milk = new Customization('Milk', 0.5);
const sugar = new Customization('Sugar', 0.2);

// Créer un café de base (par exemple, un Espresso)
const espresso = new Coffee('Espresso', 3);

// Ajouter des personnalisations dynamiques
espresso.addCustomization(milk);
espresso.addCustomization(sugar);

// Afficher les informations du café
console.log(`Café: ${espresso.name}`);
console.log(`Personnalisations: ${espresso.getCustomizations()}`);
console.log(`Prix final: ${espresso.getPrice()}€`);
