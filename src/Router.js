import React from 'react'
import { Stack, Scene, Router } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RouterComponent = () => {
  return (
    <Router>
      <Stack key={'root'}>
        <Scene
          key={'login'}
          component={LoginForm}
          title={'Please log in'}
          initial
        />
        <Scene
          key={'employeeList'}
          component={EmployeeList}
          title={'Employee List'}
        />
      </Stack>
    </Router>
  )
}

export default RouterComponent
