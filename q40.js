function make_album(artist, album, tracks) {
    var album_obj = { artist: artist, album: album, tracks: tracks };
    if (tracks) {
        album_obj.tracks = tracks;
    }
    return album_obj;
}
var album1 = make_album("Adele", "21");
var album2 = make_album("Coldplay", "A Head Full of Dreams", 12);
var album3 = make_album("The Beatles", "Abbey Road", 17);
console.log(album1);
console.log(album2);
console.log(album3);
