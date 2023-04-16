import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'ArticlesController.index')
Route.get('/:id', 'ArticlesController.read')
