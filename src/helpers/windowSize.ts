import { useState, useEffect } from "react"
import { SizeProps } from "../interfaces/window-size-props"

export const useWindowSize = () => {
  const isSSR = typeof window === "undefined"
  const [windowSize, setWindowSize] = useState<SizeProps>({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  })
  const [tabletPortrait, setTabletPortrait] = useState(false)
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      setTabletPortrait(
        window.innerWidth > 576 && window.innerWidth < window.innerHeight
      )
    }

    // Add event listener
    window.addEventListener("resize", handleResize)
    // Call handler right away so state gets updated with initial window size
    handleResize()
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  return { windowSize, tabletPortrait }
}
