import React from "react";
import { useSelector } from "react-redux";
import { CardList } from "../../common/cardList/CardList";
import { PlanningPoints } from "../PlanningPoints/PlanningPoints";
import { AddCustomTask } from "../AddCustomTask/AddCustomTask";
import { Footer } from "../Footer/Footer";
import { NewTaskModal } from "../newTaskModal/NewTaskModal";
import CurrentWeekPlaning from "../currentDay/CurrentWeekPlaning";
import { services } from "../../services/services";
import styles from "./styles.module.css";
const PlanningPage = () => {
  const [tasks, setTasks] = React.useState([]);
  const [allUserPoints, setAllUserPoints] = React.useState(0);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const userToken = useSelector((state) => state.user.userToken);

  function getTotal() {
    return tasks.reduce((prev, current) => {
      const days = current.days.filter((day) => day.isActive === true).length;
      return prev + current.taskPoints * days;
    }, 0);
  }

  let total = getTotal();

  const plusPoint = (p) => {
    setAllUserPoints(allUserPoints + p);
  };
  function handleOpenTaskModal() {
    setModalIsOpen(true);
  }
  function handleCloseTaskModal() {
    setModalIsOpen(false);
  }
  function handleCollectCustomTask(task) {
    services.createUserTask(userToken, task).then(({ data: { tasks } }) => {
      setTasks(tasks);
    });
  }

  const getTasks = () => {
    services.getCurrentUser(userToken).then(({ data: { user } }) => {
      setTasks(user.tasks);
      if (user.tasks.length !== tasks.length) {
        setTasks(user.tasks);
      }
    });
  };

  React.useEffect(() => {
    getTasks();
  });

  React.useEffect(() => {
    getTotal();
  }, [tasks]);

  return (
    <div className={styles.containerStyles}>
      {modalIsOpen && (
        <NewTaskModal
          onClose={handleCloseTaskModal}
          onHandleCollectCustomTask={handleCollectCustomTask}
        />
      )}
      <div className={styles.topComponentsContainer}>
        <CurrentWeekPlaning />
        <PlanningPoints score={total} />
        <AddCustomTask handleOpenTaskModal={handleOpenTaskModal} />
      </div>
      <CardList plusPoint={plusPoint} data={tasks} getTasks={getTasks} />
      <Footer />
    </div>
  );
};
export default PlanningPage;
