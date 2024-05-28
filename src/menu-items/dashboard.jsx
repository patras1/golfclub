// assets
import { DashboardOutlined  } from '@ant-design/icons';
import { TableOutlined  } from '@ant-design/icons/TableOutlined';
import SettingOutlined from '@ant-design/icons/SettingOutlined';
import RiseOutlined from '@ant-design/icons/RiseOutlined';
import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  TableOutlined,
  SettingOutlined,
  RiseOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id:'standings',
      title:'Standings',
      type:'item',
      url:'/standings',
      icon:icons.ProfileOutlined,
      breadcrumbs:false

    },
    {
      id:'members',
      title:'Members',
      type:'item',
      url:'/members',
      icon:icons.ProfileOutlined,
      breadcrumbs:false
    }
  ]
};

export default dashboard;
