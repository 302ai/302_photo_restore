import React, { useState, useEffect } from 'react'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider'

interface Props {
  initPosition: number
  beforeSrc: string
  afterSrc: string
}

const ImageCompare: React.FC<Props> = ({
  beforeSrc,
  afterSrc,
  initPosition,
}) => {
  const [transition, setTransition] = useState('.5s ease-in-out')

  useEffect(() => {
    setTimeout(() => {
      setTransition('')
    }, 600)
  }, [])

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <ReactCompareSlider
        className="compare w-full rounded-2xl "
        position={initPosition}
        transition={transition}
        itemOne={
          <div className="w-full">
            <ReactCompareSliderImage
              srcSet={beforeSrc}
              src=""
              alt="Result image"
            />
          </div>
        }
        itemTwo={
          <div className="w-rull mosaic-bg">
            <ReactCompareSliderImage
              src=""
              srcSet={afterSrc}
              alt="Origin image"
            />
          </div>
        }
      />
    </div>
  )
}

export default ImageCompare
