function goUp(){
	document.documentElement.scrollTop = 0; //CHROME, FIREFOX, IE, OPERA
}

function btn_nav_click(){
	const btn_home = document.getElementsByClassName("btn-home")[0];
	const btn_explore = document.getElementsByClassName("btn-explore")[0];
	const btn_other = document.getElementsByClassName("btn-other")[0];
	const btn_about_web = document.getElementsByClassName("btn-about-website")[0];
	const btn_about = document.getElementsByClassName("btn-about-website")[0];
	const btn = document.getElementsByClassName("btn-about-website")[0];

	btn_home.addEventListener('click', ()=>{
		window.location.assign("./");
	});

	btn_about_web.addEventListener('click', ()=>{
		window.location.assign("./About.html");
	});

}
btn_nav_click();