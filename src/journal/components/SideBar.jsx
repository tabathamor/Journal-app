import { TurnedInNot } from "@mui/icons-material"
import { Box, 
            Divider, 
            Drawer, 
            Grid, 
            List, 
            ListItem,
            ListItemButton, 
            ListItemIcon, 
            ListItemText, 
            Toolbar, 
            Typography } from "@mui/material"

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box 
        component='nav'
        sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0} }}
        >

            <Drawer 
                variant="permanent"
                open
                sx={{ 
                    display:{xs: 'block', 
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, zIndex: -1 }
                
                }
                }}
                ></Drawer>

                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>
                        Tabatha moreno
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['enero', 'febrero', 'marzo', 'april', 'mayo', 'junio', 'jul'].map(month => (
                            <ListItem key={month} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={ month }/>
                                        <ListItemText secondary={ 'loremm jnknkncddddknllm;;'}/>
                                    </Grid>

                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

    </Box>
  )
}
