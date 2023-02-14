import { addDashboardContext, useDashboard } from "@/hooks/useDashboard";
import VideoDisplayContent from "src/components/VideoDisplayContent";
import CourseList from "../CourseList";
import { StyledDiv } from "./styles";

export const Dashboard = () => {
  const { coursesData } = useDashboard();

  return (
    <StyledDiv>
      {!!coursesData?.length && <CourseList />}
      {!!coursesData?.length && <VideoDisplayContent />}
    </StyledDiv>
  );
};

export default addDashboardContext(Dashboard);
