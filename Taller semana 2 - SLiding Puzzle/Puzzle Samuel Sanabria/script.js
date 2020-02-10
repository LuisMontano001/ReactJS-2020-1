
function mover(positon){
    var blankPosition = document.getElementsByClassName("b9")[0].id[3]
    var piecePosition = positon
    var validation = blankPosition - piecePosition
    if(validation == -1 || validation == 1 
        || validation == 3 || validation == -3)
    {
        document.getElementsByClassName("b9")[0].className = document.getElementById("pos" + positon).className
        document.getElementById("pos" + positon).className = "b9"  

    }     
}
function reset()
{
    var order = [1,2,3,4,5,6,7,8,9]
          
    for(let x=0;x<=8;x++)
    {
        var random = Math.random() * (7) + 1  
        var temp = order[x]
        order[x] = order[parseInt(random, 10)]
        order[parseInt(random, 10)] = temp
    }
    var msg = ""
    
    for(let i=1;i<=9;i++)
    {       
        var nuv =  document.getElementsByClassName("b"+ i)[0].className        
        document.getElementsByClassName("b"+ i)[0].className = document.getElementsByClassName("b" + order[i-1] )[0].className
        document.getElementsByClassName("b" + order[i-1] )[0].className = nuv        
    }
 
}