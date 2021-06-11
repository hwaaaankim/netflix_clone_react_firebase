import React from "react";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";
import { BrowseContainer } from "../containers/browse";

export default function Browse() {
  // we need the series and the films to
  const { series } = useContent("series");
  const { films } = useContent("films");
  // console.log(series);
  // console.log(films);
  // we need slides

  const slides = selectionFilter({ series, films });
  // console.log(slides);
  // pass it to the browse container

  return <BrowseContainer slides={slides} />;
}
