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

**Milestone 3:**  
In questa milestone come prima cosa aggiungiamo la copertina del film o della serie al nostro elenco.    
Ci viene passata dall’API solo la parte finale dell’URL, questo perché poi potremo generare da quella porzione di URL tante dimensioni diverse.   Dovremo prendere quindi l’URL base delle immagini di TMDB: https://image.tmdb.org/t/p/ per poi aggiungere la dimensione che vogliamo generare (troviamo tutte le dimensioni possibili a questo link: https://www.themoviedb.org/talk/53c11d4ec3a3684cf4006400) per poi aggiungere la parte finale dell’URL passata dall’API.  
Esempio di URL:
https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

Trasformiamo poi il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).  
Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote :P).

## Sviluppo
- immagine con poster dei risultati o immagine non disponibile 
- dividere per due il voto medio, renderlo intero col fixed() e arrotondare con Math.ceil() e associarlo alle icone star con un ciclo 


