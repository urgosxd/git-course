import React from "react"
import "twin.macro"

export default ({ imgsrc, txtTop, txtBot }) => (
  <div Nom="Icon" tw="flex items-center">
    <img src={imgsrc} alt="" />
    <div Nom="Icon_info" tw="mr-20 ml-5">
      <p Nom="TextoTop" tw="text-2xl font-bold">
        {txtTop}
      </p>
      <p Nom="TextBottom">{txtBot}</p>
    </div>
  </div>
)
