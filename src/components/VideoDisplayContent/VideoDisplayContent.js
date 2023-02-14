import { useDashboard } from "@/hooks/useDashboard";
import VideoList from "../VideoList";
import VideoPlayer from "../VideoPlayer";
import { StyledDiv, StyledPaper } from "./styles";

export const VideoDisplayContent = () => {
  const { videoState, selectedCourse, handleUpdateVideoProgress } =
    useDashboard();

  return (
    selectedCourse?.id && (
      <StyledPaper>
        <StyledDiv>
          <VideoPlayer
            video={videoState}
            onProgress={handleUpdateVideoProgress}
          />
          <VideoList />
        </StyledDiv>
      </StyledPaper>
    )
  );
};

export default VideoDisplayContent;
