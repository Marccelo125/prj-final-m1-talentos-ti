// Sistema para um Centro Pokémon

// Definições básicas
let continuar = true
let dados = [{
	NomeTreinador: "JORGE",
	Pokemons: [{
		NumeroPoke: "025",
		NomePoke: "Pikachu",
		TipoPoke: "Elétrico"
	}]
}, {
	NomeTreinador: "MARCIO",
	Pokemons: [{
		NumeroPoke: "024",
		NomePoke: "Arbok",
		TipoPoke: "Venenoso"
	}]
}, {
	NomeTreinador: "PAULO",
	Pokemons: [{
		NumeroPoke: "033",
		NomePoke: "Nidorino",
		TipoPoke: "Venenoso"
	}]
}, {
	NomeTreinador: "JARDEL",
	Pokemons: [{
		NumeroPoke: "094",
		NomePoke: "Gengar",
		TipoPoke: "Fantasma e Venenoso"
	},{
		NumeroPoke: "151",
		NomePoke: "Mew",
		TipoPoke: "Psiquico"
	}]
}]

// Função para cadastro
function cadastrar() {
	console.log("Função de cadastro\n")
	console.log("0. Voltar")

	// Pedindo o nome do Treinador
	let idTreinador = prompt("Qual o seu ID de treinador:").toUpperCase()

	// Caso o Usuário deseje voltar para o menu anterior
    if (idTreinador === "0") {
        return
    }

	// Verificando se o ID de treinador já existe no sistema ou se ele deseja voltar
	for (let treinador of dados){
		if (idTreinador === treinador.NomeTreinador) {
			console.log("Este ID de treinador ja existe!");
			return
		}
	}

	// Criamos uma variável e nela um objeto com 4 itens, sendo eles os digitados pelo usuário
	let listaPokemon = {
		NomeTreinador: idTreinador,
		Pokemons: [{
			NumeroPoke: prompt("Digite o Número do Pokémon na Pokédex:"),
			NomePoke: prompt("Digite o nome do Pokémon:"),
			TipoPoke: prompt("Digite os tipos do seu Pokémon:")
		}]
    }
	// Armazenamos a listaPokemon, nossa variável com objeto, dentro de dados que é nosso array
	dados.push(listaPokemon);

    // imprimindo o novo treinador e seu pokemon
    console.log("NomeTreinador   | NumeroPoke   | NomePoke   | TipoPoke");
    console.log("------------------------------------------------------");
    for (let treinador of dados) {
        if (treinador.NomeTreinador === idTreinador) {
            for (let pokemon of treinador.Pokemons) {
                console.log(
                    `${treinador.NomeTreinador.padEnd(15)} | ${pokemon.NumeroPoke.padEnd(12)} | ${pokemon.NomePoke.padEnd(10)} | ${pokemon.TipoPoke}`
                );
            }
        }
    }
    // Parabenizando o usuário por cadastrar o pokémon, afinal de contas somos educados
	console.log("Parabéns seu Pokémon foi cadastrado com sucesso!");
}

// Função Listar
function listar() {
	let numeroMaior = 13
	for (let treinador of dados) {
		if (treinador.NomeTreinador.length > numeroMaior) {
			numeroMaior = treinador.NomeTreinador.length
            console.log(numeroMaior)
		}
	}

    arrayComplementado = `${"NomeTreinador".padEnd(numeroMaior)} | NumeroPoke   | NomePoke   | TipoPoke`
    arrayComplementadoEspacos = arrayComplementado.length

    console.log(arrayComplementado);
    console.log("-".padEnd(arrayComplementadoEspacos, "-"));

    for (let treinador of dados) {
        for (let pokemon of treinador.Pokemons) {
            console.log(
            `${treinador.NomeTreinador.padEnd(numeroMaior)} | ${pokemon.NumeroPoke.padEnd(12)} | ${pokemon.NomePoke.padEnd(10)} | ${pokemon.TipoPoke}`
            );
        }
    }

}

