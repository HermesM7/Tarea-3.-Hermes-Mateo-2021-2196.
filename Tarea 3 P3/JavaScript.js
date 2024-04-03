function convertir() {
    
    let valor = parseFloat(document.getElementById("inputValue").value);
    let unidadDesde = document.getElementById("unitFrom").value;

    
    let resultado;
    switch (unidadDesde) {
        case "m":
            resultado = valor * 3.28084; 
            break;
        case "cm":
            resultado = valor * 0.0328084; 
            break;
        case "ft":
            resultado = valor * 0.3048; 
            break;
   
        default:
            resultado = "Unidad no válida";
    }
    
    document.getElementById("result").innerHTML = resultado.toFixed(2);
}
