import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom';
import Dashboard from "./Containers/Dashboard/Dashboard"
import CardDetails from "./Containers/CardDetails/CardDetails"



const CreateRoutes=()=>(

<Routes>
    <Route path='/' Component={<Dashboard/>}/>
    <Route path="cardDetails" Component={<CardDetails/>}/>
</Routes>
)
export default CreateRoutes 