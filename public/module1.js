export function goUp(){
	document.body.scrollTop = 0; //SAFARI
	document.documentElement.scrollTop = 0; //CHROME, FIREFOX, IE, OPERA
}