// Nothing is here


function checkFlagMultisite (exName,idName) {
	inputFlag = document.getElementById(idName).value.toLowerCase();
	correctFlag = getFlag( exName );
	if(correctFlag == inputFlag) { $("#correctModal").modal()}
	else { $("#incorrectModal").modal() }
}

function checkFlag (exName) {
	inputFlag = document.getElementById('flagInput').value.toLowerCase();
	correctFlag = getFlag( exName );
	if(correctFlag == inputFlag) { $("#correctModal").modal()}
	else { $("#incorrectModal").modal() }
}

function getFlag(exName) {
	flag = flags[exName].toLowerCase();
	return flag;
}


function checkPins() {
	inputPin = document.getElementById('pin1').value;
	inputPin2 = document.getElementById('pin2').value;
	inputPin3 = document.getElementById('pin3').value;
	inputPin4 = document.getElementById('pin4').value;
	if(inputPin == "Vcc" && inputPin2 == "TXD" && inputPin3 == "RXD" && inputPin4 == "GND") { $("#correctModal").modal()}
	else { $("#incorrectModal").modal()}
}

function validateCheck() {
    if (document.getElementById("choice4").checked == true) { $("#correctModal").modal()}
    else { $("#incorrectModal").modal()}
}

function checkFlag4 () {
	inputVastus = document.getElementById('flagInput4').value;
	if(inputVastus === "uks" || inputVastus === "ligipääs" || inputVastus === "tuvastus" || inputVastus === "rfid" ) { $("#correctModal").modal()}
	else { $("#incorrectModal").modal()}
}

function checkFlag6 () {
	inputVastus = document.getElementById('flagInput6').value;
	if(inputVastus === "8000000D8578EDF8458CE06FA2A6BD05EA2E67978853539C15018ECC" || inputVastus === "8000000D8578EDF845832366C5CC71D45733C74E832C879D88E8E6EB" || inputVastus === "8000000D8578EDF8458EA4FBDCB815996371BF8407920BA74EFFA76A") { $("#correctModal").modal()}
	else { $("#incorrectModal").modal()}
}

function checkFlag2 () {
	inputLipp = document.getElementById('komponendid').value;
	if(inputLipp === "357MÄLU842KÕVAKETTAS" || inputLipp === "357MÄLU842HDD" || inputLipp === "357MÄLU842SSD") { $("#correctModal").modal()}
	else { $("#incorrectModal").modal() }
}

function checkFlag3 () {
	inputLipp = document.getElementById('allalaadimised').value;
	if(inputLipp === "433" || inputLipp === "kui isa arnoga koolimajja jõudis olid tunnid juba alanud!" || inputLipp === "CN150.-45tk6750.-" || inputLipp === "9712TJCAMŠTA1M5364434IIHÕNKAA") { $("#correctModal").modal()}
	else { $("#incorrectModal").modal() }
}

// Flag array
var flags = {
	kunst:"198774078",
	digikys1:"2F",
	digikys3:"UART",
	digikys4:"IntActOS-32",
	digikys5:"252",
	digikys6:"root2root",
	tundmatu1:"FS1000A",
	tundmatu2:"433",
	tundmatu3:"Arduino Uno",
	tundmatu4:"salajane s6num",
	boodikiirus:"115200",
	andmevahetusvorming:"JSON",
	uksekaardita:"13",
	ohtudeliigid:"STLMLF",
	pordid:"12719911337ValeRCAAFFAFFAFFamazoncasicsAUH",
	programmitundmine:"SEIESUIEIPUYDENEOH",
	emailid:"654872368",
	epoed:"678980234",
	leiaparoolpildilt:"UGEzM3cwcmQh",
	võrgukaablid:"1617414013371251345",
	lahtekood:"dogisgod",
	esoteric:"this is sparta!"


};
//Part 3: god
