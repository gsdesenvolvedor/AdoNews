import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Article from "App/Models/Article";

export default class ArticlesController {
  public async index({view}: HttpContextContract) {

    // Load articles from database
    const articles = await Article.all()

    // Render view
    return view.render('articles/index', { articles })
  }

  public async read({view}: HttpContextContract) {
    return view.render('articles/read')
  }
}
