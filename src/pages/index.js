import React from "react";
import Layout from '../components/layout';

import Head from '../components/head';
import Earth from '../components/earth';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <Earth/>
      <h2>My name is Eli, I'm a Javascript developer from San Diego now located in the Seattle area.</h2>
      <p>At the moment I'm doing freelance work while I get familiar with the area and shop around for fulltime positions.</p>
    </Layout>
  )
}

export default IndexPage