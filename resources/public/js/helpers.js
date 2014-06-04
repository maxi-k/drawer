function setRotation() {
    var speed = document.getElementById("test-rot-speed").value;
    drawer.api.setRotation(parseInt(speed) || 0);
}

function printState() {
    drawer.api.addChange(function(state) {
        alert(state);
        return state;
    });
}
