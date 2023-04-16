import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";

export default class Auth {
  public async handle({session, response}: HttpContextContract, next: () => Promise<void>) {
    // Obtain the user from the session
    const user = session.get('user')

    // Check if there is a user in the session
    if (!user) {
      return response.redirect().toPath('/login')
    }

    // Check if the user has an email address
    if (!user.email) {
      return response.redirect().toPath('/login')
    }

    // Check if the user has a name
    if (!user.name) {
      return response.redirect().toPath('/login')
    }

    // Check if the user is in the database
    const userInDatabase = await User.findBy('email', user.email)

    // If the user is not in the database, redirect to the login page
    if (!userInDatabase) {
      return response.redirect().toPath('/login')
    }

    // If the user is logged in, continue to the route
    await next()
  }
}
