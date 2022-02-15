const readLine = require('readline-sync');

enum months {
  january = 1,
  february,
  march,
  april,
  june,
  july,
  august,
  september,
  october,
  novemver,
  december,
};

enum seasons {
  spring = 'spring',
  summer = 'summer',
  autum = 'autum',
  winter = 'winter',
};

type seasonInfo = {
  season: string,
  startsIn: number,
  endsIn: number,
};

type hemispheres = {
  south: seasonInfo[],
  north: seasonInfo[],
};

const data: hemispheres = {
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

const findSeason = (choiceMonth: number, choiceHemisphere: 'north' | 'south') => {
  if (choiceMonth < 0 || choiceMonth > 12
    || (choiceHemisphere !== 'north' && choiceHemisphere !== 'south')) {
    return 'invalid month or hemisphere';
  }
  const selectedData = data[choiceHemisphere];
  const seasons = selectedData
    .filter(({ startsIn, endsIn }) => startsIn <= choiceMonth || endsIn >= choiceMonth)
    .map((el) => el.season);
  return console.log(`estações: ${seasons[0]} e ${seasons[1]}`)
};

findSeason(choiceMonth, choiceHemisphere);