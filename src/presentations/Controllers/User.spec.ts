import { User } from '@controllers/User'

test('UserController', () => {
  
    const user = new User('Caio', 'caiotony16@gmail.com')

    expect(user instanceof User).toBeTruthy()

})
