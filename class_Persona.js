class Persona{
    constructor(){
        this.vectorObjetos = [];
    }

    mostrarInformacion(){
        console.clear();
        for(let i = 0; i < this.vectorObjetos.length; i++){
            console.log("Nombre Completo: "+this.vectorObjetos[i].nombre+" "+this.vectorObjetos[i].apellido+" -- C.I.: "+this.vectorObjetos[i].ci+" -- C.U.: "+this.vectorObjetos[i].cu+" Celular.: "+this.vectorObjetos[i].celular+" Carrera.: "+this.vectorObjetos[i].carrera);
        }
    }

//////////////////////////////////////////
ordenarBurbuja(tipoOrdenacion){
    var k;
    for(var i = 1; i < this.vectorObjetos.length; i++)
    {
        for(var j = 0; j < (this.vectorObjetos.length-i); j++)
        {
            if(tipoOrdenacion == 1){
                if(this.vectorObjetos[j].nombre > this.vectorObjetos[j+1].apellido)
                 {
                    k = this.vectorObjetos[j+1];
                    this.vectorObjetos[j+1] = this.vectorObjetos[j];
                    this.vectorObjetos[j] = k;
                }
            }
            else{
                if(this.vectorObjetos[j].apellido > this.vectorObjetos[j+1].ci)
                 {
                    k = this.vectorObjetos[j+1];
                    this.vectorObjetos[j+1] = this.vectorObjetos[j];
                    this.vectorObjetos[j] = k;
                }
            }
        }
    }
    this.mostrarInformacion();
}
//////////////////////////////////////////
}

class Universitario extends Persona{

    limpiarCampos(){
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('ci').value = '';
        document.getElementById('cu').value = '';
        document.getElementById('celular').value = '';
        document.getElementById('carrera').value = '';

        document.getElementById('nombre').focus();
    }

    insertarRegistro(tipoInsercion){
        //tipoInsercion: 1-> Inserte al final 0-> Inserte al principio
        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let ci = document.getElementById('ci').value;

        let cu = document.getElementById('cu').value;
        let celular = document.getElementById('celular').value;
        let carrera = document.getElementById('carrera').value;
        if(nombre == "" || apellido == "" || ci == ""|| cu == ""|| celular == ""|| carrera == ""){
            alert("Debe introducir todos los datos.");
        }
        else{
            let objetoConstruido = {
                'nombre': nombre,
                'apellido': apellido,
                'ci': ci,
                'cu': cu,
                'celular': celular,
                'carrera': carrera
            }
            if(tipoInsercion == 0)
                this.vectorObjetos.unshift(objetoConstruido);
                
            else
                this.vectorObjetos.push(objetoConstruido);
                
            this.mostrarInformacion();
        }
        this.limpiarCampos();
    }
    mostrarInformacion(){
        console.clear();
        for(let i = 0; i < this.vectorObjetos.length; i++){
            console.log("Nombre.: "+this.vectorObjetos[i].nombre+" Apellido.: "+this.vectorObjetos[i].apellido+" -- C.I.: "+this.vectorObjetos[i].ci+" -- C.U.: "+this.vectorObjetos[i].cu+" Celular.: "+this.vectorObjetos[i].celular+" Carrera.: "+this.vectorObjetos[i].carrera);
        }
    }

