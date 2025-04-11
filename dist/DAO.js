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
Object.defineProperty(exports, "__esModule", { value: true });
const fake_indexeddb_1 = require("fake-indexeddb"); // Ajoute cette ligne en haut de ton fichier
class DAO {
    constructor(dbName) {
        this.dbName = dbName;
        this.db = null;
    }
    openDB() {
        return new Promise((resolve, reject) => {
            const request = fake_indexeddb_1.indexedDB.open(this.dbName, 1);
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
    saveRecord(store, record) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.openDB();
            const transaction = db.transaction(store, "readwrite");
            const objectStore = transaction.objectStore(store);
            objectStore.add(record);
        });
    }
    getAllRecords(store) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.openDB();
            return new Promise((resolve, reject) => {
                const transaction = db.transaction(store, "readonly");
                const objectStore = transaction.objectStore(store);
                const request = objectStore.getAll();
                request.onsuccess = () => resolve(request.result);
                request.onerror = () => reject(new Error("Unable to fetch records"));
            });
        });
    }
}
exports.default = DAO;
