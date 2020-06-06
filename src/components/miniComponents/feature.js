import React from "react"
import "twin.macro"
import Img from "gatsby-image"

export default ({ imgsrc, txtTop, txtBot, toggle }) =>
  toggle ? (
    <div Nom="feature" tw="flex mr-20 ml-5 ">
      <Img
        fluid={imgsrc}
        style={{
          height: "100px",
          width: "165.98px",
        }}
        alt=""
        tw=" mr-4 "
      />
      <div Nom="Feature_info" tw="mt-2 ">
        <p Nom="TextoTop" tw="text-sm font-bold uppercase mb-2">
          {txtTop}
        </p>
        <p Nom="TextBottom" tw="text-base font-normal w-40 leading-6">
          {txtBot}
        </p>
      </div>
    </div>
  ) : (
    <div Nom="feature" tw="flex mr-20 ml-5 self-start">
      <div Nom="Feature_info" tw="mr-20 ml-5">
        <p tw="text-sm font-bold uppercase mb-2"> LEARN MORE</p>
      </div>
    </div>
  )
