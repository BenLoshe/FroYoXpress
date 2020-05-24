function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

function showToast() {
        // Get the snackbar DIV
        var x = document.getElementById('snackbar');
        
        // Add the "show" class to DIV
        x.className = "show";
        
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 9990);
}

if (getUrlParam('redirect', 'other') === ('success')) {
    showToast()
}