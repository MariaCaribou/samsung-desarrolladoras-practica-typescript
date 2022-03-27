"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const direccion_1 = require("./direccion");
const mail_1 = require("./mail");
const telefono_1 = require("./telefono");
const persona_1 = require("./persona");
let agenda = [];
let personaEncontrada = null;
// Función para buscar una persona por dni en la agenda
function buscarPersonaPorDni(dni) {
    for (let p of agenda) {
        if (dni == p.dni) {
            return p;
        }
    }
    return null;
}
// Función para recorrer cada persona de la agenda y mostrar esa información en pantalla
function mostrarAgenda() {
    for (let p of agenda) {
        console.log(p);
    }
}
// Añadimos tres personas a la agenda 
agenda.push(new persona_1.Persona("Juan", "Perez Lopez", 28, "38912376F", "28/11/1993", "Rojo", "Masculino", [new direccion_1.Direccion("Calle Manuel de Valla", 5, 2, "C", 28224, "Pozuelo de Alarcon", "Madrid")], [new mail_1.Mail("Trabajo", "juanperezlopez@gmail.com")], [new telefono_1.Telefono("movil", 623456789)], "Empleado 1"));
agenda.push(new persona_1.Persona("Miriam", "Gomez Solo", 35, "25674895G", "23/02/1987", "Azul", "Femenino", [new direccion_1.Direccion("Calle Atlantico", 3, 6, "A", 28400, "Collado Villalba", "Madrid")], [new mail_1.Mail("Trabajo", "juanperezlopez@gmail.com")], [new telefono_1.Telefono("movil", 623456789)], "Empleada 2"));
agenda.push(new persona_1.Persona("Andromeda", "Silvina Salinas", 61, "98765432M", "11/05/1961", "Amarillo", "Femenino", [new direccion_1.Direccion("Calle Marte", 42, 1, "H", 28200, "San Lorenzo del Escorial", "Madrid")], [new mail_1.Mail("Trabajo", "andromedasilvinasalinas@gmail.com")], [new telefono_1.Telefono("movil", 664110900)], "Empleada 3"));
console.log("\n\n");
console.log("==================================================");
console.log("Agenda original");
console.log("==================================================");
mostrarAgenda();
// Buscamos una persona por su dni y, si existe en la agenda, añadimos nueva información
personaEncontrada = buscarPersonaPorDni("38912376F");
if (personaEncontrada != null) {
    personaEncontrada.añadirDireccion(new direccion_1.Direccion("Calle Grande", 6, 2, "F", 28456, "Guadarrama", "Madrid"));
    personaEncontrada.añadirMail(new mail_1.Mail("Personal", "j.perezl@hotmail.com"));
    personaEncontrada.añadirTelefono(new telefono_1.Telefono("fijo", 678531937));
}
console.log("\n\n");
console.log("==================================================");
console.log("Agenda modificada");
console.log("==================================================");
mostrarAgenda();
