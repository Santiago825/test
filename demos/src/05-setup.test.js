describe('set',()=>{
  beforeAll(()=>{
    console.log('beforeAll')
    //up database
  })
  afterAll(()=>{
    console.log('afterAll')
    //down database
  })
  beforeEach(()=>{
    console.log('beforeEach')
    //corre antes de cada caso o test
  })
  afterEach(()=>{
    console.log('afterEach')
    //corre antes de cada caso o test
  })
  test('case 1',()=>{
    console.log('case 1');
    expect(1+1).toBe(2)
  });
  test('case 2',()=>{
    console.log('case 2');
    expect(1+3).toBe(4)
  });
describe('other group',()=>{
    beforeAll(()=>{
    console.log('beforeAll 2')
    //up database
  })
  test('case 2',()=>{
    console.log('case 3');
    expect(1+1).toBe(2)
  });
  test('case 3',()=>{
    console.log('case 4');
    expect(1+3).toBe(4)
  });
})
})
