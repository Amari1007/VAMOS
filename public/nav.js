export const nav = async() => {
    return `
        <div class="header"> 
            <p class="btn-home"> <span style="font:4rem Verdana">Visit</span> Malawi</p>
        </div>
        
        <div class="options">
            <ul class="navbar">
                <li class="dropdown btn-explore">
                    <a> Explore <i class="fa fa-compass" style="font-size:2rem" aria-hidden="true"></i> </a>
                    <ul class="dropdown-menu">
                        <li> <a href="./lilongwe.html">Lilongwe</a> </li>
                        <li> <a>Blantyre</a> </li>
                        <li> <a>Zomba</a> </li>
                    </ul>
                </li>
                <li class="btn-other">Other</li>
                <li class="btn-about-website">About website</li>
            </ul>
        </div>    
    ` 
};