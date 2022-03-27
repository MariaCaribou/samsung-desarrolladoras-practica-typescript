import { Direccion } from "./direccion";
import { Mail } from "./mail";
import { Telefono } from "./telefono";
import { Persona } from "./persona";

let agenda : Persona[] = [];
let personaEncontrada = null;

// Función para buscar una persona por dni en la agenda
function buscarPersonaPorDni(dni : string) : Persona | null
{
    for (let p of agenda)
    {
        if (dni == p.dni)
        {
            return p;
        }
    }
    return null;
}

// Función para recorrer cada persona de la agenda y mostrar esa información en pantalla
function mostrarAgenda() : void
{
    for (let p of agenda)
    {
        console.log(p);
    }
}

// Añadimos tres personas a la agenda 
agenda.push(new Persona(
    "Juan",
    "Perez Lopez",
    28,
    "38912376F",
    "28/11/1993",
    "Rojo",
    "Masculino",
    [new Direccion("Calle Manuel de Valla", 5, 2, "C", 28224, "Pozuelo de Alarcon", "Madrid")],
    [new Mail("Trabajo", "juanperezlopez@gmail.com")],
    [new Telefono("movil", 623456789)],"Empleado 1")
);

agenda.push(new Persona(
    "Miriam", 
    "Gomez Solo", 
    35, 
    "25674895G",
    "23/02/1987", 
    "Azul", 
    "Femenino", 
    [new Direccion("Calle Atlantico", 3, 6, "A", 28400, "Collado Villalba", "Madrid")],
    [new Mail("Trabajo", "juanperezlopez@gmail.com")], 
    [new Telefono("movil", 623456789)], "Empleada 2")
);

agenda.push(new Persona(
    "Andromeda", 
    "Silvina Salinas", 
    61, 
    "98765432M", 
    "11/05/1961", 
    "Amarillo", 
    "Femenino", 
    [new Direccion("Calle Marte", 42, 1, "H", 28200, "San Lorenzo del Escorial", "Madrid")], 
    [new Mail("Trabajo", "andromedasilvinasalinas@gmail.com")], 
    [new Telefono("movil", 664110900)], "Empleada 3")
);

console.log("\n\n");
console.log("==================================================");
console.log("Agenda original")
console.log("==================================================");
mostrarAgenda();

// Buscamos una persona por su dni y, si existe en la agenda, añadimos nueva información
personaEncontrada = buscarPersonaPorDni("38912376F");
if (personaEncontrada != null)
{
    personaEncontrada.añadirDireccion(new Direccion("Calle Grande", 6, 2, "F", 28456, "Guadarrama", "Madrid"));
    personaEncontrada.añadirMail(new Mail("Personal", "j.perezl@hotmail.com"));
    personaEncontrada.añadirTelefono(new Telefono("fijo", 678531937));
}

console.log("\n\n");
console.log("==================================================");
console.log("Agenda modificada")
console.log("==================================================");
mostrarAgenda();