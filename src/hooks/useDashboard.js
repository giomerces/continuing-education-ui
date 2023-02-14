import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import useCourseListData from "./useCourseListData";
import useVideoListData from "./useVideoListData";

const DashboardContext = createContext();

const DashboardContextProvider = ({ children }) => {
  const [selectedCourse, setSelectedCourse] = useState({});
  const [videoState, setVideoState] = useState({});

  const { coursesData } = useCourseListData();
  const { videosData, videosDataIsLoading } = useVideoListData({
    selectedCourse,
  });

  const handleUpdateSelectedCourse = useCallback((course) => {
    setSelectedCourse(course);
    setVideoState({});
  }, []);

  const handleUpdateVideoProgress = useCallback((progress) => {
    setVideoState((oldValues) => ({ ...oldValues, ...progress }));
  }, []);

  const value = useMemo(
    () => ({
      handleUpdateSelectedCourse,
      coursesData,
      videosData,
      videosDataIsLoading,
      selectedCourse,
      setSelectedCourse,
      videoState,
      setVideoState,
      handleUpdateVideoProgress,
    }),
    [
      coursesData,
      handleUpdateSelectedCourse,
      handleUpdateVideoProgress,
      selectedCourse,
      videoState,
      videosData,
      videosDataIsLoading,
    ]
  );

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export const addDashboardContext = (Component) => {
  const returnComponent = (props) => {
    return (
      <DashboardContextProvider>
        <Component {...props} />
      </DashboardContextProvider>
    );
  };

  return returnComponent;
};

export const useDashboard = () => {
  return useContext(DashboardContext);
};
