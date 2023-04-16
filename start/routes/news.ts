import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'NewsController.index')
  Route.get('/:id', 'NewsController.read')
}).prefix('/')
