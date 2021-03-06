import http from '../http';

import albumInfo from './album';
import artistInfo from './artist';

export default {
    /**
     * Get extra song information (lyrics, artist info, album info).
     *
     * @param  {Object}     song
     * @param  {?Function}  cb
     */
    fetch(song, cb = null) {
        // Check if the song's info has been retrieved before.
        if (song.infoRetrieved) {
            cb && cb();

            return;
        }

        http.get(`${song.id}/info`, response => {
            const data = response.data;

            song.lyrics = data.lyrics;

            data.artist_info && artistInfo.merge(song.album.artist, data.artist_info);
            data.album_info && albumInfo.merge(song.album, data.album_info);

            song.infoRetrieved = true;

            cb && cb();
        });
    },
};
