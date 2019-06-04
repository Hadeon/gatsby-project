import React from "react";
import Layout from '../components/layout';

import Head from '../components/head';
import Earth from '../components/earth';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <Earth/>
      <h2 style={{ textAlign: 'center' }}>My name is Eli, I'm a JS developer from San Diego now located in the Seattle area.</h2>
      <p style={{ textAlign: 'center' }}>At the moment I'm doing freelance work while I get familiar with the area and shop around for fulltime positions. In the meantime, I've created this simple little Gatsby site to track my experience with projects and document progress!</p>
    </Layout>
  )
}

export default IndexPage