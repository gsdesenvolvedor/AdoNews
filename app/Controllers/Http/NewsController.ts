import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class NewsController {
  public async index({view}: HttpContextContract) {
    return view.render('news/list')
  }

  public async read({}: HttpContextContract) {
    return 'NewsController.read'
  }
}
