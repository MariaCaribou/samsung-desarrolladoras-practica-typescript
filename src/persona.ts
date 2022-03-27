import { Direccion } from "./direccion";
import { Telefono } from "./telefono";
import { Mail } from "./mail";

export class Persona 
{
    private _nombre : string;
    private _apellidos : string;
    private _edad : number;
    private _dni : string;
    private _cumpleaños : string;
    private _colorFavorito : string;
    private _sexo : string;
    private _direcciones : Direccion[];
    private _mails : Mail[];
    private _telefonos : Telefono[];
    private _notas : string;
    
    constructor(nombre : string, apellidos : string, edad : number, dni : string,
        cumpleaños : string, colorFavorito : string, sexo : string, direcciones : Direccion[],
        mails : Mail[], telefonos : Telefono[], notas : string) 
    {
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

    public get dni() : string 
    {
        return this._dni;
    }

    public añadirDireccion(direccion : Direccion) : void
    {
        this._direcciones.push(direccion);
    }

    public añadirMail(mail : Mail) : void
    {
        this._mails.push(mail);
    }

    public añadirTelefono(telefono : Telefono) : void
    {
        this._telefonos.push(telefono);
    }
}