const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

/*accepts an array of playlists where each playlist is an array of
objects with the following properties: trackId, artist, title,
votes, bpm. If the input is not an array, flattenPlaylists should
return an empty array.eturn a flat array of track objects, where
each object includes all the original track properties plus a
source property set to an array with the playlist index and the
track index indicating where the track originated.*/
function flattenPlaylists(arr) {
  let flatArr = [];

  if (Array.isArray(arr) === false) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j].source = [i, j];

      if (!flatArr.includes(arr[i][j])) {
        flatArr.push(arr[i][j]);
      }
    }
  }
  return flatArr;
}

let flatArr = flattenPlaylists(playlists);

/*accepts an array of track objects as returned by
flattenPlaylists (each with trackId, artist, title, votes, bpm,
and source properties) and returns a new array of track objects,
each with a score property added using the formula: votes * 10 -
Math.abs(bpm - 120)*/
function scoreTracks(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  for (let i = 0; i < arr.length; i++) {
    let bpm = arr[i].bpm;
    arr[i].score = arr[i].votes * 10 - Math.abs(bpm - 120);
  }
  return arr;
}

let scoredTracks = scoreTracks(flatArr);

/*accepts an array of track objects as returned by scoreTracks
and returns a new array with duplicate trackId entries removed,
keeping only the first occurrence of each.*/
function dedupeTracks(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  let uniqueTracks = [];
  let seenIds = [];

  for (let i = 0; i < arr.length; i++) {
    let currentTrack = arr[i];

    if (!seenIds.includes(currentTrack.trackId)) {
      seenIds.push(currentTrack.trackId);
      uniqueTracks.push(currentTrack);
    }
  }
  return uniqueTracks;
}

let dedupedArr = dedupeTracks(scoredTracks);

/*ccepts an array of track objects as returned by dedupeTracks
and a number representing the maximum allowed occurrences per
artist. The function should return a new array where no artist
appears more times than the given number, keeping the earliest
occurrences.*/
function enforceArtistQuota(arr, maxQuota) {
  if (!Array.isArray(arr)) {
    return [];
  }

  let allowedTracks = [];
  let artistCounts = {};

  for (let i = 0; i < arr.length; i++) {
    let track = arr[i];
    let artist = track.artist;

    if (artistCounts[artist] === undefined) {
      artistCounts[artist] = 0;
    }

    if (artistCounts[artist] < maxQuota) {
      allowedTracks.push(track);
      artistCounts[artist]++;
    }
  }
  return allowedTracks;
}

let enforcedArr = enforceArtistQuota(dedupedArr, 3);

/*accepts an array of track objects as returned by
enforceArtistQuota and returns a new array of { slot, trackId }
objects, where slot is a 1-based index representing each track's
position in the broadcast order.*/
function buildSchedule(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }

  let schedArr = [];

  for (let i = 0; i < arr.length; i++) {
    schedArr.push({ slot: i + 1, trackId: arr[i].trackId });
  }
  return schedArr;
}

let builtSchedule = buildSchedule(enforcedArr);
console.log(builtSchedule);
