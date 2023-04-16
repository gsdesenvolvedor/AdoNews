import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'AuthController.index')
  Route.post('/', 'AuthController.submit')
}).prefix('/login')
