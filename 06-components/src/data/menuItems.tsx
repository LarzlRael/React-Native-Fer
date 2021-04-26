import { MenuItem } from '../interfaces/AppInterfaces';

export const menuItems: MenuItem[] = [
    {
        name: 'Animation 01',
        icon: 'cube-outline',
        component: 'Animation101',
    },
    {
        name: 'Animation 02',
        icon: 'albums-outline',
        component: 'Animation102',
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen',
    },
    {
        name: 'Alertas',
        icon: 'alert-circle-outline',
        component: 'AlertsScreen',
    },
    {
        name: 'Inputs',
        icon: 'alert-circle-outline',
        component: 'TextInputScreen',
    },
    {
        name: 'Pull to refresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen',
    },
    {
        name: 'Section List',
        icon: 'refresh-outline',
        component: 'CustomSectionListScreen',
    },
    {
        name: 'Modals',
        icon: 'copy-outline',
        component: 'ModalScreen',
    },
    {
        name: 'InfiniteScroll',
        icon: 'download-outline',
        component: 'InfiniteScrollScreen',
    },
    {
        name: 'Sliders',
        icon: 'download-outline',
        component: 'SliderScreen',
    },
    {
        name: 'Themes',
        icon: 'flask-outline',
        component: 'ChangeThemeScreen',
    },
];

