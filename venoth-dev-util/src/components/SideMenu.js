import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TagIcon from '@mui/icons-material/Tag';
import DataObjectIcon from '@mui/icons-material/DataObject';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import PreviewIcon from '@mui/icons-material/Preview';
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import HttpsIcon from '@mui/icons-material/Https';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import LanguageIcon from '@mui/icons-material/Language';
import TimerIcon from '@mui/icons-material/Timer';
import WelcomeMessage from '../components/Home/Homepage'
import InProgressMessage from '../components/progress/InProgress'
import CronEvaluator from './cron/CronEvaluator';


const mapObject = {
    "menu":[
        {
            "title":"Home",
            "icon": <HomeIcon />,
            "component": <CronEvaluator />,
            "path": "/home"
        },
        {
            "title":"CronJob Generator",
            "icon": <ScheduleIcon />,
            "component": <InProgressMessage />,
            "path": "/CronJobGenerator"
        },
        {
            "title":"Hash Generator",
            "icon": <TagIcon />,
            "component": <InProgressMessage />,
            "path": "/HashGenerator"
        },
        {
            "title":"JSON Formatter",
            "icon": <DataObjectIcon />,
            "component": <InProgressMessage />,
            "path": "/JSONFormatter"
        },
        {
            "title":"JSON <==> YAML converter",
            "icon": <DeveloperModeIcon />,
            "component": <WelcomeMessage />,
            "path": "/JSON-YAMLConverter"
        },
        {
            "title":"MarkDown Previewer",
            "icon": <PreviewIcon />,
            "component": <WelcomeMessage />,
            "path": "/MarkDownPreviewer"
        },
        {
            "title":"String Case Converter",
            "icon": <LocalConvenienceStoreIcon />,
            "component": <WelcomeMessage />,
            "path": "/StringCaseConverter"
        },
        {   
            "title":"Base 64 String Encode / Decode",
            "icon": <EnhancedEncryptionIcon />,
            "component": <WelcomeMessage />,
            "path": "/Base64EncoderDecoder"
        },
        {
            "title":"URL Encode / Decode",
            "icon": <HttpsIcon />,
            "component": <WelcomeMessage />,
            "path": "/URLEncoderDecoder"
        },
        {
            "title":"Unix Timestamp Converter",
            "icon": <SettingsBackupRestoreIcon />,
            "component": <WelcomeMessage />,
            "path": "/UnixTimestampConverter"
        },
        {
            "title":"Browser Client Details",
            "icon": <LanguageIcon />,
            "component": <WelcomeMessage />,
            "path": "/BrowserClientDetails"
        },
        {
            "title":"Uptime Calculator",
            "icon": <TimerIcon />,
            "component": <WelcomeMessage />,
            "path": "/UptimeCalculator"
        }
    ]
}


export default function BasicList() {
    
    if (!mapObject || !mapObject.menu || !Array.isArray(mapObject.menu)) {
        return null;
      }

    return (
      <Box sx={{ width: '100%', maxWidth: 270, bgcolor: '#5963b5' }}>
        <nav aria-label="main mailbox folders">
          <List>
            {mapObject.menu.map((menuItem, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton href={menuItem.path} >
                  <ListItemIcon>
                    {menuItem.icon}
                  </ListItemIcon>
                  {menuItem.title}
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
          </List>
        </nav>
        
      </Box>
    );
  }