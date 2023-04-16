import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'news'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.string('slug', 255).notNullable().unique()

      table.string('title', 255).notNullable()
      table.string('subtitle', 255).notNullable()

      table.text('content').notNullable()
      table.string('image', 255).notNullable()

      table.timestamp('created_at', { useTz: true }).notNullable()
      table.uuid('created_by').references('id').inTable('users').notNullable()

      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.uuid('updated_by').references('id').inTable('users').notNullable()

      table.datetime('deleted_at', { useTz: true })
      table.uuid('deleted_by').references('id').inTable('users')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