// Função para buscar
function buscarTreinador() {
	console.log("Função de busca");
	console.log("0. Voltar");

	let dadosTreinador = prompt("Digite seu ID de treinador:").toUpperCase()

	// Caso o Usuário deseje voltar para o menu anterior
	if (dadosTreinador === "0") {
		return
    }
	// Laço de repetição para verificar se há o treinador na lista
    let dadoEncontrado = false;

    // Laço de repetição para mostrar o TREINADOR e seus POKÉMONS
    console.log("NomeTreinador   | NumeroPoke   | NomePoke   | TipoPoke");
    console.log("------------------------------------------------------");

    for (let treinador of dados) {
        if (dadosTreinador === treinador.NomeTreinador) {
            dadoEncontrado = true
            for (let pokemon of treinador.Pokemons) {
                console.log(
                    `${treinador.NomeTreinador.padEnd(15)} | ${pokemon.NumeroPoke.padEnd(12)} | ${pokemon.NomePoke.padEnd(10)} | ${pokemon.TipoPoke}`
                );
            }
        }
    }
    // Caso não achamos o treinador
	if (!dadoEncontrado) {
		console.log(`O ID de treinador ${dadosTreinador} Não existe!`)
	}
}

function adicionarPokemon () {
	console.log("Função Adicionar")
	console.log("0. Voltar")

	// Pedir o id do treinador
	let promptDoUsuario = prompt("Digite o seu ID de treinador:").toUpperCase()

	// Caso o Usuário deseje voltar para o menu anterior
	if (promptDoUsuario === "0") {
		return
	}

	// Verificar se o ID consta em dados for if
    let mensagem = "Não entendi, Tente novamente."

    for (let treinador of dados) {
		if (treinador.NomeTreinador === promptDoUsuario) {
            console.log("NomeTreinador   | NumeroPoke   | NomePoke   | TipoPoke");
            console.log("------------------------------------------------------");
            for (let treinador of dados) {
                if (treinador.NomeTreinador === promptDoUsuario) {
                    for (let pokemon of treinador.Pokemons) {
                        console.log(
                            `${treinador.NomeTreinador.padEnd(15)} | ${pokemon.NumeroPoke.padEnd(12)} | ${pokemon.NomePoke.padEnd(10)} | ${pokemon.TipoPoke}`);
                    }
                }
            }

			// Definições para laço while
			let quantidadePokemon = Number(prompt("Quantos Pokémon você quer adicionar?"))
			let quantidadePadrao = 0
            if (quantidadePokemon === "0") {
                mensagem = ""
                return
            }

            // While Prompts para cadastro do pokémon novo
			while (quantidadePadrao < quantidadePokemon) {

				let listaNovosPokemons = {
					NumeroPoke: prompt("Qual Número do Pokémon?"),
					NomePoke: prompt("Qual o nome do Pokémon?"),
					TipoPoke: prompt("Quais os tipos do seu Pokémon?")
				}
                // Adicionar novos Pokémons no objeto do treinador
                treinador.Pokemons.push(listaNovosPokemons)
                mensagem = "Novo Pokémon Registrado com Sucesso!"
				console.log(`N° Pokédex: ${listaNovosPokemons.NumeroPoke}`)
                console.log(`Nome: ${listaNovosPokemons.NomePoke}`)
                console.log(`Tipo(s): ${listaNovosPokemons.TipoPoke}`)
                console.log("-----------------------------------------------------")
                quantidadePadrao++
			}
		}
	}
    console.log(mensagem)
}

// Função para deletar
function deletar() {
	console.log("Função de deletar\n");
	console.log("0. Voltar")

	// Definições Básicas
	let idParaDeletar = prompt("Digite o ID do treinador que deseja deletar:").toUpperCase()
    let mensagem = `Não achei nenhum treinador com o ID: ${idParaDeletar}!`

	// Caso o Usuário deseje voltar para o menu anterior
	if (idParaDeletar === "0") {
		return
	}

	// Laço de repetição para remover o ID digitado
	for (let i = 0; i < dados.length; i++) {
        if (idParaDeletar === dados[i].NomeTreinador) {
          dados.splice(i, 1)
          mensagem = `O treinador ${idParaDeletar} foi removido!`
        }
    }
    console.log(mensagem)
}

// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}

// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "CENTRO DE POKÉMONS\n"
		pergunta += "---------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar Treinador\n"
		pergunta += "2. Listar Treinadores\n"
		pergunta += "3. Adicionar Pokémon\n"
		pergunta += "4. Procurar Pokémon\n"
		pergunta += "5. Deletar Pokémon\n"
		pergunta += "6. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			adicionarPokemon()
			break
		case 4:
			buscarTreinador()
			break
		case 5:
			deletar()
			break
		case 6:
			sair ()
			break
    }
}