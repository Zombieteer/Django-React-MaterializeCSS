import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import LP from './components/landingPage/LP'
import DetailView from './components/detatailPage/DetailView'

const BaseRouter = () => (
    <Fragment>
        <Route exact path='/' component={LP} />
        <Route exact path='/:partnerID' component={DetailView} />
    </Fragment>
)

export default BaseRouter