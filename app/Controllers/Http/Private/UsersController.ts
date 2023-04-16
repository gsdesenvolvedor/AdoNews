import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async read({}: HttpContextContract) {}

  public async createForm({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async updateForm({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async deleteConfirm({}: HttpContextContract) {}

  public async delete({}: HttpContextContract) {}

  public async recoverConfirm({}: HttpContextContract) {}

  public async recover({}: HttpContextContract) {}
}
