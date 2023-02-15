var current_users = ['Ali', 'Eric', 'Ahmad', 'Sana', 'Eve'];
var new_users = ['Daniyal', 'Ahmad', 'Sana', 'Eve', 'Amna'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var is_used = false;
    for (var _a = 0, current_users_1 = current_users; _a < current_users_1.length; _a++) {
        var current_user = current_users_1[_a];
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            is_used = true;
            break;
        }
    }
    if (is_used) {
        console.log("Sorry, the username \"".concat(new_user, "\" has already been taken. Please choose a different one."));
    }
    else {
        console.log("Congratulations, the username \"".concat(new_user, "\" is available!"));
    }
}
