// Alert de Boas Vindas
alert(`Olá! Seja bem-vindo ao Projeto Doe Sangue | Salve Vidas é um questionário onde o objetivo é saber se você pode doar sangue, 
para quem e de qual tipo sanguíneo você pode receber. 
Fiz esse programa com tudo que aprendi na faculdade 
até agora e com algumas pesquisas. 
Linguagens utilizadas: HTML, CSS, JavaScript e Chart.JS. 
Está versão ainda não está responsiva, estou começando a aprender. 
Quem puder me dar um feedback eu agradeço!`)
//Destrava os campos.
function trava_e_destrava() {
    var idade = Number(valor_Idade.value);

    if (valor_Nome.value == "") {
        alert("Informe seu nome")
    } else if (valor_Nome.value.length >= 3) {
        valor_Idade.disabled = false;
    }

    if (idade == 16) {
        responsavel_select.disabled = false;
    }
    if (idade == 17) {
        responsavel_select.disabled = false;
    }

    if (idade >= 18) {
        sexo.disabled = false;
    }

    if (responsavel_select.value == "Sim") {
        sexo.disabled = false;
    }

    if (sexo.value == "Feminino") {
        gravida.disabled = false;
    }

    if (gravida.value == "S") {
        tipo_parto.disabled = false;
    }

    if (sexo.value == "Masculino" || gravida.value == "N") {
        peso.disabled = false;
    }

    if (peso.value == "mais") {
        alimento.disabled = false;
    }

    if (alimento.value == "S") {
        seu_tipo.disabled = false;
    }

    if (seu_tipo.value == "S") {
        tipo.disabled = false;
    }

    if (seu_tipo.value == "N") {
        seus_pais.disabled = false;
    }

    if (seus_pais.value == "S") {
        tipo_pais.disabled = false;
    }
}


