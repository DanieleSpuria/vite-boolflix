Booflix
===

**Milestone 0:**  
Progettare la struttura del global state sulla linea degli esercizi svolti nei giorni precedenti.  

**Milestone 1:**  
Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.  
Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato: 

- Titolo  
- Titolo Originale  
- Lingua  
- Voto  

## Sviluppo
- markup per fare una searchbar, con input e bottone, e sotto un container in un cui poi andranno le card con le informazioni dei film
- funzione che avvia la chiamata API e restituisce i risultati 

**Milestone 2:**  
Trasformiamo la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).  

Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)  

## Sviluppo 
- funzione per inserire le immagini delle bandiere 
- condizione che mostra le immagini se la lingua del film è inclusa tra le immagini delle bandiere, altrimenti scrive il testo
- select per impostare la ricerca su film o serie tv
- nuovo url per la chiamata sulle serie tv
- impostare le diverse opzioni per stampare i risultati