    ///////////////////////////////////////

Siguiente(){
        if(this.vectorObjetos[0]==null){
            console.log("No existe Registro Siguiente");
        }else{
            let criterioBusqueda = document.getElementById('nombre').value;
        if(criterioBusqueda == ''){
                    document.getElementById('nombre').value = this.vectorObjetos[0].nombre;
                    document.getElementById('apellido').value = this.vectorObjetos[0].apellido;
                    document.getElementById('ci').value = this.vectorObjetos[0].ci;
                    document.getElementById('cu').value = this.vectorObjetos[0].cu;
                    document.getElementById('celular').value = this.vectorObjetos[0].celular;
                    document.getElementById('carrera').value = this.vectorObjetos[0].carrera;
                    console.log(" => Siguiente es: ",this.vectorObjetos[i-1].nombre,);
        }else{
            for(let i = 0; i < this.vectorObjetos.length; i++){
                if(this.vectorObjetos[i].nombre == criterioBusqueda){
                    if(this.vectorObjetos[i+1]==null){
                        console.log("No existe mas Valores")
                    }else{
                    document.getElementById('nombre').value = this.vectorObjetos[i+1].nombre;
                    document.getElementById('apellido').value = this.vectorObjetos[i+1].apellido;
                    document.getElementById('ci').value = this.vectorObjetos[i+1].ci;
                    document.getElementById('cu').value = this.vectorObjetos[i+1].cu;
                    document.getElementById('celular').value = this.vectorObjetos[i+1].celular;
                    document.getElementById('carrera').value = this.vectorObjetos[i+1].carrera;
                    console.log(" => Siguiente es: ",this.vectorObjetos[i+1].nombre,);
                    }
                    
                }
}}}}
Anterior(){
    if(this.vectorObjetos[0]==null){
        console.log("No existe Registro Anterior");
    }else{
        let criterioBusqueda = document.getElementById('nombre').value;
    if(criterioBusqueda == ''){
                document.getElementById('nombre').value = this.vectorObjetos[0].nombre;
                document.getElementById('apellido').value = this.vectorObjetos[0].apellido;
                document.getElementById('ci').value = this.vectorObjetos[0].ci;
                document.getElementById('cu').value = this.vectorObjetos[0].cu;
                document.getElementById('celular').value = this.vectorObjetos[0].celular;
                document.getElementById('carrera').value = this.vectorObjetos[0].carrera;
                console.log(" => Anterior es: ",this.vectorObjetos[0].nombre,);
    }else{
        for(let i = 0; i < this.vectorObjetos.length; i++){
            if(this.vectorObjetos[i].nombre == criterioBusqueda){
                if(this.vectorObjetos[i-1]==null){
                    console.log("No existe mas Valores")
                }else{
                document.getElementById('nombre').value = this.vectorObjetos[i-1].nombre;
                document.getElementById('apellido').value = this.vectorObjetos[i-1].apellido;
                document.getElementById('ci').value = this.vectorObjetos[i-1].ci;
                document.getElementById('cu').value = this.vectorObjetos[i-1].cu;
                document.getElementById('celular').value = this.vectorObjetos[i-1].celular;
                document.getElementById('carrera').value = this.vectorObjetos[i-1].carrera;
                console.log(" => Anterior es: ",this.vectorObjetos[i-1].nombre,);
                }
            }
}}}}
    //////////////////////////////////////

    ////////////////////////////////////////

IrUltimo(){
        if(this.vectorObjetos[0]==null){
            console.log("No existe Registro Ultimo");
        }
            for(let i = 0; i < this.vectorObjetos.length; i++){
                    document.getElementById('nombre').value = this.vectorObjetos[i].nombre;
                    document.getElementById('apellido').value = this.vectorObjetos[i].apellido;
                    document.getElementById('ci').value = this.vectorObjetos[i].ci;
                    document.getElementById('cu').value = this.vectorObjetos[i].cu;
                    document.getElementById('celular').value = this.vectorObjetos[i].celular;
                    document.getElementById('carrera').value = this.vectorObjetos[i].carrera;
                    
}
console.log(" => Ultimo es: ",this.vectorObjetos[this.vectorObjetos.length-1    ].nombre,);

}
IrPrimero(){
    if(this.vectorObjetos[0]==null){
        console.log("No existe Registro Primero");
    }else{
        document.getElementById('nombre').value = this.vectorObjetos[0].nombre;
        document.getElementById('apellido').value = this.vectorObjetos[0].apellido;
        document.getElementById('ci').value = this.vectorObjetos[0].ci;
        document.getElementById('cu').value = this.vectorObjetos[0].cu;
        document.getElementById('celular').value = this.vectorObjetos[0].celular;
        document.getElementById('carrera').value = this.vectorObjetos[0].carrera;
        console.log(" => El primero es: ",this.vectorObjetos[0].nombre,);
    }
                
}


    ////////////////////////////////////////


    ////METODO ELIMINAR

Elimina(valor){
        let tipoElim=valor;
        if(tipoElim == "0"){//Eliminar Primero
            console.log("Vector 0 Eliminado");
            this.vectorObjetos.shift(); 
        }else
        if(tipoElim == "1"){//Eliminar Ultimo
            console.log("Vector ",this.vectorObjetos.length," Eliminado");
            this.vectorObjetos.pop();            
        }else{
            this.vectorObjetos.length = 0;
            console.log("Eliminaste Todo");
        }
        this.mostrarInformacion();
    }
}