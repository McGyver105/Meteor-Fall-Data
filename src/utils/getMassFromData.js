/*
Groups:
0-50
50-100
100-200
200-300
300-400
400-700
700-1000
then 1000+
and 10000+
100000+
*/

const getMassFromData = (meteorState) => {
    const finalArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < meteorState.length; i++) {
        if (meteorState[i].mass <= 50) finalArray[0]++
        else if (meteorState[i].mass <= 100 && meteorState[i].mass > 50) {
            finalArray[1]++;
        }
        else if (meteorState[i].mass <= 200 && meteorState[i].mass > 100) finalArray[2]++
        else if (meteorState[i].mass <= 300 && meteorState[i].mass > 200) finalArray[3]++
        else if (meteorState[i].mass <= 400 && meteorState[i].mass > 300) finalArray[4]++
        else if (meteorState[i].mass <= 700 && meteorState[i].mass > 400) finalArray[5]++
        else if (meteorState[i].mass <= 1000 && meteorState[i].mass > 700) finalArray[6]++
        else if (meteorState[i].mass <= 10000 && meteorState[i].mass > 1000) finalArray[7]++
        else if (meteorState[i].mass <= 100000 && meteorState[i].mass > 10000) finalArray[8]++
        else if (meteorState[i].mass > 100000) finalArray[9]++
    }
    return finalArray;
}

module.exports = getMassFromData;

