import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Root from './components/root';

// Add react-router-dom imports
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
// create router with JSX Route elements
const appRouter = createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<Root/> }>
 <Route index element={<HomePage/>}/>

<Route path=":type" element={<HomePage />} />

<Route path=":type/:id" element={<PetDetailsPage/>}/>

<Route path='search' element={<SearchPage/>}/>

<Route path='pet-details-not-found' element={<PetDetailsNotFound/>} />

</Route>));

function App() {
  return (
    // replace below with a Router Provider
    < RouterProvider router={appRouter}/>
  );
}

export default App;



/*No, when the URL matches `:type/:id` (like `/cats/123`), only the `PetDetailsPage` component is rendered in the `<Outlet />`—not `HomePage`. 

Even though both routes use `:type`, React Router matches the most specific route. So:
- `/cats` → renders `HomePage`
- `/cats/123` → renders `PetDetailsPage`

`HomePage` is not rendered for `/cats/123`. Only `PetDetailsPage` is shown for that path. The `:type` parameter is just reused to help fetch the right data, but it does not cause `HomePage` to render again.*/