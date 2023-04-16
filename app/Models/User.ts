import {DateTime} from 'luxon'
import {BaseModel, column} from '@ioc:Adonis/Lucid/Orm'
import {beforeSave} from "@adonisjs/lucid/build/src/Orm/Decorators";
import Hash from "@ioc:Adonis/Core/Hash";
import {v4 as UUIDv4} from 'uuid';

export default class User extends BaseModel {
  @column({isPrimary: true})
  public id: string

  @column.dateTime({autoCreate: true})
  public created_at: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updated_at: DateTime

  @column.dateTime({autoCreate: false, autoUpdate: false})
  public deleted_at: DateTime | null

  @column({})
  public name: string

  @column({})
  public email: string

  @column({})
  public password: string

  @column({})
  public created_by: string

  @column({})
  public updated_by: string

  @column({})
  public deleted_by: string | null

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @beforeSave()
  public static async generateUuid(user: User) {
    user.id = UUIDv4()
  }
}
