/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration
) {
    
    let answer = Infinity;

    for (let i = 0; i < landStartTime.length; i++) {

        for (let j = 0; j < waterStartTime.length; j++) {

            // Land -> Water
            let landFinish =
                landStartTime[i] + landDuration[i];

            let waterStart =
                Math.max(landFinish, waterStartTime[j]);

            answer = Math.min(
                answer,
                waterStart + waterDuration[j]
            );

            // Water -> Land
            let waterFinish =
                waterStartTime[j] + waterDuration[j];

            let landStart =
                Math.max(waterFinish, landStartTime[i]);

            answer = Math.min(
                answer,
                landStart + landDuration[i]
            );
        }
    }

    return answer;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna