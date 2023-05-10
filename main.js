//FUNCION QUE CALCULA EL PERIMETRO Y EL AREA DEL TRIANGULO
const calcTriangle = () => {
    const lado = parseFloat(document.getElementById("lado").value);
    //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const base = parseFloat(document.getElementById("base").value);
    //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const altura = parseFloat(document.getElementById("altura").value);
    //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const triangleResult = document.getElementById("triangleResult");
    //Declaro y uno mediante el metodo getElementById el resultado
    let perimetro = lado * 3;
    //Calculo del perimetro
    let area = (base * altura)/2;
    //Calculo del area
   triangleResult.innerHTML = `El perimetro es: ${perimetro} y el area es: ${area}`
   //Imprime en pantalla el resultado en la etiqueta p que esta en el card correspondiente mediantre el innerHTML
}
//FUNCION QUE CALCULA EL PERIMETRO Y EL AREA DELCIRCULO
const calcSqueare = () => {

    const lado = parseFloat(document.getElementById("lado2").value);
    //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const squareResult = document.getElementById("squareResult");
    //Declaro y uno mediante el metodo getElementById el resultado
    let perimetro = lado * 4;
    
    let area = lado * lado;
    squareResult.innerHTML = `El perimetro es: ${perimetro} y el area es: ${area}`
       //Imprime en pantalla el resultado en la etiqueta p que esta en el card correspondiente mediantre el innerHTML
}
//FUNCION QUE CALCULA EL PERIMETRO Y EL AREA DEL CIRCULO
const calcCircle = () => {
    const diametro = parseFloat(document.getElementById("diametro").value);
    //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const radio = parseFloat(document.getElementById("radio").value);
    //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const circleResult = document.getElementById("circleResult");
    //Declaro y uno mediante el metodo getElementById el resultado
    let perimetro = (diametro * Math.PI);
    let area = Math.PI * Math.pow(radio, 2);
    circleResult.innerHTML = `El perimetro es: ${perimetro} y el area es: ${area}`
       //Imprime en pantalla el resultado en la etiqueta p que esta en el card correspondiente mediantre el innerHTML

}
//FUNCION QUE CALCULA EL PERIMETRO Y EL AREA DEL RECTANGULO
const calcRectangle = () => {
    const ladoa = parseFloat(document.getElementById("ladoa").value);
    //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const ladob = parseFloat(document.getElementById("ladob").value);
    //Declaro y uno mediante el metodo getElementById el valor intropducido en el input
    const rectanguleResult = document.getElementById("rectanguleResult");
    //Declaro y uno mediante el metodo getElementById el resultado
    let perimetro = 2 * ladoa + 2 * ladob;
    let area = ladoa * ladob;
    rectangleResult.innerHTML = `El perimetro es: ${perimetro} y el area es: ${area}`
   //Imprime en pantalla el resultado en la etiqueta p que esta en el card correspondiente mediantre el innerHTML


}