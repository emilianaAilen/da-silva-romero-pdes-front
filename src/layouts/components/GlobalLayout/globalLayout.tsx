import { ReactNode } from "react";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppProvider, Authentication, Navigation, Router, Session } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import logoMl from '../../../assets/Logo_ML.png';
import { UserRole } from "../../../features/auth/services/types";
import { useLocation, useNavigate } from "react-router-dom";

const USER_NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: '¡Hola!',
  },
  {
    segment: 'home',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'purchases',
    title: 'Mis Compras',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'favorites',
    title: 'Mis Favoritos',
    icon: <FavoriteIcon />,
  },
  {
    kind: 'divider',
  },
];

const ADMIN_NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: '¡Hola!',
  },
  {
    segment: 'home',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'purchases',
    title: 'Productos comprados',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'favorites',
    title: 'Productos guardados',
    icon: <FavoriteIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analítica',
  },
  {
    segment: 'reports',
    title: 'Reportes',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'purchases',
        title: 'Productos más vendidos',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'users',
        title: 'Mejores usuarios',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'favorites',
        title: 'Productos más guardados',
        icon: <DescriptionIcon />,
      },
    ],
  },
];

interface GlobalLayoutProps {
  children: ReactNode;
  session: Session;
  authentication: Authentication;
  role: string;
}

export const GlobalLayout = ({ children, session, authentication, role }: GlobalLayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const router = {
    pathname: location.pathname,
    searchParams: new URLSearchParams(location.search),
    navigate
  };

  return (
    <AppProvider
      branding={{ title: 'Asesor Personal de Compras', logo: <img style={{ maxHeight: '30px' }} src={logoMl} alt="logo" /> }}
      session={session}
      authentication={authentication}
      navigation={role === UserRole.user ? USER_NAVIGATION : ADMIN_NAVIGATION}
      router={router as Router}
    >
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </AppProvider>
  )
};
