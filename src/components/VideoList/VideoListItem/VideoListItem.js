import ReactPlayer from "react-player/lazy";
import {
  StyledItemDiv,
  StyledTypography,
  StyledInnerDiv,
  StyledProgressDiv,
} from "./styles";
import LinearProgress from "@mui/material/LinearProgress";

export const VideoListItem = ({ video, selected, onVideoSelected }) => {
  return (
    <StyledItemDiv $selected={selected}>
      <StyledInnerDiv key={video.url}>
        <ReactPlayer url={video.url} light width="60px" height="60px" />
        <StyledTypography onClick={onVideoSelected}>
          {video.name}
        </StyledTypography>
      </StyledInnerDiv>
      <StyledProgressDiv>
        <LinearProgress variant={"determinate"} value={40} />
      </StyledProgressDiv>
    </StyledItemDiv>
  );
};

export default VideoListItem;
