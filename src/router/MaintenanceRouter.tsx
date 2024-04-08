import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';

import { Maintenance } from '../pages/maintenance/Maintenance';

export const maintenanceRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<Maintenance />} />
    </>
  )
);
