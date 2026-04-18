function exercicio01SolicitarDadosMedico() {
    let indice = 0;

    while (indice < 5) {
        let nomeMedico = prompt("Informe seu nome");
        let crm = prompt("Informe seu CRM");

        alert("Obrigado por utilizar nosso sistema Hospitalar")
        indice = indice + 1;
    }
}

function exercicio02SolicitarDadosPaciente() {
    let indice = 0;
    let numeroPacientes = 0;

    while (indice < 4) {
        let nomePaciente = prompt("Informe o nome do paciente");
        let idade = parseInt(prompt("Informe a idade do paciente"));

        numeroPacientes = numeroPacientes + 1
        indice = indice + 1;
    }

    alert("Foram cadastrados " + numeroPacientes + " paciente(s)")
}

function exercicio03SomarIdadesPacientes() {
    let indice = 0;
    let somaIdades = 0;

    while (indice < 6) {
        let idadePaciente = parseInt(prompt("Informe a idade do paciente"));

        somaIdades = somaIdades + idadePaciente;
        indice = indice + 1;
    }

    alert("A soma das idades dos pacientes é " + somaIdades);
}

function exercicio04CalcularMediaIdades() {
    let indice = 0;
    let mediaIdades = 0;
    let somaIdades = 0;

    while (indice < 5) {
        let idadePaciente = parseInt(prompt("Informe a idade do paciente"));

        somaIdades = somaIdades + idadePaciente;

        indice = indice + 1;
    }

    mediaIdades = somaIdades / 5;
    alert("A soma de idades dos pacientes é " + mediaIdades);
}

function exercicio05ContarMaioresIdade() {
    let indice = 0;
    quantidadeMaiorDeIdade = 0;

    while (indice < 7) {
        let nomePaciente = prompt("Informe o nome do paciente");
        let idadePaciente = parseInt(prompt("Informe a idade do paciente"));

        if (idadePaciente >= 18) {
            quantidadeMaiorDeIdade = quantidadeMaiorDeIdade + 1;
        }

        indice = indice + 1;
    }

    alert("Existe " + quantidadeMaiorDeIdade + " paciente(s) maior de idade");
}

function exercicio06ValidarCRM() {
    indice = 0;

    while (indice < 5) {
        let nomeMedico = prompt("Informe o seu nome");
        let crm = prompt("Informe sua crm");

        if (crm.trim() === "") {
            alert("CRM não infomada");
            continue;
        }
        indice = indice + 1;
    }
    alert("Cadastro dos médicos finalizado")
}

function exercicio07SolicitarPressaoArterial() {
    indice = 0;
    let quantidadePressaoAlta = 0;

    while (indice < 6) {
        let pressaoArterialPaciente = parseInt(prompt("Informe a pressão arterial do paciente"));

        if (pressaoArterialPaciente > 14) {
            quantidadePressaoAlta = quantidadePressaoAlta + 1;
        }

        indice = indice + 1;
    }

    alert("Existe " + quantidadePressaoAlta + " de paciente(s) com a pressão acima de 14");
}

function exercicio08MenuContinuarCadastro() {
    let desejaContinuar = "sim";

    while (desejaContinuar === "sim") {
        let nomePaciente = prompt("Informe o nome do paciente");

        desejaContinuar = prompt("Deseja continuar?");
    }
}

function exercicio09SomarFrequenciaCardiaca() {
    let pressaoCardiacaDoPaciente = 1;
    let somaPressaoCardiaca = 0;

    while (pressaoCardiacaDoPaciente !== 0) {
        pressaoCardiacaDoPaciente = parseInt(prompt("Digite a pressão cardiaca do paciente"));

        somaPressaoCardiaca = somaPressaoCardiaca + pressaoCardiacaDoPaciente;
    }
    alert("A soma de pressões cardiacas digitadas é " + somaPressaoCardiaca);
}

function exercicio10MaiorTemperatura() {
    let indice = 0;
    let maiorTemperatura = 0;

    while (indice < 5) {
        let temperaturaPaciente = parseInt(prompt("Digite a temperatura do paciente"));

        if (temperaturaPaciente > maiorTemperatura) {
            maiorTemperatura = temperaturaPaciente
        }
        indice = indice + 1;
    }
    alert("A maior temperatura é de " + maiorTemperatura + "°")
}

function exercicio11MenorTemperatura() {
    let indice = 0;
    let menorTemperatura = 99999999999999;

    while (indice < 5) {
        let temperaturaPaciente = parseInt(prompt("Informe a temperatura do paciente"));

        if (temperaturaPaciente < menorTemperatura) {
            menorTemperatura = temperaturaPaciente;
        }

        indice = indice + 1
    }
    alert("A menor temperatura é de " + menorTemperatura + "°");
}

