let boton = document.getElementById("convertir");
let cantidad = document.getElementById("cantidad");
let tipoMoneda = ["Dolar","Euro","Libra Esterlina","Peso Mexicano","Peso Colombiano","Yuan Chino"];
let fieldeset = document.getElementById('field')
let resultado = document.getElementById('resultado')
let equivalencia = document.getElementById('XD')
let conversion = document.getElementById('conversion')
let fragment = document.createDocumentFragment();
//Cortesía de "https://es.stackoverflow.com/questions/69836/cargar-un-array-en-select-javascript" para poder guiarme ⬇

MyOnLoad()

function MyOnLoad() {
    cargarMonedaUno(tipoMoneda)
    cargarMonedaDos(tipoMoneda)
}

function cargarMonedaUno(moneditaDeUno) {
    moneditaDeUno.sort();
    addOptions("monedaUno", moneditaDeUno);
}

function cargarMonedaDos(moneditaDeDos) {

    moneditaDeDos.sort();
    addOptions("monedaDos", moneditaDeDos);
}

function addOptions(mod, moneditas) {
    const moneda = document.getElementById(mod);
    moneditas.forEach((monedita, index) => {
        let option = document.createElement('option');
        option.textContent = monedita;
        option.setAttribute('value', index+1);
        fragment.appendChild(option);
    });
    moneda.appendChild(fragment)
}

//Hasta Acá ⬆
mostrar = function () {
    fieldeset.style = "display:block;"
}
ocultar = function () {
    fieldeset.style = "display:none;"
}
ocultar()

