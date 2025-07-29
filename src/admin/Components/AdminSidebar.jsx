import React from 'react'

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div>
       <Card className="h-200  w-50 p-4 shadow-xl text-white bg-amber-950 justify-items-center">
      <div className="mb-2 p-4  ">
        
          <img src="https://icon-library.com/images/admin-icon-png/admin-icon-png-18.jpg" alt="" width={130} />
        
      </div>
      <List className='text-orange-100'>
        <Link to={'/admin-home'}><ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem></Link>
       
     <Link to={'/admin-books'}> <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5 "  />
          </ListItemPrefix >
          All Books
        </ListItem></Link>

        <Link to={'/admin-careers'}> <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Careers
          <ListItemSuffix>
            
          </ListItemSuffix>
        </ListItem> </Link>
       
        <Link to={'/admin-settings'}> <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem></Link>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
    </div>


  )
}

export default AdminSidebar
