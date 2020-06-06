import React from "react"
import { SectionInfoWrapper } from "../elements"
import "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Icono from "./miniComponents/Icono"

export const Info = () => {
  const data = useStaticQuery(graphql`
    query ConsultaInfo {
      Icono: file(relativePath: { eq: "city.svg" }) {
        id
        publicURL
      }
    }
  `)
  const Img = data.Icono.publicURL
  return (
    <SectionInfoWrapper>
      <h1 tw="text-wite font-bold text-7xl leading-tight">
        Real-time itineraties powered by Location AI
      </h1>
      <div Nom="Icons" tw="flex mt-12 ">
        <Icono imgsrc={Img} txtTop="Popular" txtBot="Cities" />
        <Icono imgsrc={Img} txtTop="Local" txtBot="Insights" />
        <Icono imgsrc={Img} txtTop="Amazing" txtBot="Guides" />
      </div>
    </SectionInfoWrapper>
  )
}
