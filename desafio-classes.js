const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    descrever() {
        console.log(`\nPersonagem criado:\nNome: ${this.nome}\nIdade: ${this.idade}\nTipo: ${this.tipo}`);
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou uma técnica desconhecida';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }

    standby() {
        console.log(`O personagem ${this.nome} está aguardando ordens.`);
    }
}

function escolherAcao(heroi) {
    rl.question("\nEscolha uma ação:\n1 - Atacar\n2 - Aguardar ordens\n3 - Sair\nEscolha: ", (escolha) => {
        if (escolha === '1') {
            heroi.atacar();
            escolherAcao(heroi);  
        } else if (escolha === '2') {
            heroi.standby();
            escolherAcao(heroi); 
        } else if (escolha === '3') {
            console.log("Encerrando o programa.");
            rl.close();  
        } else {
            console.log("Escolha inválida.");
            escolherAcao(heroi);  
        }
    });
}

rl.question("Descreva seu personagem:\nNome: ", (nome) => {
    rl.question("Idade: ", (idade) => {
        rl.question("Tipo (mago, guerreiro, monge, ninja): ", (tipo) => {
            const heroi = new Heroi(nome, parseInt(idade), tipo);
            
            heroi.descrever();

  
            escolherAcao(heroi);
        });
    });
});
