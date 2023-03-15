# Générateur d’exercices

## 1. Objectif

### Petit programme de questions de maths sur les discriminants. 
<br/>
Ce programme propose des énoncés aléatoires de la même difficulté que les exemples. Il faut écrire une fonction par type d’exercice, qui écrit (dans la console par exemple) la question posée ainsi que la solution attendue. Ceci afin que les enseignants puissent le proposer à leurs élèves.

<br/><br/><br/>

## 2. Détail

#### Voici quelques exercices proposés par des professeurs de mathématiques
<br/>

### Trouver le discriminant de :
```sh 
x² + 5x + 4
```
>Discriminant carré
<br/>

### Trouver le discriminant de :
```sh
x² + 5x + 5
```
>Discriminant non carré mais petit
<br/>

### Trouver le discriminant de :
```sh
x² + 8x + 4
```
>Discriminant non carré et grand
<br/>

### Trouver le discriminant de :
```sh
x² + 2x + 8
```
>Discriminant négatif

<br/><br/><br/>

## 3. Explication

Pour chaque exemple 
```sh 
ax² + bx + c
````
déterminer a,b et c pour calculer delta Δ 

```sh 
Δ = b² - 4ac
````

Le discriminant peut prendre trois valeurs différentes:

| cas | explication | solution |
| ------ | ------ | ------ |
|Δ est positif | l'équation a deux racines réelles distinctes | x₁=-b-√Δ/2a et x₂=-b+√Δ/2a |
|Δ est nul | l'équation a une racine réelle double | x₀=-(b/2a) |
|Δ est négatif| alors l'équation polynomiale n'a pas de racines réelles, mais a deux racines complexes conjuguées| pas de solution réelle |

Exemple de l'exercie 1 <br/>

```sh 
x² + 5x + 4

a = 1, 
b = 5,
c = 4 

soit 
Δ = b² - 4ac 
Δ = (5)² - 4 * 1 * 4
Δ = 25 - 16

donc :
Δ = 9 

Pour aller plus loin :
x₁=-5-√9/2*1 et x₂=-5+√9/2*1
x₁=1 et x₂=4
s = {1;4}
```
<br/><br/><br/>

## 4. Installation et initialisation du programme

- Installation
```sh
npm install
````

- Initialisation (démarrage du serveur + tailwind css) 
```sh
npm run dev

npm run tail
````
- Analyse du code

```sh
npm run lint
````