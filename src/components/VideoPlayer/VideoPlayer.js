import ReactPlayer from "react-player/lazy";
import PropTypes from "prop-types";
import { StyledDiv } from "./styles";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

export const VideoPlayer = ({ video: { url, name }, onProgress }) => {
  return (
    <StyledDiv>
      {url ? (
        <ReactPlayer
          url={url}
          controls
          width="100%"
          height="100%"
          onProgress={onProgress}
        />
      ) : (
        <PlayCircleFilledWhiteIcon fontSize="large" color="primary" />
      )}
    </StyledDiv>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string,
};

export default VideoPlayer;
