var iInicial = prompt("Ingresa cuanto dinero quieres invertir: ");
iInicial = parseInt(iInicial);
var rendimiento = 0.1150;
var plazo = prompt("Ingresa la cantidad de años que deseas reinvertir: ");
plazo = parseInt(plazo);
var calculo;

for(var i=1; i<=plazo;i++){
    calculo = iInicial * rendimiento;
    iInicial = iInicial + calculo;
}

alert("Tu dinero al final de "+plazo+" sera de : $"+iInicial);
