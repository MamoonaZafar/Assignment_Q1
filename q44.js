function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(", ")));
}
makeSandwich("lettuce", "tomato", "bacon", "mayo");
makeSandwich("turkey", "avocado");
makeSandwich("peanut butter", "jelly");
