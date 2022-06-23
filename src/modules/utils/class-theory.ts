class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public static hello(): string {    // static статический метод класса (не использует this), один для всех экземпляров класса
    return 'Hello world!';
  }

  public say(): string {
    return this.getName();
  }


  private getName(): string {
    return `My name is ${this.name}`;  // 'My name is ' + this.name
  }
}


const animal1: Animal = new Animal('Kitty');
const animal2: Animal = new Animal('Mouse');


const whatSaidKitty = animal1.say();  // в этлм месте появится строка 'My name is Kitty'
const whatSaidMouse = animal2.say();

const hello = Animal.hello();   // здесь будет Hello world! (вызов статического метода класса)

const cos = Math.cos(3.14);
