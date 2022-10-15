import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import QrCodeIcon from '@mui/icons-material/QrCode';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import Email from '@mui/icons-material/Email';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ArticleIcon from '@mui/icons-material/Article';
import Typography from '@mui/material/Typography'
import React from 'react'

export default function ListItem({name}) {
    const icons = {'adminHome':PeopleAltIcon,
    'attendance':QrCodeIcon,
    'complaints':PriorityHighIcon,
    'sendEmail':Email,
    'adminVacations':BeachAccessIcon,
    'employeeHome': PeopleAltIcon,
    'requestVacation': BeachAccessIcon,
    'sendComplaint': PriorityHighIcon,
    'policies': ArticleIcon
  }
    const Icon = icons[name];
    const title = name.toUpperCase()
    const location = window.location.pathname
    console.log(name)
  return (
    <a href={'/'+ name} style={{color:'inherit',textDecoration:'inherit'}}>
     <ListItemButton selected={location.slice(1) === name} >
      <ListItemIcon>
        <Icon style={{color:"#ffffff"}}/>
      </ListItemIcon>
      <ListItemText 
      disableTypography
        primary={<Typography  style={{fontSize:"12px"}} color='secondary.white'>{title}</Typography>}
        />
    </ListItemButton>
    </a>
  )
}