function exercicio12ContarSintomas() {
    let indice = 0;
    let contadorDeSim = 0;

    while (indice < 5) {
        let seEstaComFebre = prompt("Você está com febre?")

        if (seEstaComFebre.toLowerCase() === "sim") {
            contadorDeSim = contadorDeSim + 1;
        }
        indice = indice + 1;
    }
    alert(contadorDeSim + " pacientes disseram estar com febre")
}

function exercicio13SepararPacientesPorIdade() {
    let indice = 0;
    let contadorCrianca = 0;
    let contadorAdolescente = 0;
    let contadorAdulto = 0;

    while (indice < 8) {
        let idadePaciente = parseInt(prompt("Informe sua idade"));

        if (idadePaciente < 12) {
            contadorCrianca = contadorCrianca + 1;
        } else if ((idadePaciente >= 12) && (idadePaciente <= 17)) {
            contadorAdolescente = contadorAdolescente + 1;
        } else if (idadePaciente >= 18) {
            contadorAdulto = contadorAdulto + 1;
        }
        indice = indice + 1;
    }
    alert(
        "Crianças: " + contadorCrianca +
        "\nAdolescentes: " + contadorAdolescente +
        "\nAdultos: " + contadorAdulto
    )
}

function exercicio14ValidarOpcaoMenu() {
    let opcao = 0;

    while (opcao !== 3) {
        opcao = parseInt(prompt(
            "O que deseja fazer?" +
            "\n\n1 - Cadastrar paciente" +
            "\n2 - Cadastrar médico" +
            "\n3 - Sair"
        ));

        if ((opcao === 1) || (opcao === 2)) {
            continue;
        } else if (opcao !== 3) {
            alert("Opção inválida");
        }
    }
}

function exercicio15RelatorioPacientes() {
    let indice = 0;
    let quantidadePacientes = 0;
    let somaIdades = 0;
    let mediaIdades = 0;
    let maiorTemperatura = 0;
    let menorTemperatura = 9999999999;
    let quantidadePacientesIdoso = 0;

    while (indice < 5) {
        let nome = prompt("Informe seu nome");
        let idade = parseInt(prompt("Informe sua idade"));
        let temperatura = parseInt(prompt("Informe sua temperatura"));

        somaIdades = somaIdades + idade;

        if (temperatura > maiorTemperatura) {
            maiorTemperatura = temperatura
        }
        if (temperatura < menorTemperatura) {
            menorTemperatura = temperatura;
        }
        if (idade >= 60) {
            quantidadePacientesIdoso = quantidadePacientesIdoso + 1;
        }

        quantidadePacientes = quantidadePacientes + 1;
        indice = indice + 1;
    }

    mediaIdades = somaIdades / quantidadePacientes;
    alert(
        "Pacientes cadastrados: " + quantidadePacientes +
        "\nMédia de idades: " + mediaIdades.toFixed(0) +
        "\nMaior temperatura: " + maiorTemperatura + "°" +
        "\nMenor temperatura: " + menorTemperatura + "°" +
        "\nPacientes acima de 60 anos: " + quantidadePacientesIdoso
    );
}

function exercicio16SenhaAcessoSistema() {
    let senha = "";

    while (senha !== "hospital123") {
        senha = prompt("Informe a senha");
    }
    alert("Acesso liberado ao sistema hospitalar")
}

function exercicio17CadastroComValidacaoCompleta() {
    let indice = 0;
    let contadorMedicosCadastradosCorretamente = 0;
    debugger;
    while (indice < 5) {
        let nome = prompt("Informe seu nome");
        let crm = prompt("Informe seu CRM");
        contadorMedicosCadastradosCorretamente = contadorMedicosCadastradosCorretamente + 1;

        if (nome.trim() === "") {
            contadorMedicosCadastradosCorretamente = contadorMedicosCadastradosCorretamente - 1;
        } else if (crm.trim() === "") {
            contadorMedicosCadastradosCorretamente = contadorMedicosCadastradosCorretamente - 1;
        }

        indice = indice + 1;
    }
    alert(contadorMedicosCadastradosCorretamente + " foram cadastrados corretamente");
}

function exercicio18RelatorioFinalInternacoes() {
    let indice = 0;
    let somaDiasInternado = 0;
    let mediaDiasInternados = 0;
    let maiorDiasInternado = 0;
    let pacienteComMaisDiasInternado = "";

    while (indice < 6) {
        let nomePaciente = prompt("Informe o nome do paciente");
        let diasInternado = parseInt(prompt("Informe a quantidade de dias internado"));

        somaDiasInternado = somaDiasInternado + diasInternado

        if (diasInternado > maiorDiasInternado) {
            pacienteComMaisDiasInternado = nomePaciente;
            maiorDiasInternado = diasInternado;
        }

        indice = indice + 1;
    }
    mediaDiasInternados = somaDiasInternado / 6;

    alert(
        "Total de dias de internação: " + somaDiasInternado +
        "\nMédia de dias internados: " + mediaDiasInternados.toFixed(0) +
        "\nMaior tempo de internação: " + pacienteComMaisDiasInternado + " (" + maiorDiasInternado + " dias)"
    );
}