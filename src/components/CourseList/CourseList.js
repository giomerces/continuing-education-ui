import { useDashboard } from "@/hooks/useDashboard";
import { useMemo } from "react";
import CourseListItem from "./CourseListItem";
import { StyledDiv, StyledTypographyTitle } from "./styles";

export const CourseList = () => {
  const { selectedCourse, coursesData, handleUpdateSelectedCourse } =
    useDashboard();

  const listItems = useMemo(
    () =>
      coursesData?.map((course) => (
        <CourseListItem
          key={course.id}
          course={course}
          selected={course.id === selectedCourse.id}
          handleUpdateSelectedCourse={() => handleUpdateSelectedCourse(course)}
        />
      )),
    [coursesData, handleUpdateSelectedCourse, selectedCourse]
  );

  return (
    <StyledDiv>
      <StyledTypographyTitle>Courses</StyledTypographyTitle>
      {listItems}
    </StyledDiv>
  );
};

export default CourseList;
