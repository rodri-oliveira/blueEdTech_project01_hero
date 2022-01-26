// console.log(`"Este projeto tem como objetivo verificar detalhes do nosso cotidiano que são desapercebidos e se 
//     ignorados, podem trazer prejuizos em nossa vida. A primiera pergunta é a chave seguida de mais 5 ,
//     após concluir, o sistema apresentará um resultado, entenda, o certo e errado aqui é subjetivo mas 
//     podemos te dar um direção. IMPORTANTE: Caso não responda a pergunta e ir para a próxima, a resposta 
//     não respondida será considerada NÃO. Seja sincero(a)!! \n`)
const prompt = require('prompt-sync')()


let startQuestions = ''
let keyQuestion = ''

start()

function start() {
    keyQuestion = prompt("Voce trabalha ? ")
    if (keyQuestion.trim().toUpperCase() === "SIM") {
        personWork()
    } else {
        personNotWork()
    }
}

function checkResult(countYes) {
    return countYes === 0 ? "Você falha miseravelmente" :
        countYes === 1 || countYes === 2 ? "Você falha, mas ainda consegue fugir da situação." :
        countYes === 3 ? "Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco" :
        countYes === 4 ?
        "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita." :
        "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações"
}

function personWork() {
    let countYes = 0
    let questionPesonWork = [
        "Você agradece ao levantar para o trabalho ?  ",
        "Você da bom dia para o primeiro estranho que vê na rua ?  ",
        "Você sente prazer ao chegar no seu trabalho ?  ",
        "Você esta feliz com o que conseguiu produzir ?  ",
        "Sentimento de dever cumprido ?  "
    ]
    questionPesonWork.map((item, indice) => {
        const result = prompt(`${indice + 1} - ${item}`)
        if (result === "sim") countYes++
    })

    console.log(`\nResultado: ${checkResult(countYes)}\n`)
    restart()
}

function personNotWork() {
    let countYes = 0
    let questionPersonNotWork = [
        "Você concluiu o segundo grau ?  ",
        "Você tem um objetivo? ",
        "Você acha importante tem um bom relacionamento interpessaol ?  ",
        "Você reclama muito da vida ?  ",
        "Você é resiliente ?  "
    ]
    questionPersonNotWork.map((item, indice) => {
        const result = prompt(`${indice + 1} - ${item}`)
        if (result === "sim") countYes++
    })
    console.log(`\nResultado: ${checkResult(countYes)}\n`)
    restart()
}

function restart() {
    startQuestions = prompt('Deseja refazer os testes ? ')
    if (startQuestions.trim().toUpperCase() === 'SIM') {
        start()
    }
}