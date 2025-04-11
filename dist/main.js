"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Coffee_1 = __importDefault(require("./Coffee"));
const Customization_1 = __importDefault(require("./Customization"));
// Créer des personnalisations
const milk = new Customization_1.default('Milk', 0.5);
const sugar = new Customization_1.default('Sugar', 0.2);
// Créer un café de base (par exemple, un Espresso)
const espresso = new Coffee_1.default('Espresso', 3);
// Ajouter des personnalisations dynamiques
espresso.addCustomization(milk);
espresso.addCustomization(sugar);
// Afficher les informations du café
console.log(`Café: ${espresso.name}`);
console.log(`Personnalisations: ${espresso.getCustomizations()}`);
console.log(`Prix final: ${espresso.getPrice()}€`);
