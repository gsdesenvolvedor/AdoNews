import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.string('name', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('password', 255).notNullable()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.uuid('created_by').notNullable()

      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.uuid('updated_by').notNullable()

      table.datetime('deleted_at', { useTz: true })
      table.uuid('deleted_by')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
