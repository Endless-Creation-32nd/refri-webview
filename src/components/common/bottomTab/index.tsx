import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { TabBar } from 'antd-mobile';
import { useRouter } from 'next/router';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KitchenIcon from '@mui/icons-material/Kitchen';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const tabs = [
  {
    key: '/',
    icon: <HomeOutlinedIcon />,
  },
  {
    key: '/refri',
    icon: <KitchenIcon />,
  },
  {
    key: '/recipe',
    icon: <ArticleOutlinedIcon />,
  },
  {
    key: '/mypage',
    icon: <PersonOutlineIcon />,
  },
];

const StyledTabBar = styled(TabBar)`
  .adm-tab-bar-item-active {
    color: #353535;
  }

  svg {
    position: relative;
    top: -4px;
    width: 25px;
    height: 25px;
  }
`;

export const BottomTab: React.FC = () => {
  const router = useRouter();

  return (
    <StyledTabBar
      activeKey={router.pathname}
      data-testid="bottomTab"
      onChange={(path) => router.push(path)}
    >
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} />
      ))}
    </StyledTabBar>
  );
};
