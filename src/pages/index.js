import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi Developers!</h1>
    <h2>Thanks for making MDX! It's Awesome! Can you fix this? 😁</h2>
    <ol>
    <li>Navigate to the <Link to="/blog/test//">Test Page</Link>.</li>
    <li>Open the file under /aticles/test.mdx, uncomment the import statement at the top and the implementation below.</li>
    <li>You will get udefined.</li>
    <li>Restart the development server.</li>
    <li>Everything works. Cheers.</li>
    </ol>
  </Layout>
)

export default IndexPage
