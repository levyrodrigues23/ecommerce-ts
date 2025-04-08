import axios from 'axios';

// instala o json-server e cria um arquivo db.json com o conteudo que tu quer manipular
// npx json-server --watch db.json , coloca isso no terminal cmd ou qualquer terminal para rodar o json-server, ele vai criar um servidor local para você testar o json-server...mas deixa funcionando irmão, não fecha o terminal, se não o servidor para de funcionar e você não consegue mais acessar a api local.

export const api = axios.create({
    baseURL: 'http://localhost:3000'
})