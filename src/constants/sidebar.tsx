import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FestivalTwoToneIcon from '@mui/icons-material/FestivalTwoTone';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface ISidebarItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  path: string;
}

export interface ISidebar extends ISidebarItem {
  subItems: ISidebarItem[];
}

export const SIDEBAR: ISidebar[] = [
  {
    id: uuidv4(),
    title: '회원 관리',
    icon: <SupervisedUserCircleIcon />,
    path: '/management',
    subItems: [
      {
        id: uuidv4(),
        title: '일반 회원 관리',
        icon: <AccessibilityNewIcon />,
        path: '/user/general',
      },
      {
        id: uuidv4(),
        title: '관리자 회원 관리',
        icon: <AdminPanelSettingsIcon />,
        path: '/user/administrator',
      },
    ],
  },

  {
    id: uuidv4(),
    title: '페스티벌 관리',
    icon: <FestivalTwoToneIcon />,
    path: '/management',
    subItems: [
      {
        id: uuidv4(),
        title: '진행중인 페스티벌',
        icon: <PlayCircleIcon />,
        path: '/festival/in-progress',
      },
      {
        id: uuidv4(),
        title: '진행 종료 페스티벌',
        icon: <PauseCircleIcon />,
        path: '/festival/has-ended',
      },
    ],
  },
];
