var playlist = { Maroon5: 'Girls like you' }

function updatePlaylist(obj, key, value) {
  return Object.assign( obj, { [key]: value } )
}

updatePlaylist(playlist, "Toby", "Feel it" )

console.log(playlist) // { Maroon5: 'Girls like you', Toby: 'Feel it' }




function removeFromPlaylist(playlist, artist) {
  delete playlist.artist
  return playlist
}




function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

var ids = { Brennan: 1, James: 2, David: 3 }

destructivelyUpdateObjectWithKeyAndValue(ids, "Ruben", 4)

console.log(ids) // { Brennan: 1, James: 2, David: 3, Ruben: 4 }