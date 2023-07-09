export const nav = async() => {
    return `
        <div class="header"> 
            <p class="btn-home"> <span class="header-plain">Visit</span> Malawi</p>
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

            <div class="options-minscreen">
               <button type="button" class="button-toggle">
                    <img src="./res/img/menu-svgrepo-com.svg" width="30px" alt="">
               </button>

               <div class="dropdown-min">
                    <ul>
                        <li>
                            <button type="button" class="min-btn-explore">
                                Explore 
                                <i class="fa fa-list-ul" aria-hidden="true"></i>
                            </button>
                            <ul class="dropdown-explore-expand">
                                <li> <a href="./lilongwe.html">Lilongwe</a> </li>
                                <li> <a href="./lilongwe.html">Blantry</a> </li>
                                <li> <a href="./lilongwe.html">Zomba</a> </li>
                            </ul>                        
                        </li>
                        <li> <a href="#">Other</a> </li>
                        <li> <a href="./About.html">About Website</a> </li>
                    </ul>
               </div>

            </div>

        </div>    
    ` 
};