import DAO from './DAO';

// Classe représentant un café
class Coffee {
  constructor(
    public id: number,
    public name: string,
    public size: string,
    public price: number
  ) {}
}

// Classe représentant la personnalisation du café
class Customization {
  constructor(public name: string, public price: number) {}
}

// Gestionnaire des ingrédients
class InventoryManager {
  private static instance: InventoryManager;
  private inventory: Map<string, number>;

  private constructor() {
    this.inventory = new Map();
  }

  // Méthode pour obtenir l'instance unique de InventoryManager
  public static getInstance(): InventoryManager {
    if (!InventoryManager.instance) {
      InventoryManager.instance = new InventoryManager();
    }
    return InventoryManager.instance;
  }

  // Ajouter un ingrédient à l'inventaire
  public addIngredient(ingredient: string, quantity: number): void {
    this.inventory.set(ingredient, quantity);
  }

  // Vérifier la quantité d'un ingrédient
  public checkIngredient(ingredient: string): number | undefined {
    return this.inventory.get(ingredient);
  }
}

// Classe principale de gestion des commandes de café
class CoffeeOrder {
  private dao: DAO;
  private inventoryManager: InventoryManager;

  constructor() {
    this.dao = new DAO('coffee_shop_db');  // Passer le nom de la base de données
    this.inventoryManager = InventoryManager.getInstance();
  }

  // Sauvegarder une commande de café
  public async saveOrder(coffee: Coffee, customizations: Customization[]): Promise<void> {
    const order = {
      coffee,
      customizations,
      date: new Date().toISOString(),
    };

    // Sauvegarder la commande dans IndexedDB via DAO
    await this.dao.saveRecord('coffee', order);
    console.log('Order saved:', order);
  }

  // Récupérer toutes les commandes
  public async getAllOrders(): Promise<any[]> {
    const orders = await this.dao.getAllRecords('coffee');
    console.log('All orders:', orders);
    return orders;
  }

  // Ajouter un ingrédient à l'inventaire
  public addIngredientToInventory(ingredient: string, quantity: number): void {
    this.inventoryManager.addIngredient(ingredient, quantity);
  }

  // Vérifier l'inventaire
  public checkInventory(ingredient: string): number | undefined {
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
