
//Destrava os campos.
function trava_e_destrava() {
    var idade = Number(valor_Idade.value);
    var nome = valor_Nome.value;
    var nome_inicio = nome.trimStart();
    var nome_fim = nome_inicio.trimEnd();

    
    if (nome_fim == "" || nome_fim.length < 3) {
        // alert("Informe seu nome")
        valor_Nome.style.color = "#EB4D4B";

    } else if (nome_fim.length >= 3) {
        valor_Nome.style.color = "#F7F1E3";
        valor_Idade.disabled = false;
    }

    if (idade == 16 || idade == 17) {
        responsavel_select.disabled = false;
        responsavel_select.focus();

    } else if (idade != 16 || idade != 17) {
        responsavel_select.disabled = true;
    }

    if (idade >= 18 && idade <= 69) {
        valor_Idade.style.color = "#F7F1E3";
        sexo.disabled = false;
        sexo.focus();
    } else {
        valor_Idade.style.color = "#EB4D4B";
        sexo.disabled = true;
    }

    if (responsavel_select.value == "Sim") {
        sexo.disabled = false;
        sexo.focus()
    }

    if (sexo.value == "Feminino") {
        gravida.disabled = false;
        gravida.focus()
    } else if (sexo.value != "Feminino") {
        gravida.disabled = true;
    }

    if (gravida.value == "S") {
        tipo_parto.disabled = false;
        tipo_parto.focus()
    } else if (gravida.value != "S") {
        tipo_parto.disabled = true;
    }

    if (sexo.value == "Masculino" || gravida.value == "N") {
        peso.disabled = false;
        peso.focus()
    } else if (sexo.value != "Masculino" || gravida.value != "N") {
        peso.disabled = true;
    }

    if (peso.value == "mais") {
        alimento.disabled = false;
        alimento.focus()
    } else if (peso.value != "mais") {
        alimento.disabled = true;
    }

    if (alimento.value == "S") {
        seu_tipo.disabled = false;
        seu_tipo.focus()
    } else if (alimento.value != "S") {
        seu_tipo.disabled = true;
    }

    if (seu_tipo.value == "S") {
        tipo.disabled = false;
        tipo.focus()
    } else if (seu_tipo.value != "S") {
        tipo.disabled = true;
    }

    if (seu_tipo.value == "N") {
        seus_pais.disabled = false;
        seus_pais.focus()
    } else if (seu_tipo.value != "N") {
        seus_pais.disabled = true;
    }

    if (seus_pais.value == "S") {
        tipo_pais.disabled = false;
        tipo_pais.focus()
    } else if (seus_pais.value != "S") {
        tipo_pais.disabled = true;
    }
}


