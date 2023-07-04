import {nav} from './nav.js';
import {footer} from './footer.js';

const view = document.getElementsByClassName('grid-container')[0];

view.getElementsByTagName("nav")[0].innerHTML = await nav();
view.getElementsByTagName("footer")[0].innerHTML = await footer();