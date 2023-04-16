import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'NewsController.index')
  Route.get('/:id', 'NewsController.show')
  Route.post('/', 'NewsController.store')
  Route.put('/:id', 'NewsController.update')
  Route.delete('/:id', 'NewsController.destroy')
}).prefix('news')
