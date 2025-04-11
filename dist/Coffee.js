"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Coffee {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.customizations = [];
    }
    // Ajouter une personnalisation
    addCustomization(customization) {
        this.customizations.push(customization);
    }
    // Calculer le prix total, incluant les personnalisations
    getPrice() {
        return this.price + this.customizations.reduce((total, customization) => total + customization.price, 0);
    }
    // Afficher les personnalisations
    getCustomizations() {
        return this.customizations.map(custom => custom.name).join(', ') || 'Aucune personnalisation';
    }
}
exports.default = Coffee;
