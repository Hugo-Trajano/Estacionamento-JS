//função para capturar valores de modelo e placas//

document.getElementById('formulario').addEventListener('submit', cadastraVeiculo);

function cadastraVeiculo(e){
    var modeloCarro = document.getElementById('modeloCarro').value;
    var placaCarro = document.getElementById('placaCarro').value;
    var time = new Date(); //captura hora e data//

    //criar obejo CAROO//
    carro = {
        modelo: modeloCarro,
        placa: placaCarro,
        hora: time.getHours(),
        minutos: time.getMinutes()
    }
  
    console.log(carro);

        if(localStorage.getItem('patio') === null){
           var carros = [];
           carros.push(carro);
           localStorage.setItem('patio2', JSON.stringify(carros));
        }else{
            var carros = JSON.parse(localStorage.getItem('patio'));
            carro.push(carro);
            localStorage.setItem('patio2', JSON.stringify(carros));
        }


    e.preventDefault();
}
