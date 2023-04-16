import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('/', 'Private/ArticlesController.index')
  Route.get('/:id', 'Private/ArticlesController.read')

  Route.get('/create', 'Private/ArticlesController.createForm')
  Route.post('/create', 'Private/ArticlesController.create')

  Route.get('/update/:id', 'Private/ArticlesController.updateForm')
  Route.post('/update/:id', 'Private/ArticlesController.update')

  Route.get('/delete/:id', 'Private/ArticlesController.deleteConfirm')
  Route.post('/delete/:id', 'Private/ArticlesController.delete')

  Route.get('/recover/:id', 'Private/ArticlesController.recoverConfirm')
  Route.post('/recover/:id', 'Private/ArticlesController.recover')
}).prefix('editor-panel/articles').middleware('auth')
