enum Month {
  january = 1,
  february,
  march,
  april,
  june,
  july,
  august,
  september,
  october,
  november,
  december,
};

class Data extends Date {
  day: number;
  month: number;
  year: number;

  constructor(day: number, month: number, year: number) {
    super();
    const dateStr = `${month}-${day}-${year}`
    const test = new Date(dateStr).getDate(); // if an invalid date is create => test returns NaN
    if (test !== day) {
      day = 1;
      month = 1;
      year = 1900;
    }
    this.day = day;
    this.month = month;
    this.year = year;
  }
  getMonthName() {
    return Month[this.month];
  }

  isLeapYear() {
    return this.year % 4 === 0;
  }
  compare(date: Data): number {
    const currentDateStr = `${this.year}-${this.month}-${this.day}`;
    const dateStr = `${date.year}-${date.month}-${date.day}`;
    if (new Date(currentDateStr) > new Date(dateStr)) return 1
    if (new Date(currentDateStr) < new Date(dateStr)) return -1
    return 0
  }
  format(formatting: string) {
    const conditions: boolean[] = [
      /a{2,4}/g.test(formatting),
      /m{2}/g.test(formatting) || /M{1}/g.test(formatting),
      /d{2}/g.test(formatting),
    ]

    if (conditions.some(cond => !cond)) {
      throw new Error(`O formato passado é inválido: ${formatting}`)
    }

    const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
    const month = this.month > 9 ? this.month.toString() : `0${this.month.toString()}`;
    const year = this.year.toString();

    const dateFormatting = formatting
      .replace('dd', day)
      .replace('mm', month)
      .replace('M', this.getMonthName())
      .replace('aaaa', year)
      .replace('aa', year.substr(-2));

    return dateFormatting;
  }
}

const date = new Data(25, 2, 1987);
const date2 = new Data(10, 9, 1991)
console.log(date);
console.log(date.getMonthName());
console.log(date.compare(date2));
console.log(date.format('dd, M de aa'));
