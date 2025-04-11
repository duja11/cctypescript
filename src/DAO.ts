import { indexedDB } from 'fake-indexeddb';  // Ajoute cette ligne en haut de ton fichier

class DAO {
    private db: IDBDatabase | null = null;

    constructor(private dbName: string) {}

    private openDB(): Promise<IDBDatabase> {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbName, 1);
            request.onupgradeneeded = () => {
                const db = request.result;
                if (!db.objectStoreNames.contains("coffee")) {
                    db.createObjectStore("coffee", { keyPath: "id", autoIncrement: true });
                }
            };
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(new Error("Unable to open DB"));
        });
    }

    public async saveRecord(store: string, record: any): Promise<void> {
        const db = await this.openDB();
        const transaction = db.transaction(store, "readwrite");
        const objectStore = transaction.objectStore(store);
        objectStore.add(record);
    }

    public async getAllRecords(store: string): Promise<any[]> {
        const db = await this.openDB();
        return new Promise((resolve, reject) => {
            const transaction = db.transaction(store, "readonly");
            const objectStore = transaction.objectStore(store);
            const request = objectStore.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(new Error("Unable to fetch records"));
        });
    }
}

export default DAO;
