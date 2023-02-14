import { CardHeader, CardMedia, IconButton } from "@mui/material";
import { StyledAvatar, StyledCard, StyledDiv } from "./styles";
import PlayCircle from "@mui/icons-material/PlayCircle";

export const CourseListItem = ({
  course: { url, name },
  selected,
  handleUpdateSelectedCourse,
}) => {
  return (
    <StyledDiv>
      <StyledCard $selected={selected}>
        <CardHeader
          avatar={<StyledAvatar aria-label="recipe">{name[0]}</StyledAvatar>}
          title={name}
          action={
            <IconButton onClick={handleUpdateSelectedCourse}>
              <PlayCircle color="primary" />
            </IconButton>
          }
        />
        <CardMedia component="img" image={url} />
      </StyledCard>
    </StyledDiv>
  );
};

export default CourseListItem;
