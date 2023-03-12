import uniqid from 'uniqid';
import MainRoute from './main.js'
import HomeRoute from './home.js'
import UserRoute from './user.js'

const Routes = [
    {id: uniqid(), name: "main", route: MainRoute},
    {id: uniqid(), name: "Home", route: HomeRoute},
    {id: uniqid(), name: "User", route: UserRoute},
]

export default Routes;