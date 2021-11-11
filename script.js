var goals = 0;

const toggleButton = document.getElementsByClassName('toogle-button')[0]
const navbar = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')    
})

function calcularImc() {
    let altura = parseInt(document.querySelector('#height').value)/100;
    let peso = parseInt(document.querySelector('#weight').value);
    const resultado = document.querySelector('#resultado-imc');
    let imc = parseInt(peso/(altura*altura));
    if(imc < 18.5){
        resultado.innerHTML = "Abaixo do Peso!";
    }
    else if (imc >= 18.5 && imc < 25){
        resultado.innerHTML = "Peso Normal!"
    }
    else if (imc >= 25 && imc < 30){
        resultado.innerHTML = "Sobrepeso!"
    }
    else if (imc >= 30 && imc < 35){
        resultado.innerHTML = "Obesidade Grau I!"
    }
    else if (imc >= 35 && imc < 40){
        resultado.innerHTML = "Obesidade Grau II!"
    }
    else{
        resultado.innerHTML = "Obesidade Mórbida!"
    }
}

function addGoal() {
    let titulo = document.querySelector('#title').value;
    let conteudo = document.querySelector('#content').value;
    if(titulo != "" && conteudo != ""){
        const contagem = document.querySelector("#couting-goals")
        const container = document.querySelector(".grid-container");
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        goals++;
        contagem.innerHTML = goals;
        const newCard = document.createElement("div");
        const newH2 = document.createElement("h2");
        const textForH2 = document.createTextNode(titulo);
        newH2.appendChild(textForH2);
        const newP = document.createElement("P");
        const textForP = document.createTextNode(conteudo);
        newP.appendChild(textForP);
        const newDiv = document.createElement("div");
        const textForDiv = document.createTextNode(`Criado em: ${date}`);
        newDiv.appendChild(textForDiv);
        newCard.appendChild(newH2);
        newCard.appendChild(newP);
        newCard.appendChild(newDiv);
        container.appendChild(newCard);
    }
}

const foodList = {
    abacate: 208,
    queijo: 371,
    peixe: 147,
    cenoura: 33,
    maçã: 49,
    laranja: 38,
    limão: 31,
    cebola: 22,
    morango: 41,
    balas: 396,
    ervilha: 72,
    leite: 58,
    pão: 239,
    arroz: 323,
    frango: 165,
    tomate: 19,
    mirtilo: 40,
    cereja: 49,
    melância: 20,
    repolho: 28,
    carne: 187,
    ovo: 157,
    pera: 57,
    milho: 95,
    macarrão: 337,
    feijão: 58
}

for (food in foodList){
    let newLi = document.createElement("li");
    let label = document.createElement("label");
    let input1 = document.createElement("input");
    label.for = food;
    input1.type = "checkbox";
    label.appendChild(input1);
    input1.id = food;
    let textForLabel = document.createTextNode(" "+food);
    label.appendChild(textForLabel);
    let span = document.createElement("span");
    const textForSpan = document.createTextNode(`${foodList[food]} cal`);
    span.appendChild(textForSpan);
    newLi.appendChild(label);
    newLi.appendChild(span);
    document.querySelector(".food-list").appendChild(newLi)
}

/* The code above will generate some HTML structure like:
<li>
    <label for="food-name"><input type="checkbox" id="food-name"> Nome</span>
    <span>X Cal</span>
</li>*/

const resultadoDieta = document.querySelector("#resultado-dieta");

function calculaCalorias(){
    let dietaCalorica = 0;
    document.getElementById("container-dieta").style.display = "inline"
    for (food in foodList){
        let checkbutton = document.getElementById(`${food}`)
        if(checkbutton.checked){
            dietaCalorica += foodList[food];
        }
        resultadoDieta.innerHTML = dietaCalorica;
    }
}
