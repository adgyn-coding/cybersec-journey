# Première observation HTTP avec curl

**Date :** 12 novembre 2026

## Ce que j’ai compris

`curl` est un outil en ligne de commande qui peut envoyer une requête à un serveur. Dans l’exercice, j’ai demandé au serveur local :

```text
GET /hello?name=toi
```

`GET` demande une ressource au serveur. `/hello` est le chemin demandé et `?name=toi` est une information ajoutée à ce chemin. Dans notre exercice, il n’y a pas de fonction spéciale `/hello` : le gestionnaire du serveur répond avec le même texte pour cette requête.

Le serveur a répondu avec `200 OK`, ce qui indique que la requête a réussi, puis a renvoyé ce texte :

```text
Hello from the local learning server.
```

## L’adresse locale

`127.0.0.1` désigne l’ordinateur sur lequel le programme tourne. Ici, `Node.js` écoute sur le port `3000`, donc `http://127.0.0.1:3000` permet à un programme sur ce même ordinateur de lui envoyer une requête.

## L’analogie de l’adresse et du colis

Je peux imaginer l’URL comme l’adresse du destinataire, le navigateur comme le livreur et la requête HTTP comme le message livré au serveur. `http` ou `https` indique comment la communication se fait. Dans l’exercice, c’est `curl` — pas le navigateur — qui a envoyé la requête.

## Ce qui reste à revoir

- Les détails des lignes d’en-tête HTTP affichées par `curl`.
- Comment le navigateur transforme une URL en requête.
