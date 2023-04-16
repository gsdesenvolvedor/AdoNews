import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'Private/UsersController.index')
  Route.get('/:id', 'Private/UsersController.read')

  Route.get('/create', 'Private/UsersController.createForm')
  Route.post('/create', 'Private/UsersController.create')

  Route.get('/update/:id', 'Private/UsersController.updateForm')
  Route.post('/update/:id', 'Private/UsersController.update')

  Route.get('/delete/:id', 'Private/UsersController.deleteConfirm')
  Route.post('/delete/:id', 'Private/UsersController.delete')

  Route.get('/recover/:id', 'Private/UsersController.recoverConfirm')
  Route.post('/recover/:id', 'Private/UsersController.recover')
}).prefix('private/users')
