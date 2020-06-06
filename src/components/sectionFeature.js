import React from "react"
import { SectionFeatureWrapper } from "../elements"
import "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Featuremin from "./miniComponents/feature"

export const Feature = () => {
  const data = useStaticQuery(graphql`
    query ConsultaFeature {
      Img1: file(relativePath: { eq: "traveler.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Img2: file(relativePath: { eq: "girlTraveler.jpg" }) {
        id
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const Imagen1 = data.Img1.childImageSharp.fluid
  const Imagen2 = data.Img2.childImageSharp.fluid
  return (
    <SectionFeatureWrapper tw="self-end pt-10 pl-16 flex flex-wrap items-center">
      <Featuremin
        toggle
        imgsrc={Imagen1}
        txtTop="HUNDRED OF GUIDES"
        txtBot="New high-quality guides added each week"
      />
      <Featuremin
        toggle
        imgsrc={Imagen2}
        txtTop="VETTED LOCAL EXPERT"
        txtBot="The largest network of traveling of world"
      />
      <Featuremin />
    </SectionFeatureWrapper>
  )
}
