# tqjs
TQjs est un Framework basé sur Jquery une bibliotheque de Javascript, une fois installé dans votre project (site web ou application) web TQjs ameliore son experience utilisateur, en eliminant les rechargements des pages lors des navigations dans votre site et met a votre disposition des composants pres ecrit et ainsi TQjs booste votre vitesse de de

Introduction
TQjs est un Framework basé sur Jquery une bibliotheque de Javascript,
Une fois installé dans votre site web ou application web TQjs ameliore son experience utilisateur, en eliminant les rechargements des pages lors des navigations dans votre site et met a votre disposition des composants pres ecrit et ainsi TQjs booste votre vitesse de developpement
Avec TQjs toutes vos pages sont chargées au lancement du site de n'importe quelle page,
TQjs, Integre automatiquement Tailwind un framework css, avec des icons en SVG
Installation
Installer python, Le script se sert d'un serveur python pour parfaitement simmuler l'execution de votre site ou application sur un serveur distant
Telecharger le projet TQjs , dans le project vous trouverez :
*src : ce repertoire contient TQjs (Ne modifie rien a l'interieur)
*pages.json : il liste vos pages dans cette forme
[{"name":"nom de la page (home)","page":"adresse de la page (index.html)","content":""}]

ainsi vous devez lister toutes vos page a l'interieur
*setup.py : script python du serveur
*run.bat : Lanceur du serveur, apres un clique dessus il lancera le serveur et ouvrira automatiquement votre projet dans le navigateur
**.html : tous vos fichier html doivent importer jquery.min.js et tq.js dans le repertoire src.
Tailwind
Est un framework integr pour styliser votre site web savoir plus
Icons
TQjs met a votre disposition une gamme des icons en svg persolisable avec tailwind Explorer
Composants
TQjs met a votre disposition un bon nombre des composants html,css et Javascript qui n'attendent qu'a etre appele
Exemple:
* .tq-head : une classe pour inserer un entete compose du nom de la page et un bouton retour
