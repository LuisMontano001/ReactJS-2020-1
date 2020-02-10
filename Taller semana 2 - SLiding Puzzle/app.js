
function movement(pos) {
    var temp = document.getElementById(pos).className
    var posactual = document.querySelector("." + temp).id;
    var possiguiente = document.querySelector(".cuadro9").id;
    console.log("este es solucion " + solucion);
    var monitoreo = []
    monitoreo[0] = document.getElementById("pos1").className
    monitoreo[1] = document.getElementById("pos2").className
    monitoreo[2] = document.getElementById("pos3").className
    monitoreo[3] = document.getElementById("pos4").className
    monitoreo[4] = document.getElementById("pos5").className
    monitoreo[5] = document.getElementById("pos6").className
    monitoreo[6] = document.getElementById("pos7").className
    monitoreo[7] = document.getElementById("pos8").className
    monitoreo[8] = document.getElementById("pos9").className
    console.log("este es monitoreo " + monitoreo);



    var operacion = possiguiente[3] - posactual[3];
    if (operacion == 3 || operacion == -3 || operacion == 1 || operacion == -1) {
        document.getElementsByClassName("cuadro9")[0].className = temp;
        document.getElementById(pos).className = "cuadro9";

    }

}
function mix() {
    var orden = ["cuadro1", "cuadro2", "cuadro3", "cuadro4", "cuadro5", "cuadro6", "cuadro7", "cuadro8", "cuadro9"];
    var solucion = orden
    var mezcla = orden.sort(function () { return Math.random() - 0.5 });

    document.getElementById("pos1").className = mezcla[0]
    document.getElementById("pos2").className = mezcla[1]
    document.getElementById("pos3").className = mezcla[2]
    document.getElementById("pos4").className = mezcla[3]
    document.getElementById("pos5").className = mezcla[4]
    document.getElementById("pos6").className = mezcla[5]
    document.getElementById("pos7").className = mezcla[6]
    document.getElementById("pos8").className = mezcla[7]
    document.getElementById("pos9").className = mezcla[8]



}