function make_great(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push("the Great " + magicians[i]);
    }
    return greatMagicians;
}
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
var magicians = ["Harry Houdini", "David Blaine", "Penn Jillette", "Teller"];
var greatMagicians = make_great(magicians);
show_magicians(magicians);
show_magicians(greatMagicians);
