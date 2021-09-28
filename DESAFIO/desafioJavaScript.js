/* As regras do jogo são:

tesoura corta papel;
papel cobre veneno;
pedra esmaga lagarto;
lagarto corta Spock;
Spock vaporiza tesoura;
tesoura decapita Spock;
lagarto come papel;
veneno refuta lagarto;
Spock vaporiza pedra;
veneno esmaga tesoura.

O desafio vai ser fazer aplicar os métodos de strings 
nas regras do jogo. E exibir no console a regra e a 
alteração realizada.
a) Onde tem esmaga trocar por quebra.
b) Onde tem lagarto trocar por tesoura.
c) Onde tem Spock trocar por papel.
d) Onde tem vaporiza trocar por embrulha.
e) Onde tem cobre trocar por embrulha.
f) Onde tem decapita trocar por corta.
g) Onde tem come trocar por corta.
h) Onde tem veneno trocar por pedra.
i) Onde tem refuta trocar por quebra.

Importante:

Criar um repositório chamado desafio-javascript.
Guardar todos os arquivos .js no repositório desafio-javascript.
Compartilhar o link do repositório no fórum desta atividade. */

let tesouraVsPapel = "Tesoura corta Papel";
let papelVsVeneno = "Papel cobre Veneno";
let alterarPapelVsVeneno;

alterarPapelVsVeneno = papelVsVeneno.replace("cobre", "embrulha");
alterarPapelVsVeneno = alterarPapelVsVeneno.replace("Veneno", "Pedra");

console.log("A regra " + "'" + tesouraVsPapel + "'" + " não sofreu alterações.")
console.log("A regra " + "'" + papelVsVeneno + "'" + " foi alterada para " + "'" + alterarPapelVsVeneno + "'" + " usando o método replace.");

let pedraVsLagarto = "Pedra esmaga Lagarto";
let alterarPedraVsLagarto;

alterarPedraVsLagarto = pedraVsLagarto.replace("esmaga", "quebra");
alterarPedraVsLagarto = alterarPedraVsLagarto.replace("Lagarto", "Tesoura");

console.log("A regra " + "'" +  pedraVsLagarto + "'" + " foi alterada para " + "'" + alterarPedraVsLagarto + "'" + " usando o método replace.");

let lagartoVsSpock = "Lagarto corta Spock";
let alterarLagartoVsSpock;

alterarLagartoVsSpock = lagartoVsSpock.replace("Lagarto", "Tesoura");
alterarLagartoVsSpock = alterarLagartoVsSpock.replace("Spock", "Papel");

console.log("A regra " + "'" + lagartoVsSpock + "'" + " foi alterada para " + "'" + alterarLagartoVsSpock + "'" + " usando o método replace.");

let spockVsTesoura = "Spock vaporiza Tesoura";
let alterarSpockVsTesoura;

alterarSpockVsTesoura = spockVsTesoura.replace("Spock", "Papel");
alterarSpockVsTesoura = alterarSpockVsTesoura.replace("vaporiza", "embrulha")

console.log("A regra " + "'" + spockVsTesoura + "'" + " foi alterada para " + "'" + alterarSpockVsTesoura + "'" + " usando o método replace.");

let tesouraVsSpock = "Tesoura decapita Spock";
let alterarTesouraVsSpock;

alterarTesouraVsSpock = tesouraVsSpock.replace("decapita", "corta");
alterarTesouraVsSpock = alterarTesouraVsSpock.replace("Spock", "Papel");

console.log("A regra " + "'" + tesouraVsSpock + "'" + " foi alterada para " + "'" + alterarTesouraVsSpock + "'" + " usando o método replace.");

let lagartoVsPapel = "Lagarto come Papel";
let alterarLagartoVsPapel;

alterarLagartoVsPapel = lagartoVsPapel.replace("Lagarto", "Tesoura");
alterarLagartoVsPapel = alterarLagartoVsPapel.replace("come", "corta");

console.log("A regra " + "'" + lagartoVsPapel + "'" + " foi alterada para " + "'" + alterarLagartoVsPapel + "'" + " usando o método replace.");

let venenoVsLagarto = "Veneno refuta Lagarto";
let alterarVenenoVsLagarto;

alterarVenenoVsLagarto = venenoVsLagarto.replace("Veneno", "Pedra");
alterarVenenoVsLagarto = alterarVenenoVsLagarto.replace("refuta", "quebra");
alterarVenenoVsLagarto = alterarVenenoVsLagarto.replace("Lagarto", "Tesoura");

console.log("A regra " + "'" + venenoVsLagarto + "'" + " foi alterada para " + "'" + alterarVenenoVsLagarto + "'" + " usando o método replace.");

let spockVsPedra = "Spock vaporiza pedra";
let alterarSpockVsPedra;

alterarSpockVsPedra = spockVsPedra.replace("Spock", "Papel");
alterarSpockVsPedra = alterarSpockVsPedra.replace("vaporiza", "embrulha");

console.log("A regra " + "'" + spockVsPedra + "'" + " foi alterada para " + "'" + alterarSpockVsPedra + "'" + " usando o método replace.");

let venenoVsTesoura = "Veneno esmaga Tesoura";
let alterarVenenoVsTesoura;

alterarVenenoVsTesoura = venenoVsTesoura.replace("Veneno", "Pedra");
alterarVenenoVsTesoura = alterarVenenoVsTesoura.replace("esmaga", "quebra");

console.log("A regra " + "'" + venenoVsTesoura + "'" + " foi alterada para " + "'" + alterarVenenoVsTesoura + "'" + " usando o método replace.")