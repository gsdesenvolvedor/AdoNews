import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class NewsController {
  public async index({view}: HttpContextContract) {
    return view.render('news/index')
  }

  public async read({view}: HttpContextContract) {
    return view.render('news/read')
  }
}