function analiseClinica() {
    //Vari??veis
    var idade = Number(valor_Idade.value);
    var nome = String(valor_Nome.value);

    simulacao.focus()

    //Condi????o da idade, se o usu??rio tiver entre 16 a 17 anos precisa de um respons??vel para continuar o processo, caso tiver mais de 18 ou igual pode continuar.
    if (idade == 16 || 17) {
        // Caso o menor n??o esteja acompanhando o c??digo acaba 
        if (responsavel_select.value == "N") {
            analise.innerHTML = `Volte para casa, se alimente bem, fa??a exerc??cios e volte <b>quando for maior de idade</b> ou com um <b>respons??vel</b>.`;
            menor_nome.innerHTML = `${nome}`;
            menor_idade.innerHTML = `${idade} anos`;
            fundo_branco.style.display = 'block';
            menor_desacompanhado.style.display = 'block';
        }
    }

    if (idade >= 18 || (idade == 16 || 17) && idade <= 69) {
        // Qual ?? o g??nero da pessoa?
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
                    aguarde <b>"3 meses"</b> ap??s o parto.`;
                    gravida_parto.innerHTML = `${tipo_parto.value}`;
                } else {
                    depois_gravidez.innerHTML += `No caso de <b>parto cesariana</b><br>
                    aguarde <b>"12 meses"</b> ap??s o parto.`;
                    gravida_parto.innerHTML = `${tipo_parto.value}`;
                }
            }
        }
        // Se for homem pode prosseguir e se for uma mulher que n??o estiver gr??vida tamb??m pode prosseguir 
        if (sexo.value == "Masculino" || gravida.value == "N") {
            div_peso.style.display = 'block';


            // A pessoa pesa menos de 50kg?
            if (peso.value == "menos") {
                meio_kilo.innerHTML = `?? necess??rio ter 50kg ou mais para doar sangue.`;
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
            // Se a pessoa n??o se alimentou antes de doar sangue
            if (alimento.value == "N") {
                nao_comeu.innerHTML = `Voc?? precisa se alimentar antes de fazer a doa????o e de forma saud??vel.`;
                fundo_branco.style.display = 'block';
                n_comeu.style.display = 'block';
                alimento_nome.innerHTML = `${nome}`;
                alimento_idade.innerHTML = `${idade} anos`;
                alimento_sexo.innerHTML = `${sexo.value}`;
                if (responsavel_select.value == "Sim") { menor_acompanhado_alimento.style.display = 'block'; }
                if (sexo.value == "Feminino") { n_gravida_alimento.style.display = 'block'; }
            } else {
                div_seu_tipo.style.display = 'block';

                // Voc?? sabe seu tipo sanguineo?
                if (seu_tipo.value == "S") {
                    fundo_branco.style.display = 'block';
                    doar_e_receber.style.display = 'block';
                    doar_receber_nome.innerHTML = `${nome}`;
                    doar_receber_idade.innerHTML = `${idade} anos`;
                    doar_receber_sexo.innerHTML = `${sexo.value}`;
                    if (responsavel_select.value == "Sim") { menor_acompanhado_doar_receber.style.display = 'block'; }
                    if (sexo.value == "Feminino") { n_gravida_doar_receber.style.display = 'block'; }


                    // Tipos sanguineos, de quem voc?? pode doar e receber. 
                    if (tipo.value == "A+") {
                        doar_receber.innerHTML = `Voc?? pode doar para os tipos <b>AB+ e A+</b> e pode receber dos tipos <b>(A+, A-, O+ e O-)</b>.`;
                    } else if (tipo.value == "A-") {
                        doar_receber.innerHTML = `Voc?? pode doar para os tipos <b>(A+, A-, AB+ e AB-)</b> e pode receber dos tipos <b>A- e O-</b>.`;
                    } else if (tipo.value == "B+") {
                        doar_receber.innerHTML = `Voc?? pode doar para os tipos <b>B+ e AB+</b> e pode receber dos tipos <b>(B+, B-, O+ e O-)</b>.`;
                    } else if (tipo.value == "B-") {
                        doar_receber.innerHTML = `Voc?? pode doar para os tipos <b>(B+, B-, AB+ e AB-)</b> e pode receber dos tipos <b>B- e O-</b>.`;
                    } else if (tipo.value == "AB+") {
                        doar_receber.innerHTML = `Voc?? pode doar para o tipo <b>AB+</b> e pode receber dos tipos <b>(A+, B+, O+, AB+, A-, B-, O- e AB- (todos))</b>.`;
                    } else if (tipo.value == "AB-") {
                        doar_receber.innerHTML = `Voc?? pode doar para os tipos <b>(AB+ e AB-)</b> e pode receber dos tipos <b>(A-, B-, O- e AB-)</b>.`;
                    } else if (tipo.value == "O-") {
                        doar_receber.innerHTML = `Voc?? pode doar para os tipos <b>(A+, B+, O+, AB+, A-, B-, O- e AB- (todos))</b> e pode receber dos tipos <b>(O-)</b>.`;
                    } else if (tipo.value == "O+") {
                        doar_receber.innerHTML = `Voc?? pode doar para os tipos <b>(A+, B+, O+ e AB+)</b> e pode receber dos tipos <b>(O- e O+)</b>.`;
                    }

                    tipo_sanguineo.innerHTML = `${tipo.value}`;
                }

                // Caso n??o saiba seu tpo sang??neo
                if (seu_tipo.value == "N") {
                    // Caso saiba o tipo san??neo do seus pais.
                    if (seus_pais.value == "S") {
                        segundo_fundo_branco.style.display = 'block';
                        pais_tipo_sanguineo.style.display = 'block';
                        grafico_nome.innerHTML = `${nome}`;
                        grafico_idade.innerHTML = `${idade} anos`;
                        grafico_sexo.innerHTML = `${sexo.value}`;
                        if (responsavel_select.value == "Sim") { menor_acompanhado_grafico.style.display = 'block'; }
                        if (sexo.value == "Feminino") { n_gravida_grafico.style.display = 'block'; }

                        // Tipos sangu??neo dos seus pais.
                        if (tipo_pais.value == "A e A") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sangu??neos <b>A e A</b>, ent??o ?? poss??vel que o seu tipo
                                sangu??neo seja <b>A ou O</b>.`;
                        } else if (tipo_pais.value == "A e B") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sangu??neos <b>A e B</b>, ent??o ?? poss??vel que o seu tipo
                                sangu??neo seja <b>A, B, AB ou O</b>.`;
                        } else if (tipo_pais.value == "A e AB") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sangu??neos <b>A e AB</b>, ent??o ?? poss??vel que o seu tipo
                                sangu??neo seja <b>A, B e AB</b>.`;
                        } else if (tipo_pais.value == "A e O") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sangu??neos <b>A e O</b>, ent??o ?? poss??vel que o seu tipo
                                sangu??neo seja <b>A ou O</b>.`;
                        } else if (tipo_pais.value == "B e B") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sangu??neos <b>B e O</b>, ent??o ?? poss??vel que o seu tipo
                                sangu??neo seja <b>B ou O</b>.`;
                        } else if (tipo_pais.value == "B e AB") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sangu??neos <b>B e AB</b>, ent??o ?? poss??vel que o seu tipo
                                sangu??neo seja <b>A, B ou AB</b>.`;
                        } else if (tipo_pais.value == "B e O") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sangu??neos <b>B e O</b>, ent??o ?? poss??vel que o seu tipo
                                sangu??neo seja <b>B ou O</b>.`;
                        } else if (tipo_pais.value == "AB e AB") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sangu??neos <b>AB e AB</b>, ent??o ?? poss??vel que o seu tipo
                                sangu??neo seja <b>A, B ou AB</b>.`;
                        } else if (tipo_pais.value == "AB e O") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sangu??neos <b>AB e O</b>, ent??o ?? poss??vel que o seu tipo
                                sangu??neo seja <b>A ou B</b>.`;
                        } else if (tipo_pais.value == "O e O") {
                            pais.innerHTML = `De acordo com o informado, seus pais tem os tipos sangu??neos <b>O</b>, ent??o ?? poss??vel que o seu tipo
                                sangu??neo seja <b>O</b>.`;
                        }

                        tipo_sanguineo_pais.innerHTML = `${tipo_pais.value}`;
                        // Caso o usu??rio n??o saiba o tipo sang??neo dos seus pais.
                    } else {
                        n_sabe.innerHTML = `N??o tem problema n??o saber seu tipo sangu??neo, a coleta ser?? analisada para 
                        saber qual ?? o seu tipo sangu??neo. `;
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
    simulacao.style.behavior = 'smooth'
}

