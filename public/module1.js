function goUp(){
	document.documentElement.scrollTop = 0; //CHROME, FIREFOX, IE, OPERA
}

//THIS SHOULD LOAD AFTER DOM IS LOADED
async function btn_nav_click(){
	const minscreen_dropdown = await document.getElementsByClassName("dropdown-min")[0];
	const min_btn_explore = await document.getElementsByClassName("min-btn-explore")[0];
	const dropdown_explore_expand = await document.getElementsByClassName("dropdown-explore-expand")[0];
	
	const btn_home = await document.getElementsByClassName("btn-home")[0];
	const btn_explore = await document.getElementsByClassName("btn-explore")[0];
	const btn_other = await document.getElementsByClassName("btn-other")[0];
	const btn_about_web = await document.getElementsByClassName("btn-about-website")[0];
	const btn_minscreen = await document.getElementsByClassName("button-toggle")[0];

	btn_home.addEventListener('click', ()=>{
		window.location.assign("./");
	});

	btn_about_web.addEventListener('click', ()=>{
		window.location.assign("./About.html");
	});

	btn_minscreen.addEventListener('click', ()=>{
		if(minscreen_dropdown.style.display != "block"){
			minscreen_dropdown.style.display = "block";
		}else{
			minscreen_dropdown.style.display = "none";
		}
	});

	min_btn_explore.addEventListener("click", ()=>{
		if(dropdown_explore_expand.style.display != "block"){
			dropdown_explore_expand.style.display = "block";
			min_btn_explore.style.borderBottomWidth = "2px";
		}else{
			dropdown_explore_expand.style.display = "none";
			min_btn_explore.style.borderBottomWidth = "0px";
		}
	});

}

window.addEventListener('DOMContentLoaded', ()=>{
	btn_nav_click();
});