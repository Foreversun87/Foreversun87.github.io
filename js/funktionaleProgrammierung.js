const artists = [
    {
        name: "Patrick Holz",
        albums:[
            {
                title: "Push the Sky Away",
                artist: "Nick Cave",
                released: 2013
            },
            {
                title: "No more mercy",
                artist: "Nick Cave",
                released: 2001
            }
        ]
    },
    {
        name: "Holz Kopf",
        albums:[
            {
                title: "Away from Sky",
                artist: "Egon Washman",
                released: 2003
            },
            {
                title: "What is mercy?",
                artist: "Egon Washman",
                released: 1997
            }
        ]
    }

];

function releasedAfter2000(album){
    return album.released > 2000;
}

function hasAlbumReleasedAfter2000(artist){
    return artist.albums.filter(releasedAfter2000).length > 0;
}

function toArtistName(artist){
    return artist.name;
}

artists
    .filter(hasAlbumReleasedAfter2000)
    .map(toArtistName)
    .forEach(console.log);