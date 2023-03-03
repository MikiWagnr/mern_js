/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.
Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.
return an array of the song indexes or [-1, -1] if no pair is found.
If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */

        // function musicRuntime(busDuration, songDurations) {
        //     const freq = {};
        //     const target = busDuration - 30;
        
        //     for (let i = 0; i < songDurations.length; i++) {
        //         const compliment = target - songDurations[i];
        
        //         if (freq[compliment]) {
        //             return [freq[compliment], i];
        //         } else {
        //             freq[songDurations[i]] = i;
        //         }
        //     }
        
        //     return [-1, -1];
        // }

        function musicRuntime(busDuration, songDurations) {
            const songDurationToIndexTable = {};
            const target = busDuration - 30;
            let longestPair = [-1, 1];
        
            for (let i = 0; i < songDurations.length; i++) {
                const compliment = target - songDurations[i];
        
                // if (songDurationToIndexTable.hasOwnProperty(compliment)) {}
                if (compliment in songDurationToIndexTable) {
                    // check if longest pair contains a maximun song
                    if (longestPair[0] === -1) {
                        longestPair = [songDurationToIndexTable[compliment], i];
                    }
                    else {
                        const oldSongA = songDurations[longestPair[0]];
                        const oldSongB = songDurations[longestPair[1]];
                        const newSongA = songDurations[songDurationToIndexTable[compliment]];
                        const newSongB = songDurations[i];
                        const maxSong = Math.max(oldSongA, oldSongB, newSongA, newSongB);
        
                        if (maxSong === newSongA || maxSong === newSongB) {
                            longestPair = [songDurationToIndexTable[compliment], i]
                        }
                    }
                }
                else {
                    songDurationToIndexTable[songDurations[i]] = i;
                }
            }
            return longestPair
        }
        
        console.log(musicRuntime(busDuration1, songDurations1))
        console.log(musicRuntime(busDuration2, songDurations2))
        console.log(musicRuntime(busDuration3, songDurations3))