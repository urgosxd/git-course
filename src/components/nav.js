import React from "react"
import { HeaderWrapper } from "../elements"
import "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

export const Header = () => {
  const data = useStaticQuery(graphql`
    query Consulta {
      logo: file(relativePath: { eq: "Logo.svg" }) {
        id
        publicURL
      }
    }
  `)
  return (
    <HeaderWrapper>
      <nav tw="flex items-center h-32">
        <img src={data.logo.publicURL} />
        <div Nom="Links" tw="ml-auto">
          <a
            href="#"
            tw="text-lg font-normal transition-all duration-300 ease-linear mr-12 hover:text-orange-500"
          >
            About
          </a>
          <a
            href="#"
            tw="text-lg font-normal transition-all duration-300 ease-linear mr-12 hover:text-orange-500"
          >
            Docs
          </a>
          <button
            href="#"
            tw="text-lg font-normal transition-all duration-300 ease-linear mr-12 bg-cyan py-2 px-6 hover:bg-orange-400"
          >
            Login
          </button>
        </div>
      </nav>
    </HeaderWrapper>
  )
}
