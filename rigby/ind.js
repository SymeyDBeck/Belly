exports.wait = () => {
	return`Acalme-se porque estou processando😎\n\n❗Por favor, não envie spam👏❗\n\nby Sr Rigby`
}

exports.succes = () => {
	return`* ✔️ Sucesso ✔️ *`
}

exports.lvlon = () => {
	return`*「❬ ✅ ❭ Nível Ativado *`
}

exports.lvloff = () => {
	return`* ❬ ✅ ❭  Level Desativado *`
}

exports.lvlnul = () => {
	return`* ❬ ❎ ❭ Level não está ativado *`
}

exports.baned = () => {
	return`*Você foi banido e não poderá mais usar comandos do bot`
}

exports.lvlnoon = () => {
	return`'*Nivel* 0`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」\n\nVocê não está registrado em meu banco de dados 😳 \n\nComando : ${prefix}daftar Nome|Idade\nExemplo : ${prefix}daftar rigby|15`
}

exports.rediregis = () => {
	return`*Você já está registrado 🧐'*`
}

exports.stikga = () => {
	return`*Sim falhou, tente algumas vezes novamente*` 
}

exports.linkga = () => {
	return`*Desculpe o link não é válido*`
}

exports.groupo = () => {
	return`[❗] Este comando é apenas para grupos!`
}

exports.ownerb = () => {
	return`[❗] Este comando apenas Rigby usa!`
}

exports.ownerg = () => {
	return`[❗] Este comando só pode ser usado por um administrador de grupo!`
}

exports.admin = () => {
	return`[❗] Este comando só pode ser usado por administradores de grupo!`
}

exports.badmin = () => {
	return`[❗] Este comando só pode ser usado quando o bot se torna administrador!`
}

exports.wrongf = () => {
	return`*texto vazio/formato errado*`
}

exports.clears = () => {
	return`*Excluido todo o bate-papo com sucesso :)*`
}

exports.pc = () => {
	return`*「 REGISTRADO ✅ 」*\n\Para saber se você se cadastrou, verifique a mensagem que enviei\n\nNOTA:\n*se você não recebeu a mensagem. significa que você não salvou o nomeador do número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA USER RIGBY-BOT」*\n\nVocê já está registrado com dados \n\n┏━➤*Nome:*\n┗➤${namaUser}\n┏━➤*Número:*\n┗➤wa.me/${sender.split("@")[0]}\n┏━➤Idade\n┗➤${umurUser}\n┏━➤Hora do registro\n┗➤${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗➤NOTA : Não se esqueça de salvar o número do administrador SRBOT~ E não se esqueça de digitar ${prefix}menu antes de iniciar o bot😁`
}

exports.owneresce = (pushname) => {
	return`*Desculpe mas ${pushname} não é o script do dono*`
}

exports.satukos = () => {
	return`Adicionar parâmetro 1/habilitar ou 0/desabilitar`
}