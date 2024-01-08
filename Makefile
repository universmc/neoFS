# Chemins de dossiers
CLIENT_DIR := client
SERVER_DIR := server

# Commandes de démarrage
start-client:
	cd $(CLIENT_DIR) && npm start

start-srv:
	@echo "Démarrage du serveur PHP et compilation SASS..."
	@php -S localhost:5011 &
	@npm run style &
	@npm run srv-js

# Installation des dépendances
install-client:
	cd $(CLIENT_DIR) && npm install

install-server:
	cd $(SERVER_DIR) && npm install

# Commande pour lancer à la fois le client et le serveur (si nécessaire)
start-all: start-server start-client

# Commandes pour les tests, le déploiement, etc.
test:
	# Ajouter les commandes de test ici

deploy:
	# Ajouter les commandes de déploiement ici

# Autres commandes utiles
.PHONY: start-client start-server install-client install-server test deploy