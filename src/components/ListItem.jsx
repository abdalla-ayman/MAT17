import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import PaidIcon from '@mui/icons-material/Paid';
import Email from '@mui/icons-material/Email';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ArticleIcon from '@mui/icons-material/Article';
import React from 'react'

export default function ListItem({name}) {
    const icons = {'adminHome':PeopleAltIcon,
    'attendance':QrCodeIcon,
    'complaints':PriorityHighIcon,
    'sendEmail':Email,
    'payroll':PaidIcon, 
    'adminVacations':BeachAccessIcon,
    'employeeHome': PeopleAltIcon,
    'requestVacation': BeachAccessIcon,
    'sendCompliant': PriorityHighIcon,
    'policies': ArticleIcon
  }
    const Icon = icons[name];
    const title = name.toUpperCase()
    const location = window.location.pathname
  return (
    <a href={'/'+ name} style={{color:'inherit',textDecoration:'inherit'}}>
     <ListItemButton selected={location.slice(1) === name} >
      <ListItemIcon>
        <Icon color='secondary.black'/>
      </ListItemIcon>
      <ListItemText primary={title}  />
    </ListItemButton>
    </a>
  )
}
