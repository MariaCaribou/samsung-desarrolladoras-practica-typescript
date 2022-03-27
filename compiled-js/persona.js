"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._mails = mails;
        this._telefonos = telefonos;
        this._notas = notas;
    }
    get dni() {
        return this._dni;
    }
    añadirDireccion(direccion) {
        this._direcciones.push(direccion);
    }
    añadirMail(mail) {
        this._mails.push(mail);
    }
    añadirTelefono(telefono) {
        this._telefonos.push(telefono);
    }
}
exports.Persona = Persona;
