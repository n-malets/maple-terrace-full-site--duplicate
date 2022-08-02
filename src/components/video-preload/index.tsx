import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react"
import { VideoStyled, VideoWrapper } from "./index.styled"
import srcVideo from "../../assets/videos/MT_Animateddoors_base.mp4"
import srcVideoOpt from "../../assets/videos/MT_Animateddoors_base_opt.mp4"
import useWindowSize from "../../helpers/windowSize"
interface IProps {
  setIsFirstLoad: Dispatch<SetStateAction<boolean>>
}
const VideoPreload: FC<IProps> = ({ setIsFirstLoad }) => {
  const videoWrapperRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { width } = useWindowSize()
  const playVideo = () => {
    setTimeout(() => {
      if (videoRef && videoRef.current) {
        videoRef.current.play()
      }
      setTimeout(() => {
        hideVideo()
        setIsFirstLoad(false)
      }, 3000)
    }, 1000)
  }

  const hideVideo = () => {
    if (videoWrapperRef && videoWrapperRef.current) {
      videoWrapperRef.current.style.opacity = "0"
    }
  }
  useEffect(() => {
    playVideo()
  }, [])
  return (
    <VideoWrapper ref={videoWrapperRef}>
      <VideoStyled
        playsInline={true}
        webkit-playsinline={true}
        x5-playsinline={true}
        muted={true}
        style={{ opacity: 1 }}
        ref={videoRef}
        autoPlay={true}
        onEnded={hideVideo}
        onError={hideVideo}
        src={width <= 1024 ? srcVideoOpt : srcVideo}
      />
    </VideoWrapper>
  )
}

export default VideoPreload
