"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryManager {
    constructor() {
        this.ingredients = {};
    }
    static getInstance() {
        if (!InventoryManager.instance) {
            InventoryManager.instance = new InventoryManager();
        }
        return InventoryManager.instance;
    }
    addIngredient(name, quantity) {
        this.ingredients[name] = (this.ingredients[name] || 0) + quantity;
    }
    getIngredient(name) {
        return this.ingredients[name] || 0;
    }
}
exports.default = InventoryManager;
