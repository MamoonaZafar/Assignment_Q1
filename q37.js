function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " shirt with the message \"").concat(message, "\""));
}
// Make a large shirt with default message
make_shirt();
// Make a medium shirt with default message
make_shirt("medium");
// Make a small shirt with a custom message
make_shirt("small", "TypeScript is awesome!");
