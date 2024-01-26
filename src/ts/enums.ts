enum ClientUrls {
    homePage = '/',
    collections = '/collections',
    collection = '/collection',
    item = '/item',
    profile = '/profile',
    newCollection = '/new-collection',
    newItem = '/new-item',
    admin = '/admin',
    search = '/search',
    searchTag = '/tag',
}

enum Endpoints {
    collections = 'collections/',
    items = 'items/',
    newItem = 'items/new/',
    itemsInCollection = 'items/collection/',
    comments = 'comments/',
    search = 'search/',
    tags = 'tags/',
    users = 'users/',
}

enum Methods {
    get = 'GET',
    post = 'POST',
    put = 'PUT',
    delete = 'DELETE',
    patch = 'PATCH',
}

export { ClientUrls, Endpoints, Methods };
