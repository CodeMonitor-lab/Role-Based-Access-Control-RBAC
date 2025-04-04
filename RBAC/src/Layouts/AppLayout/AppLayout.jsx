import React from 'react'
import {Header,Footer} from '../../components/index'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default AppLayout