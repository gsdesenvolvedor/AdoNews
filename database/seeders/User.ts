import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {

    await User.createMany([
      {
        name: 'Gabriel Souza',
        email: 'gabriel.souza@gabrielsouza.dev.br',
        password: 'Teste!@#2023',
        created_by: 'seed',
        updated_by: 'seed',
        deleted_by: null,
        deleted_at: null
      }
    ])
  }
}
