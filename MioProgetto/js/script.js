//Return the Param 'name' in the URL of the window
function getURLParam(name) {
    return new URLSearchParams(window.location.search).get(name);
}