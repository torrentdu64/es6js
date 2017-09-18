const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

//-------------------------------------------------//
//



const profile = {
    name: 'Alex',
    getName: function() {
        return this.name;
    }
};

//-------------------------------------------------//
//


const red = '#ff0000';
const blue = '#0000ff';

const COLORS = { red, blue };

//-------------------------------------------------//
//

const fields = ['firstName', 'lastName', 'phoneNumber'];

const props = { fields };

//-------------------------------------------------//
//

const canvasDimensions = (width, initialHeight) => {
  const height = initialHeight * 9 /16;
  return {
    width,
    height
  };
};

//-------------------------------------------------//
//

const color = 'red';

const Car = {
  color,
  drive() { return 'Vroom!';},


  getColor()  {
    return this.color;
  }
};


//-------------------------------------------------//
//


const sum = (a = 0, b = 0) => a + b;


//-------------------------------------------------//
//

function addOffset(style = {}) {


  style.offset = '10px';

  return style;
}

//-------------------------------------------------//
//

function product(...numbers) {


  return numbers.reduce( (acc, number) => acc * number, 1);

}

//-------------------------------------------------//
//

function join(...arrays) {
  return arrays.reduce((prev, next) => [...prev, ...next], []);
}


//-------------------------------------------------//
//

const unshift = (array, ...arg) => [...arg].concat(array);

//-------------------------------------------------//
//

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

const isEngineer = ({title, department}) => title === 'Engineer' && department === 'Engineering';

//-------------------------------------------------//
//

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const classesAsObject = classes.map( ([subject, time, teacher]) => {
    return {subject, time, teacher};
});

//-------------------------------------------------//
//

const numbers = [1,2,3];

function double([num1,...num2]) {
    if(num1===undefined) return [];
    if (num2.length===0) return [2*num1];
    return [2*num1,...double(num2)];
}



//-------------------------------------------------//
//


class Monster {
    constructor(options){
      this.health =  100;
      this.name =  options.name;
    }

}

class Monster {
  constructor({name}) {
    this.name = name;
    this.health = 100;
  }
}
class Snake extends Monster {
    constructor(options) {
        super(options);
    }
    bite(snake) {
        return snake.health -= 10;
    }
}
const snake1 = new Snake({name:'rattler'});
const snake2 = new Snake({name:'copperhead'});
snake1.bite(snake2);
console.log(snake2);



