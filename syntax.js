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



