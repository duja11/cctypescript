import Customization from './Customization';

class Coffee {
  private customizations: Customization[] = [];

  constructor(public name: string, public price: number) {}

  // Ajouter une personnalisation
  addCustomization(customization: Customization): void {
    this.customizations.push(customization);
  }

  // Calculer le prix total, incluant les personnalisations
  getPrice(): number {
    return this.price + this.customizations.reduce((total, customization) => total + customization.price, 0);
  }

  // Afficher les personnalisations
  getCustomizations(): string {
    return this.customizations.map(custom => custom.name).join(', ') || 'Aucune personnalisation';
  }
}

export default Coffee;
