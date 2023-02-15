var guests = ["Albert Einstein", "Ahmad", "Fazila"];
console.log("Unfortunately, ".concat(guests[0], " cannot make it to the dinner."));
guests[0] = "Alex";
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner."));
}
