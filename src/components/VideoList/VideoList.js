import { useDashboard } from "@/hooks/useDashboard";
import React from "react";
import { StyledDiv, StyledInnerDivDiv, StyledTypographyTitle } from "./styles";

import VideoListItem from "./VideoListItem";

export const VideoList = () => {
  const { videosData, videoState, setVideoState, selectedCourse } =
    useDashboard();

  const listItems = videosData?.map((video, idx) => {
    const onVideoSelected = () => setVideoState(video);
    return (
      <VideoListItem
        key={idx}
        onVideoSelected={onVideoSelected}
        selected={video.id == videoState.id}
        video={video}
      />
    );
  });

  return (
    <StyledDiv>
      <StyledTypographyTitle>
        {selectedCourse.name} Course
      </StyledTypographyTitle>
      <StyledInnerDivDiv>{listItems}</StyledInnerDivDiv>
    </StyledDiv>
  );
};

export default VideoList;
