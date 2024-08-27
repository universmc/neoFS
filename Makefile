SHELL := /bin/bash

COMMANDE1_MSG="✨ initialisation du serveur Telegram ✨"
COMMANDE2_MSG="✨ brainstorming generation d idées ✨"
COMMANDE3_MSG="✨ initialisation MyPrompt ✨"
COMMANDE4_MSG="✨ generation docomentation Projet"
COMMANDE5_MSG="✨ Initialisation du chatbot✨"
COMMANDE6_MSG="✨ Mise en état du dossier sur github✨"
COMMANDE7_MSG="✨ ...✨"
COMMANDE8_MSG="✨ ...✨"
COMMANDE9_MSG="✨ ...✨"
COMMANDE10_MSG="✨...✨"

# Ajoutez une règle pour chaque commande
commande1:
	@echo "${COMMANDE1_MSG}"
	@node .setup/Pi-ia_bot.js

commande2:
	@echo "${COMMANDE2_MSG}"
	@node .setup/did.js

commande3:
	@echo "${COMMANDE3_MSG}"
	@node .setup/myprompt.js

commande4:
	@echo "${COMMANDE4_MSG}"
	@node ./chatCompletion.js

commande5:
	@echo "${COMMANDE5_MSG}"
	@node chatCompletion.js

commande6:
	@echo "${COMMANDE5_MSG}"


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