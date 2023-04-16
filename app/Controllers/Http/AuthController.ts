import type {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import session from "Config/session";

export default class AuthController {
  public async index({view}: HttpContextContract) {
    return view.render('auth/login')
  }

  public async submit({auth, request, response}: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    await auth.use('web').attempt(email, password)

    if (auth.use('web').isLoggedIn) {
      return response.redirect().toRoute('/editor-panel/articles')
    }
  }

  public async logout({auth, response}: HttpContextContract) {
    await auth.use('web').logout()
    return response.redirect().toRoute('/login')
  }
}
