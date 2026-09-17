// matchers
test('test obj',()=>{
  const data = { name:'nico' }
  data.lastname = 'molina'
  expect(data).toEqual({name:'nico',lastname: 'molina'})
})

test('null',()=>{
  const data = null
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
})

test('Booleans',()=>{
  const data = null
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
})

test('String',()=>{
  const data = null
  expect('christoph').toMatch(/stop/);

})

test('List / arrays',()=>{
  const numbers = [1,2,3,4]
  expect(numbers).toContain(3);

})


