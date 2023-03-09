import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';

export const UnderDevelopment = () => (
  <>
    <h1>This page is under development</h1>
    <Link to={AppRoutes.Main}>Назад</Link>
  </>
);
