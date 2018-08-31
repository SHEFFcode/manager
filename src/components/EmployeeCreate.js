import React, { Component } from 'react'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
import { Card, CardSection, Input, Button } from '../common'

class EmployeeCreate extends Component {
  render() {
    const { name, phone, shift } = this.props

    return (
      <Card>
        <CardSection>
          <Input
            label={'name'}
            placeholder={'Jane'}
            value={name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'name', value })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label={'phone'}
            placeholder={'555-555-5555'}
            value={phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: 'phone', value })
            }
          />
        </CardSection>
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    )
  }
}

function mapStateToProps(state) {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(
  mapStateToProps,
  { employeeUpdate },
)(EmployeeCreate)
