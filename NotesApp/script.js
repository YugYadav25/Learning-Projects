let create = document.getElementById("createnotes");
let add = document.getElementById("addnotes");

create.addEventListener('click', function(e) {
    let both = document.createElement("div"); // wrapper for textarea + button

    let txt = document.createElement("textarea");
    let button = document.createElement("button");
    
    button.innerHTML = 'Delete this Note';
    button.className = "delete";

    // delete functionality
    button.addEventListener('click', function(e) {
        add.removeChild(both);
    });

    // append textarea + button inside wrapper
    both.appendChild(txt);
    both.appendChild(button);

    // add wrapper to container
    add.appendChild(both);
});
function savedata(){
   
}