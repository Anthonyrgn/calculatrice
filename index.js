//! CREER LES 4 FONCTIONS

//? ADDITION
function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

//? MULTIPLICATION
function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

//? SOUSTRACTION
function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}

//? DIVISION
function division(nombreA, nombreB) {

    if (nombreB === 0){
        throw new Error("Impossible de diviser par 0");
    }

    return nombreA / nombreB;
}

//! DEFINIR LE MODE DE LA CALCULATRICE

const choix = Number(
    prompt(
        "Que souhaitez-vous faire ? \n\n 1- Addition\n 2 - Multiplication \n 3 - Soustraction \n 4 - Division"
    )
);
do {

} while (choix !== 1 && choix !== 2 && choix !== 3 && choix !== 4);

const premierNombre = Number(prompt("Entrez un premier nombre :"));
const deuxiemeNombre = Number(prompt("Entrez un deuxieme nombre : "));
//! DEUX NOMBRE QUE L'ON SOUHAITE UTILISEE
do {
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

let result;

try {
    switch (choix) {
        case 1:
            result = addition(premierNombre, deuxiemeNombre);
            break;
        case 2:
            result = multiplication(premierNombre, deuxiemeNombre);
            break;
        case 3:
            result = soustraction(premierNombre, deuxiemeNombre);
            break;
        case 4:
            result = division(premierNombre, deuxiemeNombre);
            break;
        default:
            throw new Error("Une erreur est survenue");
    }

    alert("Voici le resultat : " + result);

} catch (error) {
    alert(error);
}