class InventoryManager {
    private static instance: InventoryManager;
    private ingredients: { [key: string]: number } = {};
  
    private constructor() {}
  
    public static getInstance(): InventoryManager {
      if (!InventoryManager.instance) {
        InventoryManager.instance = new InventoryManager();
      }
      return InventoryManager.instance;
    }
  
    public addIngredient(name: string, quantity: number): void {
      this.ingredients[name] = (this.ingredients[name] || 0) + quantity;
    }
  
    public getIngredient(name: string): number {
      return this.ingredients[name] || 0;
    }
  }
  
  export default InventoryManager;
  