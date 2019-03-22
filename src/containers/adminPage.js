import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/buttonCustom'
import Layout from './layout'
import TitleComp from '../components/titleComponent'
import LocationForm from '../components/locationForm'
import ServiceForm from '../components/serviceForm'
import EstimationForm from '../components/estimationForm'

const StandardDiv = styled.div`
display: flex;
flex-direction : column;
margin-top : 10px;
`
const RowDiv = styled.div`
display : flex;
flex-direction : row;
align-items : center;
`

const ButtonDiv = styled.div`
display : flex;
flex : 1;
justify-content : center;
`

export default class AdminPage extends Component {

  componentDidMount() {
  }

  state = {
    creationShow: true,
    estimationShow: false,
    locationShow: false,
    serviceShow: false,
    createLocationShow: false,
    createEstimationShow: false,
    createServiceShow: false
  }

  changeCreationStatus = () => {
    this.setState({
      creationShow: !this.state.creationShow
    })
  }
  changeEstimationStatus = () => {
    this.setState({
      estimationShow: !this.state.estimationShow
    })
  }
  changeLocationStatus = () => {
    this.setState({
      locationShow: !this.state.locationShow
    })
  }
  changeServiceStatus = () => {
    this.setState({
      serviceShow: !this.state.serviceShow
    })
  }

  createNewLocation = () => {
    this.setState({
      createLocationShow: true,
      createEstimationShow: false,
      createServiceShow: false
    })
  }
  createNewEstimation = () => {
    this.setState({
      createLocationShow: false,
      createEstimationShow: true,
      createServiceShow: false
    })
  }
  createNewService = () => {
    this.setState({
      createLocationShow: false,
      createEstimationShow: false,
      createServiceShow: true
    })
  }

  render() {
    const { creationShow, estimationShow, locationShow, serviceShow, createLocationShow, createEstimationShow, createServiceShow } = this.state
    return (
      <Layout>
        < StandardDiv>
          <TitleComp func={this.changeCreationStatus} bool={creationShow} text={'Creation'} />
          {creationShow ?
            < StandardDiv>
              <RowDiv>
                <ButtonDiv>
                  <Button func={this.createNewLocation} text={'Create Location'}></Button>
                </ButtonDiv>
                <ButtonDiv>
                  <Button func={this.createNewService} text={'Create Service'}></Button>
                </ButtonDiv>
                <ButtonDiv>
                  <Button func={this.createNewEstimation} text={'Create Estimate'}></Button>
                </ButtonDiv>
              </RowDiv>
              {createLocationShow ?
                <LocationForm />
                : null}
              {createEstimationShow ?
                <EstimationForm />
                : null}
              {createServiceShow ?
                <ServiceForm />
                : null}
            </StandardDiv>
            : (null)
          }
        </StandardDiv>
        < StandardDiv>
          <TitleComp func={this.changeEstimationStatus} bool={estimationShow} text={'Estimation View/Update'} />
          {estimationShow ?
            <p>Creation</p>
            : (null)}
        </StandardDiv>
        < StandardDiv>
          <TitleComp func={this.changeLocationStatus} bool={locationShow} text={'Location View/Update'} />
          {locationShow ?
            <p>Creation</p>
            : (null)}
        </StandardDiv>
        < StandardDiv>
          <TitleComp func={this.changeServiceStatus} bool={serviceShow} text={'Service View/Update'} />
          {serviceShow ?
            <p>Creation</p>
            : (null)}
        </StandardDiv>
      </Layout >
    )
  }
}