function calculo(input, modUno, modDos) {
    let monedaUno = document.getElementById(modUno);
    let monedaDos = document.getElementById(modDos);
    if (input > 0 && monedaUno.value !== "0" && monedaDos.value !== "0") {
        switch (monedaUno.value) {
            case "1":
                switch (monedaDos.value) {
                    case "1":
                        alert("Elije otra moneda")
                        monedaDos.value = "0"
                        console.log(monedaDos);
                        ocultar()
                        break;
                    case "2":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.93).toFixed(2)}€`;
                        equivalencia.innerHTML = `Dólar a:`
                        conversion.innerHTML = `Euros:`
                        break;
                    case "3":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.78).toFixed(2)}£`;
                        equivalencia.innerHTML = `Dólar a:`
                        conversion.innerHTML = `Libras Esterlina`
                        break;
                    case "4":
                        mostrar()
                        resultado.innerHTML = `$${(input * 3856.01).toFixed(2)}`;
                        equivalencia.innerHTML = `Dólar a:`
                        conversion.innerHTML = `Peso Colombiano`
                        break;
                    case "5":
                        mostrar()
                        resultado.innerHTML = `${(input * 20.42).toFixed(2)}$`;
                        equivalencia.innerHTML = `Dólar a:`
                        conversion.innerHTML = `Peso Mexicano`
                        break;
                    case "6":
                        mostrar()
                        resultado.innerHTML = `${(input * 6.59).toFixed(2)}¥`;
                        equivalencia.innerHTML = `Dólar a:`
                        conversion.innerHTML = `Yuan Chino`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "2":
                switch (monedaDos.value) {
                    case "1":
                        mostrar()
                        resultado.innerHTML = `${(input * 1.07).toFixed(2)}$`;
                        equivalencia.innerHTML = `Euro a:`
                        conversion.innerHTML = `Dólar Estadounidense`
                        break;
                    case "2":
                        alert("elije otra moneda")
                        monedaDos.value = "0"
                        ocultar()
                        break;
                    case "3":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.84).toFixed(2)}£`;
                        equivalencia.innerHTML = `Euro a:`
                        conversion.innerHTML = `Libra Esterlina`
                        break;
                    case "4":
                        mostrar()
                        resultado.innerHTML = `$${(input * 4142.32).toFixed(2)}`;
                        equivalencia.innerHTML = `Euro a:`
                        conversion.innerHTML = `Peso Colombiano`
                        break;
                    case "5":
                        mostrar()
                        resultado.innerHTML = `${(input * 21.94).toFixed(2)}$`;
                        equivalencia.innerHTML = `Euro a:`
                        conversion.innerHTML = `Peso Mexicano`
                        break;
                    case "6":
                        mostrar()
                        resultado.innerHTML = `${(input * 7.08).toFixed(2)}¥`;
                        equivalencia.innerHTML = `Euro a:`
                        conversion.innerHTML = `Yuan Chino`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "3":
                switch (monedaDos.value) {
                    case "1":
                        mostrar()
                        resultado.innerHTML = `${(input * 1.27).toFixed(2)}$`;
                        equivalencia.innerHTML = `Libra Esterlina a:`
                        conversion.innerHTML = `Dólar Estadounidense`
                        break;
                    case "2":
                        mostrar()
                        resultado.innerHTML = `${(input * 1.19).toFixed(2)}€`;
                        equivalencia.innerHTML = `Libra Esterlina a:`
                        conversion.innerHTML = `Euro`
                        break;
                    case "3":
                        alert("elije otra moneda")
                        monedaDos.value = "0"
                        ocultar()
                        break;
                    case "4":
                        mostrar()
                        resultado.innerHTML = `$${(input * 4911.11).toFixed(2)}`;
                        equivalencia.innerHTML = `Libra Esterlina a:`
                        conversion.innerHTML = `Peso Colombiano`
                        break;
                    case "5":
                        mostrar()
                        resultado.innerHTML = `${(input * 26.02).toFixed(2)}$`;
                        equivalencia.innerHTML = `Libra Esterlina a:`
                        conversion.innerHTML = `Peso Mexicano`
                        break;
                    case "6":
                        mostrar()
                        resultado.innerHTML = `${(input * 8.39).toFixed(2)}¥`;
                        equivalencia.innerHTML = `Libra Esterlina a:`
                        conversion.innerHTML = `Yuan Chino`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "4":
                switch (monedaDos.value) {
                    case "1":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.00026).toFixed(2)}$`;
                        equivalencia.innerHTML = `Peso Colombiano a:`
                        conversion.innerHTML = `Dólar Estadounidense`
                        break;
                    case "2":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.00025).toFixed(2)}€`;
                        equivalencia.innerHTML = `Peso Colombiano a:`
                        conversion.innerHTML = `Euro`
                        break;
                    case "3":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.00021).toFixed(2)}£`;
                        equivalencia.innerHTML = `Peso Colombiano a:`
                        conversion.innerHTML = `Libra Esterlina`
                        break;
                    case "4":
                        alert("elije otra moneda")
                        monedaDos.value = "0"
                        ocultar()
                        break;
                    case "5":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.0054).toFixed(2)}$`;
                        equivalencia.innerHTML = `Peso Colombiano a:`
                        conversion.innerHTML = `Peso Mexicano`
                        break;
                    case "6":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.0017).toFixed(2)}¥`;
                        equivalencia.innerHTML = `Peso Colombiano a:`
                        conversion.innerHTML = `Yuan Chino`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "5":
                switch (monedaDos.value) {
                    case "1":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.049).toFixed(2)}$`;
                        equivalencia.innerHTML = `Peso Mexicano a:`
                        conversion.innerHTML = `Dólar Estadounidense`
                        break;
                    case "2":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.046).toFixed(2)}€`;
                        equivalencia.innerHTML = `Peso Mexicano a:`
                        conversion.innerHTML = `Euro`
                        break;
                    case "3":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.038).toFixed(2)}£`;
                        equivalencia.innerHTML = `Peso Mexicano a:`
                        conversion.innerHTML = `Libra Esterlina`
                        break;
                    case "4":
                        mostrar()
                        resultado.innerHTML = `$${(input * 188.7).toFixed(2)}`;
                        equivalencia.innerHTML = `Peso Mexicano a:`
                        conversion.innerHTML = `Peso Colombiano`
                        break;
                    case "5":
                        alert("elije otra moneda")
                        monedaDos.value = "0"
                        ocultar()
                        break;
                    case "6":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.32).toFixed(2)}¥`;
                        equivalencia.innerHTML = `Peso Mexicano a:`
                        conversion.innerHTML = `Yuan Chino`
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            case "6":
                switch (monedaDos.value) {
                    case "1":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.15).toFixed(2)}$`;
                        equivalencia.innerHTML = `Yuan Chino a:`
                        conversion.innerHTML = `Dólar Estadounidense`
                        break;
                    case "2":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.14).toFixed(2)}€`;
                        equivalencia.innerHTML = `Yuan Chino a:`
                        conversion.innerHTML = `Euro`
                        break;
                    case "3":
                        mostrar()
                        resultado.innerHTML = `${(input * 0.12).toFixed(2)}£`;
                        equivalencia.innerHTML = `Yuan Chino a:`
                        conversion.innerHTML = `Libra Esterlina`
                        break;
                    case "4":
                        mostrar()
                        resultado.innerHTML = `${(input * 585.26).toFixed(2)}$`;
                        equivalencia.innerHTML = `Yuan Chino a:`
                        conversion.innerHTML = `Peso Colombiano`
                        break;
                    case "5":
                        mostrar()
                        resultado.innerHTML = `${(input * 3.10).toFixed(2)}$`;
                        equivalencia.innerHTML = `Yuan Chino a:`
                        conversion.innerHTML = `Peso Mexicano`
                        break;
                    case "6":
                        alert("elije otra moneda")
                        monedaDos.value = "0"
                        ocultar()
                        break;
                    default:
                        alert("Ha ocurrido un error")
                        break;
                }
                break;
            default:
                alert("Ha ocurrido un error");
                break;
        }
    }
    else {
        alert("Ingresa valores correctos")
        ocultar()
    }
}

boton.addEventListener('click', function () {
    calculo(cantidad.value, 'monedaUno', 'monedaDos');
})