
# Affichage de l'heure et du mode de développement
echo "💻$(date "+%H:%M:%S") /dev mode"
titre() {  
    echo "         ╔═══════════════════════════════════════════════════════════╗";
    echo "         ║               _                                           ║";
    echo "         ║   _   _ _ __ (_)_   _____ _ __ ___       _ __ ___   ___   ║";
    echo "         ║  | | | | '_ \| \ \ / / _ \ '__/ __|_____| '_ ' _' \| __|  ║";
    echo "         ║  | |_| | | | | |\ V /  __/ |  \__ \_____| | | | | | (__   ║";
    echo "         ║   \__,_|_| |_|_| \_/ \___|_|  |___/     |_| |_| |_|\___|  ║";
    echo "         ║                                                           ║";
    echo "         ╚═══════════════════════════════════════════════════════════╝";
    echo ""; 

# Définition de la fonction 'menu' pour afficher le menu avec les options:
menu() {  
    echo "  ╔═══════════════════════════════════════════════════════════════════════════╗";
    echo "  ║ [💫] [✨] [📚] [🌌] [💬] [∏] [💰] [🌴] [📱] [📡]<                 >[🛰]   ║";
    echo "  ╠═══════════════════════════════════════════════════════════════════════════╣";
    echo "  ║                                                                           ║";
    echo "  ║                     ✨ # Welcom to Univers - Ia # ✨                      ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║            [1] - Star serveur                                             ║";
    echo "  ║            [2] - Brainstorming                                            ║";
    echo "  ║            [3] - MyPrompt                                                 ║";
    echo "  ║            [4] - Generative ia                                            ║";
    echo "  ║            [5] - chatbot                                                  ║";
    echo "  ║            [6] - Exit                                                     ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ║                                                                           ║";
    echo "  ╠═══════════════════════════════════════════════════════════════════════════╣";
    echo "  ║[💻.📱]:/<                                                              /%>║";
    echo "  ╚═══════════════════════════════════════════════════════════════════════════╝"
     echo ""

read -p "Entrez votre choix : " commande

case $commande in

        1)
            make commande1
            ;;
        2)
            make commande2
            ;;
        3)
            make commande3
            ;;
        4)
            make commande4
            ;;
        5)
            make commande5
            ;;
        6)
            make commande6
            ;;
        r)
            clear
            menu
            ;;

        # Règle par défaut en cas d'entrée invalide
        *)
            echo "Entrée invalide"
            ;;
    esac
}
}
titre
menu  # Appel de la fonction pour afficher le menu: