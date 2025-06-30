function verificar(){
    var data = new Date()
    var ano =data.getFullYear()
    var fano = document.querySelector("input#txtano")
    var res = document.querySelector("div#res")
if(fano.value.length == 0 || fano.value > ano) {
    window.alert ("verifique os dados e tente novamente")
} 

else{
var fsex = document.getElementsByName("radsex")
var idade = ano - Number(fano.value)
var genero =""
var img = document.createElement("img")
img.setAttribute("id", "foto")
}

if(fsex [0].checked){
    genero = "Homem"
    if(idade>=0 && idade <12) {
        //criança
        img.setAttribute('src', 'foto-criança-homem.png')
    } else if (idade < 30){
        //jovem
        img.setAttribute('src', 'foto-jovem-homem.png')

    }else if (idade < 60){
        //adulto
        img.setAttribute('src', 'foto-meia-idade-homem.png')

    }else{
        //idoso
        img.setAttribute('src', 'foto-idoso-homem.png')

    }
    
}

else if (fsex [1].checked){
    genero = "Mulher"
    if(idade>=0 && idade <12) {
        //criança
        img.setAttribute("src","foto-criança-mulher.png")
    } else if (idade < 30){
        //jovem
        img.setAttribute("src","foto-jovem-mulher.png")
    }else if (idade < 60){
        //adulto
        img.setAttribute("src","foto-meia-idade-mulher.png")
    }else{
        //idoso
        img.setAttribute("src","foto-idosa-mulher.png")
    }
}

res.innerHTML = `Detectamos ${genero} com ${idade} anos.` 
res.appendChild(img)
    
}
