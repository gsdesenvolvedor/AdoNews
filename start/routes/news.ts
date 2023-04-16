import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'NewsController.index')
Route.get('/:id', 'NewsController.read')
