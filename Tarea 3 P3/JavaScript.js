function convertir() {

    let valor = parseFloat(document.getElementById("inputValue").value);
    let unidadDesde = document.getElementById("unitFrom").value;
    let unidadHasta = document.getElementById("unitTo").value;

    let resultado;
    switch (unidadDesde) {
        case "m":
            if (unidadHasta === "cm") {
                resultado = valor * 100; 
            } else if (unidadHasta === "ft") {
                resultado = valor * 3.28084; 
            } else if (unidadHasta === "km") {
                resultado = valor * 0.001; 
            } else if (unidadHasta === "in") {
                resultado = valor * 39.3701; 
            } else {
                resultado = valor; 
            }
            break;
        case "cm":
            
            break;
        case "ft":
            
            break;
        case "km":
            
            break;
        case "in":
            
            break;
        default:
            resultado = "Unidad no válida";
    }


    document.getElementById("result").innerHTML = resultado.toFixed(2);
}
