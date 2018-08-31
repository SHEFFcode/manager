import React from 'react'
import { Text } from 'react-native'
import { Stack, Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'

const RouterComponent = () => {
  return (
    <Router>
      <Stack key={'root'} hideNavBar>
        <Stack key={'auth'}>
          <Scene
            key={'login'}
            component={LoginForm}
            title={'Please log in'}
            initial
          />
        </Stack>
        <Stack key={'main'}>
          <Scene
            rightTitle={'Add'}
            onRight={() => Actions.employeeCreate()}
            key={'employeeList'}
            component={EmployeeList}
            title={'Employee List'}
            initial
          />
          <Scene
            key={'employeeCreate'}
            component={EmployeeCreate}
            title={'Add an employee'}
          />
        </Stack>
      </Stack>
    </Router>
  )
}

export default RouterComponent
