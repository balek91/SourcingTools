import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/buttonCustom'
import Layout from './layout'
import TitleComp from '../components/titleComponent'
import LocationForm from '../components/locationForm'
import ReferentialForm from '../components/referentialForm'
import EstimationForm from '../components/estimationForm'
import ManageLocation from '../components/manageLocation'
import ManageEstimation from '../components/manageEstimation'
import ManageReferential from '../components/manageReferential'
import { locationOptions, estimate, referentialOptions } from '../database'

const StandardDiv = styled.div`
display: flex;
flex-direction : column;
margin-top : 10px;
`

const CenterDiv = styled(StandardDiv)`
align-items : center;
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

  state = {
    creationShow: true,
    estimationShow: false,
    locationShow: false,
    referentialShow: false,
    createLocationShow: false,
    createEstimationShow: false,
    createReferentialShow: false,
    dataLocation: [],
    dataEstimation: [],
    dataReferential: []
  }

  componentDidMount() {
    this.setState({
      dataLocation: locationOptions,
      dataEstimation: estimate,
      dataReferential: referentialOptions
    })
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
  changeReferentialStatus = () => {
    this.setState({
      referentialShow: !this.state.referentialShow
    })
  }

  createNewLocation = () => {
    this.setState({
      createLocationShow: true,
      createEstimationShow: false,
      createReferentialShow: false
    })
  }
  createNewEstimation = () => {
    this.setState({
      createLocationShow: false,
      createEstimationShow: true,
      createReferentialShow: false
    })
  }
  createNewReferential = () => {
    this.setState({
      createLocationShow: false,
      createEstimationShow: false,
      createReferentialShow: true
    })
  }

  onRemove = (rowId, type) => {
    if (type === 'location') {
      const newData = this.state.dataLocation.filter(x => x.id !== rowId)
      this.setState({ dataLocation: newData })
      console.log('remove location ', rowId)
    }
    else if (type === 'estimation') {
      const newData = this.state.dataEstimation.filter(x => x.id !== rowId)
      this.setState({ dataEstimation: newData })
      console.log('remove estimation ', rowId)
    }
    else if (type === 'referential') {
      const newData = this.state.dataReferential.filter(x => x.id !== rowId)
      this.setState({ dataReferential: newData })
      console.log('remove referential ', rowId)
    } else {
      console.log('type unknown')
    }
  }

  render() {
    const { creationShow, estimationShow, locationShow, referentialShow, createLocationShow, createEstimationShow, createReferentialShow, dataLocation, dataEstimation, dataReferential } = this.state
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
                  <Button func={this.createNewReferential} text={'Create Referential'}></Button>
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
              {createReferentialShow ?
                <ReferentialForm />
                : null}
            </StandardDiv>
            : (null)
          }
        </StandardDiv>
        < StandardDiv>
          <TitleComp func={this.changeEstimationStatus} bool={estimationShow} text={'Estimation View/Update'} />
          {estimationShow ?
            < CenterDiv>
              <ManageEstimation func={this.onRemove} data={dataEstimation}></ManageEstimation>
            </CenterDiv>
            : (null)}
        </StandardDiv>
        < StandardDiv>
          <TitleComp func={this.changeLocationStatus} bool={locationShow} text={'Location View/Update'} />
          {locationShow ?
            < CenterDiv>
              <ManageLocation func={this.onRemove} data={dataLocation}></ManageLocation>
            </CenterDiv>
            : (null)}
        </StandardDiv>
        < StandardDiv>
          <TitleComp func={this.changeReferentialStatus} bool={referentialShow} text={'Referential View/Update'} />
          {referentialShow ?
            < CenterDiv>
              <ManageReferential func={this.onRemove} data={dataReferential}></ManageReferential>
            </CenterDiv>
            : (null)}
        </StandardDiv>
      </Layout >
    )
  }
}