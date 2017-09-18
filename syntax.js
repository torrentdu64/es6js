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








