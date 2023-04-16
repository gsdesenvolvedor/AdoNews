import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'Private/NewsController.index')
  Route.get('/:id', 'Private/NewsController.read')

  Route.get('/create', 'Private/NewsController.createForm')
  Route.post('/create', 'Private/NewsController.create')

  Route.get('/update/:id', 'Private/NewsController.updateForm')
  Route.post('/update/:id', 'Private/NewsController.update')

  Route.get('/delete/:id', 'Private/NewsController.deleteConfirm')
  Route.post('/delete/:id', 'Private/NewsController.delete')

  Route.get('/recover/:id', 'Private/NewsController.recoverConfirm')
  Route.post('/recover/:id', 'Private/NewsController.recover')
}).prefix('editor-panel/news').middleware('auth')
