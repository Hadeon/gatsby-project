import React from 'react';
import Layout from '../components/layout';

import Head from '../components/head';


const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact"/>
      <h1>Contact Page</h1>
      <p>Follow me on Twitter <a href="https://twitter.com/eandersen909?lang=en" target="_blank">@eandersen909</a></p>
    </Layout>
  )
}

export default ContactPage;