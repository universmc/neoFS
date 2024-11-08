SHELL := /bin/bash

COMMANDE1_MSG="✨ initialisation du serveur Telegram ✨"
COMMANDE2_MSG="✨ Initialisation de🕴 .NeoFs_Pibot.✨ "
COMMANDE3_MSG="✨ brainstorming generation d idées ✨"
COMMANDE4_MSG="✨ Initialisation du chatbot✨"
COMMANDE5_MSG="✨ Initialisation du Prompt Model"
COMMANDE6_MSG="🏗 Factory Generate Howto 📜 ✨"
COMMANDE7_MSG="🏗 Factory Start Building composant 📦 ✨"
COMMANDE8_MSG="🏗 Factory running Compose page 📦 ✨"
COMMANDE9_MSG="✨ Mise à jour du repertoire sur github✨"
COMMANDE10_MSG="✨Exit session✨"

# Ajoutez une règle pour chaque commande
commande1:
	@echo "${COMMANDE1_MSG}"
	@./srv.sh

commande2:
	@echo "${COMMANDE2_MSG}"
	@node neoFs_Pibot.js

commande3:
	@echo "${COMMANDE3_MSG}"
	@node .setup/did.js

commande4:
	@echo "${COMMANDE4_MSG}"
	@node .setup/chatCompletion.js

commande5:
	@echo "${COMMANDE5_MSG}"
	@node .setup/myprompt.js

commande6:
	@echo "${COMMANDE5_MSG}"
	@node build/howto.js

commande7:
	@echo "${COMMANDE5_MSG}"
	@node build/Composants.js

commande8:
	@echo "${COMMANDE5_MSG}"
	@node src/app/composer.js

commande9:
	@echo "${COMMANDE9_MSG}"
	@git add .
	@git commit -m "Update"
	@git push
	@echo "✨ Mise à jour terminée✨"
commande10:
	@echo "${COMMANDE10_MSG}"

commandeg:
	@echo "${COMMANDE10_MSG}"
	@npm run start

tasks:
	@node .setup/role.mjs showTasks

# Tâche Make pour ajouter une tâche
add-task:
	@node ./role.mjs addTask $(task)


menu :
	@echo "Welcom To cycliq Economical system."
	@echo""
	@echo"╔═════════════════════════════════════╗     ╔═════════════════════════════════════════════════════════════════════╗"
	@echo"╠═══════════ ✨ Pi Console ═══════════╣     ║  [💫] [💬] [📚] [🌌] [✨] [⚡️] [💰] [🌴] [📱] [📡]              [🛰]║"
	@echo"║                                     ║     ╠═════════════════════════════════════════════════════════════════════╣"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║ ║                                                                     ║"
	@echo"║                                     ║      ║                                                                    ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"║                                     ║     ║                                                                     ║"
	@echo"╠═════════════════════════════════════╣     ╠═════════════════════════════════════════════════════════════════════╣"
	@echo"║(∏)                                  ║     ║[💻.📱]:/<                                                        /%>║"
	@echo"╚═════════════════════════════════════╝     ╚═════════════════════════════════════════════════════════════════════╝"	
	@echo""

MAGIC_TARGETS := codex build rep file script clean

all: $(MAGIC_TARGETS)

srv : run start

start:
	@npm start
run:
	@node ./srv/srv.js


update:
	@echo "✨ Mise en état du dossier sur github✨"
	@git add .
	@git commit -m "test"
	@git push
	@echo "✨ Mise à jour terminée✨"
S1:
	@echo "✨ Mrun session brainstorming ✨"
	@git add .
	@git commit -m "sesssion brainstorm"
	@git push
	@echo "✨ Mise à jour terminée✨"

.PHONY: sh commande1 commande2 commande3 commande4 commande5