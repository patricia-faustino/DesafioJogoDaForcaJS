let biblioteca = ["palavra", "curso", "estrelado", "arvore","trânsito"];
let quantidade = biblioteca.length - 1;
let posicao = Math.round(Math.random() * quantidade);
let palavra = biblioteca[posicao];
let tamanhoPalavra = palavra.length;
let caixaLetras = [];
let acertos;
let errosMaximos = 7;
let errosAtuais =0;
let desenhos = [];
let acertou = false;
let jogando = false;

function defineLetras(l){
    let obj;
    
    //deixa  as caixas disponíveis pelo inputs escondidas
    for(let i =0; i < 15; i++){
        obj = document.getElementById("l" + i).value="";
        obj=document.getElementById("l" + i).style.display = "none"
    } 

    //mostra as caixas necessárias
    for(let i = 0; i < l; i++){
        obj=document.getElementById("l"+i).style.display="flex";
    }
}


function jogar(){
    let jog;
    let obj;
    let letra;
    let letraTmp;
    let pesq;
    
    jog=document.getElementById("letraJ");
    jog.focus();

    if(jog.value == ""){
        alert("Digite uma letra");
    } else{
        if(jogando){
            letra=jog.value;
            jog.value="";
            pesq = palavra.match(letra);
            acertou=false;
            while(pesq!=null){
                letraTmp = palavra.search(letra);
                obj=document.getElementById("l" + letraTmp).value=letra;
                palavra=palavra.replace(letra, '0');
                acertos++;
                pesq=palavra.match(letra);
                acertou = true;
            }
            if(!acertou){
                document.getElementById("dvletrasdigitadas").innerHTML += letra.toUpperCase()
                errosAtuais++;
                if(erros<7){
                    desenhos[errosAtuais].style.display="block";
            
                }else{
                    document.getElementById("cabeca").src="cabeca2.png";
                    document.getElementById("dvmsg").innerHTML = "PERDEU";
                }
            }
            if(acertos == tamanhoPalavra){
                document.getElementById("dvmsg").innerHTML="";
                document.getElementById("dvmsg").innerHTML="GANHOU";
                jogando=false;
            }
        }
    }
}

function inicia(){
    jogando=true;
    jog=document.getElementById("letraJ");
    jog.value="";
    jog.focus();
    acertos=0;
    erros=0;
    acertos=false;
    document.getElementById("dvletrasdigitadas").innerHTML="Letras Digitadas:";
    posicao=Math.round(Math.random()*qtde);
    palavra=biblioteca[pos];
    tamanhoPalavra=palavra.length;
    defineLetras(tamanhoPalavra);
    document.getElementById("dvmsg").innerHTML="";
    desenhos[1]=document.getElementById("cabeca");
    desenhos[2]=document.getElementById("corpo");
    desenhos[3]=document.getElementById("bracoE");
    desenhos[4]=document.getElementById("bracoD");
    desenhos[5]=document.getElementById("pernaE");
    desenhos[6]=document.getElementById("pernaD");
    document.getElementById("cabeca").src="cabeca1.png";
    for(var i=1;i<7;i++){
        desenhos[i].style.display="none";
    }
 }

function dica(){
    alert(palavra);
    jog.focus();
}

