# Système de gestion de café

## Description

Ce projet implémente un système de gestion pour un café, conçu pour gérer les commandes de café, les ingrédients, et les personnalisations. Il permet aux utilisateurs de créer des commandes de café avec différentes options de personnalisation, et utilise une base de données IndexedDB pour stocker les données de manière locale. Le projet met également en œuvre le modèle DAO (Data Access Object) pour gérer l'accès aux données de manière structurée.

## Fonctionnalités principales

- **Gestion des commandes de café** : Permet de créer des commandes avec différents types de café (par exemple, Espresso, Latte, Cappuccino).
- **Personnalisation des commandes** : Ajout dynamique de personnalisations comme lait, sucre, crème chantilly, etc.
- **Stockage local des données** : Utilisation de IndexedDB pour stocker toutes les entités du système (comme les commandes, les types de café, et les personnalisations).
- **DAO (Data Access Object)** : Le modèle DAO est utilisé pour gérer les interactions avec la base de données de manière centralisée.
- **Opérations asynchrones** : Utilisation de `async/await` pour gérer les opérations asynchrones de manière claire et efficace.

## Structure du projet

### 1. Modèle DAO
Le modèle DAO est utilisé pour centraliser la gestion des opérations de lecture et d'écriture dans IndexedDB. Ce modèle permet de séparer la logique métier de l'accès aux données.

### 2. Entités du système
Le système gère plusieurs entités, notamment :
- **Coffee** : Représente les différents types de café (Espresso, Latte, etc.).
- **Customization** : Représente les différentes personnalisations disponibles (lait, sucre, etc.).
- **Order** : Représente une commande de café avec les options de personnalisation et les informations de la commande.
- **InventoryManager** : Assure une gestion centralisée des ingrédients disponibles pour la préparation des cafés.

### 3. Stockage dans IndexedDB
Les entités du système sont stockées dans IndexedDB pour garantir la persistance des données. Les opérations de lecture et d'écriture sont effectuées de manière asynchrone pour garantir la réactivité du système.

## Prérequis

- **Node.js** : Ce projet utilise Node.js pour exécuter le code.
- **TypeScript** : Le projet est écrit en TypeScript pour bénéficier de la sécurité de type.
- **IndexedDB** : Utilisé pour le stockage local des données dans le navigateur.

## Installation

1. **Cloner le dépôt** :
    ```bash
    git clone https://github.com/duja11/votre-repository.git
    cd votre-repository
    ```

2. **Installer les dépendances** :
    ```bash
    npm install
    ```

3. **Compiler le projet TypeScript** :
    ```bash
    npx tsc
    ```

4. **Exécuter le projet** :
    Une fois le projet compilé, vous pouvez exécuter le fichier JavaScript généré avec la commande suivante :
    ```bash
    node dist/index.js
    ```

## Fonctionnalités supplémentaires à implémenter

- **Modification et suppression de commandes** : Ajouter des fonctionnalités pour modifier et supprimer les commandes de café dans la base de données.
- **Interface utilisateur interactive** : Ajouter une interface utilisateur web pour une expérience utilisateur plus fluide (par exemple, avec React, Vue.js ou Angular).
- **Gestion des erreurs** : Renforcer la gestion des erreurs, notamment pour gérer les cas où IndexedDB est inaccessible ou vide.

## Contribuer

Les contributions sont les bienvenues ! Veuillez soumettre une pull request ou ouvrir une issue pour signaler des bugs ou proposer des améliorations.
