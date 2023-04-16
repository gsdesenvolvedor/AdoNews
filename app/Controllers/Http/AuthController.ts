import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
  public async index({view}: HttpContextContract) {
    return view.render('auth/login')
  }


  public async submit({}: HttpContextContract) {}
}
