var guests = ["Albert Einstein", "Ahmad", "Sana"];
console.log('Original Guests: ${guests}');
console.log("Good news! A bigger dinner table has been found!");
guests.unshift("Zainab");
guests.splice(2, 0, "David");
guests.push("Frank");
console.log("New Guests List: " + guests);
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guest = guests_1[_i];
    console.log("Dear ".concat(guest, ", I would like to invite you to dinner."));
}
