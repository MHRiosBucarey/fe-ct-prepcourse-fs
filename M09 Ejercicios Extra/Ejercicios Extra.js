/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arreglo=[];
   for(const elemento in objeto){
      let par=[elemento, objeto[elemento]];
      arreglo.push(par);
   }
   return arreglo;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto={};
   let arreglo=string.split("").sort();
   arreglo.forEach(letra => {
      if(!objeto[letra])
      objeto[letra]=1;
      else objeto[letra]++;
   });   
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayuscula="";
   let minusculas="";
   for(i=0;i<string.length;i++){
      if(string[i]===string[i].toUpperCase()){
         mayuscula=mayuscula+string[i];
      }else{
         minusculas=minusculas+string[i];
      }
   }
   return mayuscula+minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const arreglo=frase.split(" ");
   arreglo.forEach((string,index)=>{
      var palabra=string.split("");
      arreglo[index]=palabra.reverse().join("");
   })
   var stringreverse=arreglo.join(" ");
   return stringreverse;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numEnString=numero.toString();
   var arreglonum=numEnString.split("");
   var arregloreverse=arreglonum.reverse();
   var numrevstring=arregloreverse.join("");
   if(numEnString===numrevstring){
      return "Es capicua";
   }else{
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevostring=[];
   var arreglostring=string.split("");
   for(i=0;i<arreglostring.length;i++){
      if(arreglostring[i]==="a" ||arreglostring[i]==="b"||arreglostring[i]==="c"){
         delete arreglostring[i];
      }else{
         nuevostring.push(arreglostring[i])
      }
   }
   return nuevostring.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let aux;
   for(i=0;i<arrayOfStrings.length-1;i++){
      for(j=i+1;j<arrayOfStrings.length;j++){
         if(arrayOfStrings[i].length>arrayOfStrings[j].length){
            aux=arrayOfStrings[i];
            arrayOfStrings[i]=arrayOfStrings[j];
            arrayOfStrings[j]=aux;
         }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let nuevoarreglo=[];
   for(i=0;i<array1.length;i++){
      for(j=0;j<array2.length;j++){
         if(array1[i]===array2[j]){
            nuevoarreglo.push(array1[i]);
         }
      }
   }
   return nuevoarreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
