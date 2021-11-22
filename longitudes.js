//Convertor de medidas de longitud

const numero_ingreso = document.getElementById("NumeroIngreso");
const valor_base = document.getElementById("Valor_Base");
const valor_a_convertir = document.getElementById("valor_a_convertir");
var Medida_Convertida=0

numero_ingreso.addEventListener('input', tomarValor);
valor_base.addEventListener('change', tomarValor);
valor_a_convertir.addEventListener('change', tomarValor);

function tomarValor() {

    var numero_ingreso = document.getElementById("NumeroIngreso").value;
    var primeraMedida = document.getElementById("Valor_Base").value;
    var Medida_a_Convertir = document.getElementById("valor_a_convertir").value;



    switch (primeraMedida) {
        case "km":
            switch (Medida_a_Convertir) {
                case "km": Medida_Convertida = numero_ingreso = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "hm": Medida_Convertida = numero_ingreso * 10; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dam": Medida_Convertida = numero_ingreso * 100; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "m": Medida_Convertida = numero_ingreso * 1000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dm": Medida_Convertida = numero_ingreso * 10000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "cm": Medida_Convertida = numero_ingreso * 100000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "mm": Medida_Convertida = numero_ingreso * 1000000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                
                default: Medida_Convertida = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = "ingrese una selección Válida."; break
            };
        break;



        case "hm":
            switch (Medida_a_Convertir) {
                case "km": Medida_Convertida = numero_ingreso / 10; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "hm": Medida_Convertida = numero_ingreso = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dam": Medida_Convertida = numero_ingreso * 10; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "m": Medida_Convertida = numero_ingreso * 100; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dm": Medida_Convertida = numero_ingreso * 1000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "cm": Medida_Convertida = numero_ingreso * 10000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "mm": Medida_Convertida = numero_ingreso * 100000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                
                default: Medida_Convertida = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = "ingrese una selección Válida."; break
            };
        break;

        case "dam":
            switch (Medida_a_Convertir) {
                case "km": Medida_Convertida = numero_ingreso / 100; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "hm": Medida_Convertida = numero_ingreso / 10; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dam": Medida_Convertida = numero_ingreso = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "m": Medida_Convertida = numero_ingreso * 10; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dm": Medida_Convertida = numero_ingreso * 100; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "cm": Medida_Convertida = numero_ingreso * 1000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "mm": Medida_Convertida = numero_ingreso * 10000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                
                default: Medida_Convertida = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = "ingrese una selección Válida."; break
            };
        break;

        case "m":
            switch (Medida_a_Convertir) {
                case "km": Medida_Convertida = numero_ingreso / 1000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "hm": Medida_Convertida = numero_ingreso / 100; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dam": Medida_Convertida = numero_ingreso / 10; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "m": Medida_Convertida = numero_ingreso = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dm": Medida_Convertida = numero_ingreso * 10; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "cm": Medida_Convertida = numero_ingreso * 100; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "mm": Medida_Convertida = numero_ingreso * 1000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                
                default: Medida_Convertida = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = "ingrese una selección Válida."; break
            };
        break;

        case "dm":
            switch (Medida_a_Convertir) {
                case "km": Medida_Convertida = numero_ingreso / 10000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "hm": Medida_Convertida = numero_ingreso / 1000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dam": Medida_Convertida = numero_ingreso / 100; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "m": Medida_Convertida = numero_ingreso / 10; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dm": Medida_Convertida = numero_ingreso = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "cm": Medida_Convertida = numero_ingreso * 10; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "mm": Medida_Convertida = numero_ingreso * 100; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                
                default: Medida_Convertida = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = "ingrese una selección Válida."; break
            };
        break;

        case "cm":
            switch (Medida_a_Convertir) {
                case "km": Medida_Convertida = numero_ingreso / 100000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "hm": Medida_Convertida = numero_ingreso / 10000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dam": Medida_Convertida = numero_ingreso / 1000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "m": Medida_Convertida = numero_ingreso / 100; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dm": Medida_Convertida = numero_ingreso / 10; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "cm": Medida_Convertida = numero_ingreso = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "mm": Medida_Convertida = numero_ingreso * 10; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                
                default: Medida_Convertida = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = "ingrese una selección Válida."; break
            };
        break;

        case "mm":
            switch (Medida_a_Convertir) {
                case "km": Medida_Convertida = numero_ingreso / 1000000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "hm": Medida_Convertida = numero_ingreso / 100000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dam": Medida_Convertida = numero_ingreso / 10000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "m": Medida_Convertida = numero_ingreso / 1000; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "dm": Medida_Convertida = numero_ingreso / 100; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "cm": Medida_Convertida = numero_ingreso / 100; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                case "mm": Medida_Convertida = numero_ingreso = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = Medida_Convertida; break
                default: Medida_Convertida = numero_ingreso; document.getElementById("Valor_convertido").innerHTML = "ingrese una selección Válida."; break
            };
        break;

        default: console.log("Selección de conversión inválida"); break;
    }
}