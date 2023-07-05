function goUp(){
	document.documentElement.scrollTop = 0; //CHROME, FIREFOX, IE, OPERA
}

//THIS SHOULD LOAD AFTER DOM IS LOADED
async function btn_nav_click(){
	const btn_home = await document.getElementsByClassName("btn-home")[0];
	const btn_explore = await document.getElementsByClassName("btn-explore")[0];
	const btn_other = await document.getElementsByClassName("btn-other")[0];
	const btn_about_web = await document.getElementsByClassName("btn-about-website")[0];

	btn_home.addEventListener('click', ()=>{
		window.location.assign("./");
	});

	btn_about_web.addEventListener('click', ()=>{
		window.location.assign("./About.html");
	});

}

window.addEventListener('DOMContentLoaded', ()=>{
	btn_nav_click();
});