import { Box, Toolbar } from "@mui/material"
import { SideBar, NavBar } from "../components";


const drawerWidth =  280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex'}}>

        {/* Navbar */}
        <NavBar drawerWidth={drawerWidth}/>

        {/* sidebar */}
        <SideBar drawerWidth={drawerWidth}/>

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 3}}>

                {/* <Toolbar></Toolbar> */}
                <Toolbar />

                { children }

        </Box>

    </Box>
  )
}
