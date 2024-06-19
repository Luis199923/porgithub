class Tarea{
    ejercicio1(){
        // console.log("mensaje desde tarea")
        let n,r,c=1,msg="",m
        n = document.getElementById("n").value
        m = document.getElementById("msg").value
        n = parseInt(n)
        r = document.getElementById("resp")

        while (c <= n){
            msg = msg + m+"<br>"
            c=c+1
        }
        r.innerHTML = msg

    }
    ejercicio2() {
        let limite,c=1,msg="",r
        limite=document.getElementById("limite").value
        limite=parseInt(limite)
        r=document.getElementById("resp")

        while(c <= limite){
            if(c%7==0) {
                msg=msg+c+"<br>"
            }
            c=c+1
        }
        r.innerHTML=msg
    }
    ejercicio3() {
        let multiplo,limite=0,c=1,msg="",r
        multiplo=document.getElementById("multiplo").value
        multiplo=parseInt(multiplo)
        limite=document.getElementById("limite").value
        limite=parseInt(limite)
        r=document.getElementById("resp")
        while(c<= limite){
            if(c%multiplo==0) {
                msg=msg+c+"<br>"
            }
            c=c+1
        }
        r.innerHTML=msg
    }
    ejercicio4(){
        let num,msg="",r,c=1
    num = document.getElementById("num").value
    num = parseInt(num)
    r = document.getElementById("resp") 
    if (num>0){   
    while ( c <=num) {
        msg = c +"<br>" 
        c=c+1
        msg="el numero es positivo"+" "+ msg 
    }
    }else{
        msg="el numero es negativo"+" "+num
}
    r.innerHTML = msg
} 
   ejercicio5() {
    let limite=0,c=1,msg="",r
    limite=document.getElementById("limite").value
    limite=parseInt(limite)
    r=document.getElementById("resp")
    while(c<= limite){
        if(c%2==0) {
            msg=msg+c+"<br>"
        }
        c=c+1
    }
    r.innerHTML=msg
}
ejercicio6() {
    let num=0,msg="",n,r
    num=document.getElementById("num").value
    num=parseInt(num)
    r=document.getElementById("resp")
    for (n=1;n<=num;n++){
        if(num%n==0){
         msg=msg+num+"/"+n+"="+(num/n)+"<br>"
        }
    }
    r.innerHTML = msg;
}
ejercicio7() {
        let msg="",r,i
        r = document.getElementById("resp");
        for (i=1; i<=12; i++) {
            msg=msg+i+"+10="+(i+10)+"<br>"
        }
        r.innerHTML = msg;
    }
    ejercicio8() {
        let multiplicacion=0,limite=0,msg="",r,m
        multiplicacion=document.getElementById("multiplicacion").value
        multiplicacion=parseInt(multiplicacion)
        limite=document.getElementById("limite").value
        limite=parseInt(limite)
        r=document.getElementById("resp")
        for (m=1; m<=limite; m++){
            msg=msg+multiplicacion+"*"+m+"="+(m*multiplicacion)+"<br>"
        }
        r.innerHTML=msg
    }
    ejercicio9(){
        let inicio=0,fin=0,msg="",r,u
        inicio=document.getElementById("inicio").value
        inicio=parseInt(inicio)
        fin=document.getElementById("fin").value
        fin=parseInt(fin)
        r=document.getElementById("resp")
        for (u=inicio; u<=fin; u++){
            msg=msg+u+"<br>"
        }
        r.innerHTML=msg
    }
    ejercicio10(){
        let inicio=0,fin=0,msg="",r
        inicio=document.getElementById("inicio").value
        inicio=parseInt(inicio)
        fin=document.getElementById("fin").value
        fin=parseInt(fin)
        r=document.getElementById("resp")
        while(inicio<=fin){
            if(inicio%2==0){
                msg=msg+inicio+"<br>"
            }
            inicio=inicio+1
        }
        r.innerHTML=msg
    }
    ejercicio11(){
        let arreglo=[],msg="",r
        arreglo=document.getElementById("arreglo").value
        arreglo[0]=parseInt(arreglo[0])
        r=document.getElementById("resp")
        while(arreglo[0]<= parseInt (arreglo[5])){
            msg=msg+arreglo[0]+"<br>"
            arreglo[0]++
        }
        r.innerHTML=msg
}
ejercicio31(){

let cadena = prompt("Ingresa una cadena:");

for (let i = 0; i < cadena.length; i++) {
    console.log(cadena[i]);
}

}
}

let tarea = new Tarea() //crea una variable igual que la clase
// tarea.mensaje()