'use strict'

const User = use('App/Models/User')

// all() pega todos os params da requisição.
// only() pega apenas os campos passados pra função.

class UserController {
  async store ({ request }) {
    const data = request.only(['username', 'email', 'password'])

    const user = await User.create(data)

    return user
  }
}

module.exports = UserController
