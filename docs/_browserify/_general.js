/* general scripts used everywhere */

export default class general {
    constructor() {}

    /*
    * takes the header element and adds an error banner
    */
    show_error(error_message, error) {
        var node = document.createElement('div');
        node.innerHTML = '<div class="error">' + error_message + ' <span class="error-close-button" onclick="this.parentElement.style.display=\'none\';">&times;</span></div>';
        document.getElementsByTagName('header')[0].appendChild(node);

        console.log(error_message + ': ' + error);
    }
}