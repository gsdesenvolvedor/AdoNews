import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Article from "App/Models/Article";

export default class extends BaseSeeder {
  public async run () {

    await Article.createMany([
      {
        title: 'Lorem ipsum dolor sit amet',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nisl nisl aliquam nisl, egeipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nisl nisl aliquam nisl, egeipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultricies, nisl nisl aliquam nisl, ege.',
        image: 'https://picsum.photos/200/300',
        slug: 'lorem-ipsum-dolor-sit-amet',
        created_by: '69ec4802-fda6-4b75-b1dd-d9f38ccece41',
        updated_by: '69ec4802-fda6-4b75-b1dd-d9f38ccece41',
        deleted_by: null,
        deleted_at: null
      }
    ])
  }
}
