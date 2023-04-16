import {DateTime} from 'luxon'
import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'
import {beforeSave} from "@adonisjs/lucid/build/src/Orm/Decorators";
import {v4 as UUIDv4} from 'uuid';

export default class Article extends BaseModel {
  @column({isPrimary: true})
  public id: string

  @column.dateTime({autoCreate: true})
  public created_at: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updated_at: DateTime

  @column.dateTime({autoCreate: false, autoUpdate: false})
  public deleted_at: DateTime | null

  @column({})
  public slug: string

  @column({})
  public title: string

  @column({})
  public subtitle: string

  @column({})
  public content: string

  @column({})
  public image: string

  @column({})
  public created_by: string

  @column({})
  public updated_by: string

  @column({})
  public deleted_by: string | null

  @beforeSave()
  public static async generateUuid(article: Article) {
    article.id = UUIDv4()
  }
}
