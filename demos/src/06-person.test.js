const Person = require('./06-person');


describe('test for person',()=>{
  let person;
  // arrenge
  beforeEach(()=>{
    person = new Person('Nicolas',45,1.7);
  })
  test('shoult retun down',()=>{
    //AAAA
    // A = alistar/arrenge / Given
    // A = actuar / when
    // A = assert / then

   //arrenge
  person.weight=45;
  //Actuar
  const imc = person.calcIMC();
  // asert
  expect(imc).toBe('down')
})

test('shoult retun normal',()=>{
  person.weight=59;
  const imc = person.calcIMC();
  expect(imc).toBe('normal')
})
})



