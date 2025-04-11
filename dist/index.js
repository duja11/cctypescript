"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DAO_1 = __importDefault(require("./DAO"));
// Classe représentant un café
class Coffee {
    constructor(id, name, size, price) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.price = price;
    }
}
// Classe représentant la personnalisation du café
class Customization {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
// Gestionnaire des ingrédients
class InventoryManager {
    constructor() {
        this.inventory = new Map();
    }
    // Méthode pour obtenir l'instance unique de InventoryManager
    static getInstance() {
        if (!InventoryManager.instance) {
            InventoryManager.instance = new InventoryManager();
        }
        return InventoryManager.instance;
    }
    // Ajouter un ingrédient à l'inventaire
    addIngredient(ingredient, quantity) {
        this.inventory.set(ingredient, quantity);
    }
    // Vérifier la quantité d'un ingrédient
    checkIngredient(ingredient) {
        return this.inventory.get(ingredient);
    }
}
// Classe principale de gestion des commandes de café
class CoffeeOrder {
    constructor() {
        this.dao = new DAO_1.default('coffee_shop_db'); // Passer le nom de la base de données
        this.inventoryManager = InventoryManager.getInstance();
    }
    // Sauvegarder une commande de café
    saveOrder(coffee, customizations) {
        return __awaiter(this, void 0, void 0, function* () {
            const order = {
                coffee,
                customizations,
                date: new Date().toISOString(),
            };
            // Sauvegarder la commande dans IndexedDB via DAO
            yield this.dao.saveRecord('coffee', order);
            console.log('Order saved:', order);
        });
    }
    // Récupérer toutes les commandes
    getAllOrders() {
        return __awaiter(this, void 0, void 0, function* () {
            const orders = yield this.dao.getAllRecords('coffee');
            console.log('All orders:', orders);
            return orders;
        });
    }
    // Ajouter un ingrédient à l'inventaire
    addIngredientToInventory(ingredient, quantity) {
        this.inventoryManager.addIngredient(ingredient, quantity);
    }
    // Vérifier l'inventaire
    checkInventory(ingredient) {
        return this.inventoryManager.checkIngredient(ingredient);
    }
}
// Exécution de l'application
const coffeeOrderSystem = new CoffeeOrder();
// Créer un café
const espresso = new Coffee(1, 'Espresso', 'Small', 2.5);
// Créer des personnalisations
const milk = new Customization('Milk', 0.5);
const sugar = new Customization('Sugar', 0.2);
// Sauvegarder la commande
coffeeOrderSystem.saveOrder(espresso, [milk, sugar]);
// Ajouter un ingrédient à l'inventaire
coffeeOrderSystem.addIngredientToInventory('Coffee Beans', 100);
// Vérifier l'inventaire
console.log('Coffee Beans in inventory:', coffeeOrderSystem.checkInventory('Coffee Beans'));
