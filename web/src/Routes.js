// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import StandardLayout from './layouts/StandardLayout/StandardLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={StandardLayout}>
        <Route path="/activities" page={ActivitiesPage} name="activities" />
        <Route path="/reports" page={ReportsPage} name="reports" />
        <Route path="/attendance" page={AttendancePage} name="attendance" />
        <Route path="/members" page={MembersPage} name="members" />
        <Route path="/groups" page={GroupsPage} name="groups" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
