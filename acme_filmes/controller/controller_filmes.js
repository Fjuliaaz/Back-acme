/***********************************************************************
 * Objetivo: Arquivo responsável para realizar validações consistencia *
 * e a regra de negocio para os filmes                                 *
 * Data: 30/01/2024                                                    *
 * Autor: Julia Fonseca                                                *
 * Versão: 1.0                                                         *
 ***********************************************************************/


//import do arquivo DAO para manipular dados dos filmes 
const fimesDAO = require('../model/DAO/filme.js')

const message = require('../modulo/config.js')



//Função para inserir um novo filme no banco de dados
const setInserirNovoFilme = async function(){

}

//Função para atualizar um filme existente
const setAtualizarFilme = async function(){

}

//Função para excluir um filme existente
const setExcluirFilme = async function(id){


}

//Função para retormar todos os filmes do Banco de Dados
const getListarfilmes = async function(){

    let filmesJSON = {};

    let dadosFilmes = await fimesDAO.selectAllFilmes();

    //validação para criar o JSON dos dados 
    if(dadosFilmes){
        //criar o JSON de retorno dos dados
        filmesJSON.filmes = dadosFilmes;
        filmesJSON.quantidade = dadosFilmes.length;
        filmesJSON.status_code = 200;

        return filmesJSON
    }else{
        return false;
    }

}

//Função para buscar um filme pelo ID
const getBuscarFilme = async function(id){

    //receba o id encaminhado pelo app
    let idFilmes = id;

    let filmeJSON = {}

    //Validação para verificar o ID do Filme antes de encaminhar para o DAO
    if (idFilme == '' || idFilme == undefined || isNaN(idFilme)) {
        return message.ERROR_INVALID_ID
    } else {

        //Encaminha o ID do filme para o DAO para o retorno do Banco de Dados
        let dadosFilme = await filmesDAO.selectByIdFilme(idFilme)

        //Validação para verificar se o DAO retornou dados
        if (dadosFilme) {

            if (dadosFilme.length > 0) {
                //Cria o JSON de retorno de dados
                filmeJSON.filme = dadosFilme
                filmeJSON.status_code = 200

                return filmeJSON
            } else {
                return message.ERROR_NOT_FOUND
            }
        } else {
            return message.ERROR_INTERNAL_SERVER_DB
        }
    }
}


module.exports ={
    setAtualizarFilme,
    setExcluirFilme,
    setInserirNovoFilme,
    getBuscarFilme,
    getListarfilmes
}
