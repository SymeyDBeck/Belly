#!/usr/bin/bash
apt install figlet 
apt install hiptext
CYAN="\033[1;36m"
PURPLE="\033[1;35m"
GREEN="\033[1;32m"
RED='\033[1;31m'
NC='\033[0m'

if [ -e "$HOME/../usr/bin/ruby" ]; then
	echo $GREEN"ruby detectado prosseguindo..."
	sleep 1
	if [ -e "/data/data/com.termux/files/usr/bin/lolcat" ]; then
		echo $GREEN"lolcat detectado prosseguindo..."
		sleep 1
	else
		echo $RED"lolcat não detectado, instalando..."
		gem install lolcat
	fi
else
	echo $RED"Você não instalou o ruby, instalando..."
	sleep 1
	apt install ruby
	if [ -e "/data/data/com.termux/files/usr/bin/lolcat" ]; then
		echo $GREEN"lolcat detectado prosseguindo..."
		sleep 1
	else
		echo $RED"lolcat não detectado, instalando..."
		gem install lolcat
	fi
fi

clear

figlet -c -f slant -t 'Rigby Bot' | lolcat 

echo  "Sr Rigby no controle fml sem escândalo \n\n" | lolcat -a -d 50 

apt-get update -y
apt-get upgrade -y
apt-get install nodejs -y
apt-get install libwebp -y
apt-get install mc -y
apt-get install ffmpeg -y
apt-get install wget -y
apt-get install tesseract -y
npm i imgbb-uploader
npm i 
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install
echo "[*] Todos foram instalados, para executar digite \"node index.js\" 😎👍"
echo $GREEN "use node index.js para iniciar"
