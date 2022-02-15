"use strict";
const readLine = require('readline-sync');
var months;
(function (months) {
    months[months["january"] = 1] = "january";
    months[months["february"] = 2] = "february";
    months[months["march"] = 3] = "march";
    months[months["april"] = 4] = "april";
    months[months["june"] = 5] = "june";
    months[months["july"] = 6] = "july";
    months[months["august"] = 7] = "august";
    months[months["september"] = 8] = "september";
    months[months["october"] = 9] = "october";
    months[months["novemver"] = 10] = "novemver";
    months[months["december"] = 11] = "december";
})(months || (months = {}));
;
var seasons;
(function (seasons) {
    seasons["spring"] = "spring";
    seasons["summer"] = "summer";
    seasons["autum"] = "autum";
    seasons["winter"] = "winter";
})(seasons || (seasons = {}));
;
const data = {
    north: [
        { season: seasons.autum, startsIn: months.september, endsIn: months.december },
        { season: seasons.winter, startsIn: months.december, endsIn: months.march },
        { season: seasons.spring, startsIn: months.march, endsIn: months.june },
        { season: seasons.summer, startsIn: months.june, endsIn: months.september },
    ],
    south: [
        { season: seasons.spring, startsIn: months.september, endsIn: months.december },
        { season: seasons.summer, startsIn: months.december, endsIn: months.march },
        { season: seasons.autum, startsIn: months.march, endsIn: months.june },
        { season: seasons.winter, startsIn: months.june, endsIn: months.september },
    ],
};
const choiceMonth = readLine.questionInt('Escolha um mês do ano de 1 a 12: \n');
const choiceHemisphere = readLine.question('digite um hemisfério:\n north\n south\n');
const findSeason = (choiceMonth, choiceHemisphere) => {
    if (choiceMonth < 0 || choiceMonth > 12
        || (choiceHemisphere !== 'north' && choiceHemisphere !== 'south')) {
        return 'invalid month or hemisphere';
    }
    const selectedData = data[choiceHemisphere];
    const seasons = selectedData
        .filter(({ startsIn, endsIn }) => startsIn <= choiceMonth || endsIn >= choiceMonth)
        .map((el) => el.season);
    return console.log(`estações: ${seasons[0]} e ${seasons[1]}`);
};
findSeason(choiceMonth, choiceHemisphere);
