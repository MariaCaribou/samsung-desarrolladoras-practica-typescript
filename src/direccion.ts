export class Direccion 
{
    private _calle : string;
    private _numero : number;
    private _piso : number;
    private _letra : string;
    private _codigoPostal : number;
    private _poblacion : string;
    private _provincia : string;

    constructor(calle : string, numero : number, piso : number, 
        letra : string, codigoPostal : number,poblacion : string, provincia : string)
    {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
}