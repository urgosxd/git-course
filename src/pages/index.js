import React from "react"
import { Link } from "gatsby"
import tw, { styled } from "twin.macro"
import { Header, Info, Feature } from "../components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Consulta2 {
      Img: file(relativePath: { eq: "bhutan.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100, maxHeight: 1500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Imagin = [
    data.Img.childImageSharp.fluid,
    `linear-gradient(rgba(48, 70, 89, 0.6),rgba(48, 70, 89, 0.6))`,
  ].reverse()
  return (
    <StyBackgroundImage fluid={Imagin}>
      <Main>
        <Header />
        <Info />
        <Feature />
      </Main>
    </StyBackgroundImage>
  )
}

export default IndexPage

const StyBackgroundImage = styled(BackgroundImage)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Main = styled.main`
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(60px, 1fr) repeat(6, minmax(50px, 190px)) minmax(
      60px,
      1fr
    );
`
