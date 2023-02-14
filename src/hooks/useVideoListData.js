import PropTypes from "prop-types";
import { useQuery } from "react-query";
import api from "src/services/api";
const QUERY_KEY = ["videos"];

const getVideoDataFn = async ({ selectedCourse }) => {
  const response = await api.get(`/video`, { courseId: selectedCourse });
  return response.data;
};

export const useVideoListData = (params = {}) => {
  const { data: videosData, isLoading: videosDataIsLoading } = useQuery({
    queryKey: [...QUERY_KEY, params],
    queryFn: () => getVideoDataFn(params),
  });
  return { videosData, videosDataIsLoading };
};

useVideoListData.propTypes = {
  courseId: PropTypes.number,
};

export default useVideoListData;
