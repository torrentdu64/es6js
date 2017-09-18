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