function analiseClinica() {
    //Variáveis
    var idade = Number(valor_Idade.value);
    var nome = String(valor_Nome.value);

    //Condição da idade, se o usuário tiver entre 16 a 17 anos precisa de um responsável para continuar o processo, caso tiver mais de 18 ou igual pode continuar.
    if (idade == 16 || 17) {
        // Caso o menor não esteja acompanhando o código acaba 
        if (responsavel_select.value == "N") {
            analise.innerHTML = `Volte para casa, se alimente bem, faça exercícios e volte <b>quando for maior de idade</b> ou com um <b>responsável</b>.`;
            menor_nome.innerHTML = `${nome}`;
            menor_idade.innerHTML = `${idade} anos`;
            fundo_branco.style.display = 'block';
            menor_desacompanhado.style.display = 'block';
        }
    }

    if (idade >= 18 || (idade == 16 || 17)) {
        // Qual é o gênero da pessoa?
        if (sexo.value == "Feminino") {
            // Caso a pessoa esteja gravida
            if (gravida.value == "S") {
                gravidez.style.display = 'block';
                fundo_branco.style.display = 'block';
                gravida_nome.innerHTML = `${nome}`;
                gravida_idade.innerHTML = `${idade} anos`;

                if (responsavel_select.value == "Sim") { menor_gravida.style.display = 'block'; }

                // Tipo do parto
                if (tipo_parto.value == "Normal") {
                    depois_gravidez.innerHTML += `No caso de <b>parto normal</b><br>
                    aguarde <b>"3 meses"</b> após o parto.`;
                    gravida_parto.innerHTML = `${tipo_parto.value}`;
                } else {
                    depois_gravidez.innerHTML += `No caso de <b>parto cesariana</b><br>
                    aguarde <b>"12 meses"</b> após o parto.`;
                    gravida_parto.innerHTML = `${tipo_parto.value}`;
                }
            }
        }
        // Se for homem pode prosseguir e se for uma mulher que não estiver grávida também pode prosseguir 
        if (sexo.value == "Masculino" || gravida.value == "N") {
            div_peso.style.display = 'block';


            // A pessoa pesa menos de 50kg?
            if (peso.value == "menos") {
                meio_kilo.innerHTML = `É necessário ter 50kg ou mais para doar sangue.`;
                fundo_branco.style.display = 'block';
                menos_50.style.display = 'block';
                menos_nome.innerHTML = `${nome}`;
                menos_idade.innerHTML = `${idade} anos`;
                menos_sexo.innerHTML = `${sexo.value}`;
                if (responsavel_select.value == "Sim") { menor_acompanhado1.style.display = 'block'; }
                if (gravida.value == "N") { n_gravida.style.display = 'block'; }
            }
        }

        // Se a pessoa pesa mais de 50kg
        if (peso.value == "mais") {
            // Se a pessoa não se alimentou antes de doar sangue
            if (alimento.value == "N") {
                nao_comeu.innerHTML = `Você precisa se alimentar antes de fazer a doação e de forma saudável.`;
                fundo_branco.style.display = 'block';
                n_comeu.style.display = 'block';
                alimento_nome.innerHTML = `${nome}`;
                alimento_idade.innerHTML = `${idade} anos`;
                alimento_sexo.innerHTML = `${sexo.value}`;
                if (responsavel_select.value == "Sim") { menor_acompanhado_alimento.style.display = 'block'; }
                if (sexo.value == "Feminino") { n_gravida_alimento.style.display = 'block'; }
            } else {
                div_seu_tipo.style.display = 'block';

                // Você sabe seu tipo sanguineo?
                if (seu_tipo.value == "S") {
                    fundo_branco.style.display = 'block';
                    doar_e_receber.style.display = 'block';
                    doar_receber_nome.innerHTML = `${nome}`;
                    doar_receber_idade.innerHTML = `${idade} anos`;
                    doar_receber_sexo.innerHTML = `${sexo.value}`;
                    if (responsavel_select.value == "Sim") { menor_acompanhado_doar_receber.style.display = 'block'; }
                    if (sexo.value == "Feminino") { n_gravida_doar_receber.style.display = 'block'; }


                    // Tipos sanguineos, de quem você pode doar e receber. 
                    if (tipo.value == "A+") {
                        doar_receber.innerHTML = `Você pode doar para os tipos <b>AB+ e A+</b> e pode receber dos tipos <b>(A+, A-, O+ e O-)</b>.`;
                    } else if (tipo.value == "A-") {
                        doar_receber.innerHTML = `Você pode doar para os tipos <b>(A+, A-, AB+ e AB-)</b> e pode receber dos tipos <b>A- e O-</b>.`;
                    } else if (tipo.value == "B+") {
                        doar_receber.innerHTML = `Você pode doar para os tipos <b>B+ e AB+</b> e pode receber dos tipos <b>(B+, B-, O+ e O-)</b>.`;
                    } else if (tipo.value == "B-") {
                        doar_receber.innerHTML = `Você pode doar para os tipos <b>(B+, B-, AB+ e AB-)</b> e pode receber dos tipos <b>B- e O-</b>.`;
                    } else if (tipo.value == "AB+") {
                        doar_receber.innerHTML = `Você pode doar para o tipo <b>AB+</b> e pode receber dos tipos <b>(A+, B+, O+, AB+, A-, B-, O- e AB- (todos))</b>.`;
                    } else if (tipo.value == "AB-") {
                        doar_receber.innerHTML = `Você pode doar para os tipos <b>(AB+ e AB-)</b> e pode receber dos tipos <b>(A-, B-, O- e AB-)</b>.`;
                    } else if (tipo.value == "O+") {
                        doar_receber.innerHTML = `Você pode doar para os tipos <b>(A+, B+, O+ e AB+)</b> e pode receber dos tipos <b>(O+ e O-)</b>.`;
                    } else if (tipo.value == "O-") {
                        doar_receber.innerHTML = `Você pode doar para os tipos <b>(A+, B+, O+, AB+, A-, B-, O- e AB- (todos))</b> e pode receber dos tipos <b>(O-)</b>.`;
                    }

                    tipo_sanguineo.innerHTML = `${tipo.value}`;
                }

                // Caso não saiba seu tpo sangíneo
                if (seu_tipo.value == "N") {
                    // Caso saiba o tipo saníneo do seus pais.
                    if (seus_pais.value == "S") {
                        segundo_fundo_branco.style.display = 'block';
                        pais_tipo_sanguineo.style.display = 'block';
                        grafico_nome.innerHTML = `${nome}`;
                        grafico_idade.innerHTML = `${idade} anos`;
                        grafico_sexo.innerHTML = `${sexo.value}`;
                        if (responsavel_select.value == "Sim") { menor_acompanhado_grafico.style.display = 'block'; }
                        if (sexo.value == "Feminino") { n_gravida_grafico.style.display = 'block'; }

                        // Tipos sanguíneo dos seus pais.
                        if (tipo_pais.value == "A e A") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sanguíneos <b>A e A</b>, então é possível que o seu tipo
                                sanguíneo seja <b>A ou O</b>.`;
                        } else if (tipo_pais.value == "A e B") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sanguíneos <b>A e B</b>, então é possível que o seu tipo
                                sanguíneo seja <b>A, B, AB ou O</b>.`;
                        } else if (tipo_pais.value == "A e AB") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sanguíneos <b>A e AB</b>, então é possível que o seu tipo
                                sanguíneo seja <b>A, B e AB</b>.`;
                        } else if (tipo_pais.value == "A e O") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sanguíneos <b>A e O</b>, então é possível que o seu tipo
                                sanguíneo seja <b>A ou O</b>.`;
                        } else if (tipo_pais.value == "B e B") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sanguíneos <b>B e O</b>, então é possível que o seu tipo
                                sanguíneo seja <b>B ou O</b>.`;
                        } else if (tipo_pais.value == "B e AB") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sanguíneos <b>B e AB</b>, então é possível que o seu tipo
                                sanguíneo seja <b>A, B ou AB</b>.`;
                        } else if (tipo_pais.value == "B e O") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sanguíneos <b>B e O</b>, então é possível que o seu tipo
                                sanguíneo seja <b>B ou O</b>.`;
                        } else if (tipo_pais.value == "AB e AB") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sanguíneos <b>AB e AB</b>, então é possível que o seu tipo
                                sanguíneo seja <b>A, B ou AB</b>.`;
                        } else if (tipo_pais.value == "AB e O") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sanguíneos <b>AB e O</b>, então é possível que o seu tipo
                                sanguíneo seja <b>A ou B</b>.`;
                        } else if (tipo_pais.value == "O e O") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sanguíneos <b>O</b>, então é possível que o seu tipo
                                sanguíneo seja <b>O</b>.`;
                        }

                        tipo_sanguineo_pais.innerHTML = `${tipo_pais.value}`;
                        // Caso o usuário não saiba o tipo sangíneo dos seus pais.
                    } else {
                        n_sabe.innerHTML = `Não tem problema não saber seu tipo sanguíneo, a coleta será analisado para 
                        saber qual é o seu tipo sanguíneo. `;
                        segundo_fundo_branco.style.display = 'block';
                        nao_sabe.style.display = 'block';
                        nao_sabe_nome.innerHTML = `${nome}`;
                        nao_sabe_idade.innerHTML = `${idade} anos`;
                        nao_sabe_sexo.innerHTML = `${sexo.value}`;
                        if (responsavel_select.value == "Sim") { menor_acompanhado_nao_sabe.style.display = 'block'; }
                        if (sexo.value == "Feminino") { n_gravida_nao_sabe.style.display = 'block'; }
                    }
                }

            }
        }
    }
    simulacao.style.display = 'block';
}

