import PropTypes from "prop-types";
import { useQuery } from "react-query";
import api from "src/services/api";
const QUERY_KEY = ["courses"];

const getCourseDataFn = async ({ areaId }) => {
  const response = await api.get(`/course`, { areaId });
  return response.data;
};

export const useCourseListData = (params = {}) => {
  const { data: coursesData, isLoading: coursesDataIsLoading } = useQuery({
    queryKey: [...QUERY_KEY, params],
    queryFn: () => getCourseDataFn(params),
  });

  return { coursesData, coursesDataIsLoading };
};

useCourseListData.propTypes = {
  areaId: PropTypes.number,
};

export default useCourseListData;
