/********************************************************************
 * Objetivo: Arquivo responsavel pelas variaveis globais do projeto,
 * onde haveram mensagens,status_code e outros para o projeto
 * 
 * Data:20/02/24
 * Autor: Julia Fonseca
 * Versão: 1.0
**********************************************************************

********************* MENSAGEM DE ERRO DO PROJETO ********************/

const ERROR_INVALID_ID         = {status: false, status_code: 400, message: 'O ID encaminhado na requisição não é valido'}
const ERROR_NOT_FOUND          = {status: false, status_code: 404, message: 'Nenhum item encontrado na requisição'}
const ERROR_INTERNAL_SERVER_DB = {status: false, status_code:500, message: 'Ocorreram Erros no processamento do Banco de Dados da API !!'}

module.exports = {
    ERROR_INVALID_ID,
    ERROR_NOT_FOUND,
    ERROR_INTERNAL_SERVER_DB
}