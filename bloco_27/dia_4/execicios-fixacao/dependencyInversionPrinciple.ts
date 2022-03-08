// class Flute {
//   constructor(public name: string) { }
//   public play(): void {
//     console.log(`${this.name} está emitindo melodias`);
//   }
// }

// class Musician {
//   // Agora a flauta é recebida como parâmetro
//   constructor(public name: string, public flute: Flute) { }

//   play() {
//     this.flute.play();
//     console.log(
//       `"${this.name}" é quem está comandando a emissão das melodias`
//     );
//   }
// }

// const flute = new Flute('Minha flauta');
// const musician = new Musician('Márcia', flute);
// musician.play();

// Imagine que agora a pessoa precisa tocar não só flauta, mas também bateria e violão, bem como alguns outros instrumentos que podem ser criados no futuro. O código fica assim:

interface Instrument {
  name: string;
  play(): void;
}

class Flute implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está emitindo melodias`);
  }
}

class Drums implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está fazendo o ar vibrar bem forte`);
  }
}

class Guitar implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} está vibrando suas cordas`);
  }
}

class Musician {
  constructor(
    public name: string,
    public instrument: Instrument,
  ) { }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão dos sons`
    );
  }
}

const musician2 = new Musician('Vicente', new Drums('Minha bateria'));
const musician3 = new Musician('Natan', new Guitar('Meu violão'));

musician2.play();
musician3.play();