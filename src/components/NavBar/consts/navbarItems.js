import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import HailIcon from '@mui/icons-material/Hail';
import SourceIcon from '@mui/icons-material/Source';
import DatasetIcon from '@mui/icons-material/Dataset';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import Diversity2Icon from '@mui/icons-material/Diversity2';

// // left sidebar category
export const mainNavbarItems = [
    {
        id: 0,
        icon: <HailIcon />,
        label: 'Authentication',
        route: 'authentication',
    },
    {
        id: 1,
        icon: <SourceIcon />,
        label: 'Database',
        route: 'database',
    },
    {
        id: 2,
        icon: <DatasetIcon />,
        label: 'Storage',
        route: 'storage',
    },
    {
        id: 3,
        icon: <CloudSyncIcon />,
        label: 'Hosting & Domains',
        route: 'hosting-domain',
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: 'Digital Marketing',
        route: 'digital-marketing',
    },
    {
        id: 5,
        icon: <Diversity2Icon />,
        label: 'Blog',
        route: 'blog',
    },
]