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


const mapObject = {
    "menu":[
        {
            "title":"Home",
            "icon": HomeIcon
        },
        {
            "title":"CronJob Generator",
            "icon": ScheduleIcon
        },
        {
            "title":"Hash Generator",
            "icon": TagIcon
        },
        {
            "title":"JSON Formatter",
            "icon": DataObjectIcon
        },
        {
            "title":"JSON <==> YAML converter",
            "icon": DeveloperModeIcon
        },
        {
            "title":"MarkDown Previewer",
            "icon": PreviewIcon
        },
        {
            "title":"String Case Converter",
            "icon": LocalConvenienceStoreIcon
        },
        {   
            "title":"Base 64 String Encode / Decode",
            "icon": EnhancedEncryptionIcon
        },
        {
            "title":"URL Encode / Decode",
            "icon": HttpsIcon
        },
        {
            "title":"Unix Timestamp Converter",
            "icon": SettingsBackupRestoreIcon
        },
        {
            "title":"Browser Client Details",
            "icon": LanguageIcon
        },
        {
            "title":"Uptime Calculator",
            "icon": TimerIcon
        }
    ]
}


export default function getIconMap(){
    return mapObject;
}


