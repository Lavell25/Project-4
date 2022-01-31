import React from 'react'
import Layout from '../../components/Layout/Layout'
import Creators from '../../components/Creators/Creators'
import './CreatorsPage.css'

export default function CreatorPage (props) {
  return (
    <div>
      <Layout user={props.user}>
        <div className='all-Creators'>
          <Creators />
        </div>
      </Layout>
    </div>
  )
}