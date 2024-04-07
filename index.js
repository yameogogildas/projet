var input=document.querySelector('input');
var button=document.querySelector('.submit');
var resultat = document.querySelector('.reponse');
var newGame=document.querySelector('#new-game button');
function numberToguess(){
    randomNumber= Math.floor(Math.random() *100 +1);
    console.log(randomNumber);
    return randomNumber;
}
function compareNumber(nbrInput, nbrRandom){
    if (nbrInput > nbrRandom){
        resultat.innerHTML="oops! le nombre a deviner est plus petit";
    }else if (nbrInput < nbrRandom){
        resultat.innerHTML=" oops! Le nombre a deviner est plus grand";
    }else {
        resultat.innerHTML="Bravo vous avez deviné !"
        newGame.classList.add('active');
    }
}
numberToguess();
button.addEventListener('click',function(){
    var numberTocompare=input.value;
    compareNumber(numberTocompare,randomNumber);
});
newGame.addEventListener('click',function(){
    numberToguess();
    newGame.classList.remove('active');
    input.value="";
    resultat.innerHTML="";
});