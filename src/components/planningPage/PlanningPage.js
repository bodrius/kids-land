import React from "react";
import { useSelector } from "react-redux";
import { CardList } from "../../common/cardList/CardList";
import data from "../../common/cardList/data.json";
import { PlanningPoints } from "../PlanningPoints/PlanningPoints";
import { AddCustomTask } from "../AddCustomTask/AddCustomTask";
import { Footer } from "../Footer/Footer";
import { NewTaskModal } from "../newTaskModal/NewTaskModal";
import CurrentWeekPlaning from "../currentDay/CurrentWeekPlaning";
import { services } from "../../services/services";
import styles from "./styles.module.css";

const PlanningPage = () => {
  const [tasks, setTasks] = React.useState(data.user.tasks);
  const [allUserPoints, setAllUserPoints] = React.useState(0);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [customTask, setCustomTask] = React.useState({});
  const userToken = useSelector((state) => state.user.userToken);
  console.log("userToken", userToken);
  console.log("tasks", tasks);
  const total = tasks.reduce((prev, current) => {
    const days = current.days.filter((day) => day.isActive === true).length;
    return prev + current.taskPoints * days;
  }, 0);
  // console.log("total", total);
  const plusPoint = (p) => {
    // console.log("p", p);
    setAllUserPoints(allUserPoints + p);
  };
  // console.log('allUserPoints', allUserPoints)

  function handleOpenTaskModal() {
    setModalIsOpen(true);
  }

  function handleCloseTaskModal() {
    setModalIsOpen(false);
  }

  function handleCollectCustomTask(task) {
    setCustomTask(task);
  }

  async function answerFromServer(userToken, customTask) {
    const answer = await services
      .createUserTask(userToken, customTask)

      // .then(({data: {tasks}, status}) => {
      //   status === 200 && console.log('tasks', tasks.map((task) => {
      //     return `${task.title}, ${task.imgName}`
      //   }))
      // });

      // .then((data) => data.status.ok && action для записи в стор)

      .then(({ data: { tasks }, status }) => {
        status === 200 &&
          console.log(
            "tasks",
            tasks.map((task) => {
              return `${task.title}, ${task.imgName}`;
            })
          );
      });

    await services
      .getCurrentUser(userToken)
      .then((data) => setTasks(data.data.user.tasks));
    console.log("answer", answer);
  }

  // иф статус ОК - добавить в стор
  // обновить значение в сторе

  React.useEffect(() => {
    answerFromServer(userToken, customTask);
    console.log("customTask", customTask);
  }, [customTask]);

  return (
    <>
      {modalIsOpen && (
        <NewTaskModal
          onClose={handleCloseTaskModal}
          onHandleCollectCustomTask={handleCollectCustomTask}
        />
      )}
      <div className={styles.topComponentsContainer}>
        <CurrentWeekPlaning />
        <PlanningPoints />
        <AddCustomTask handleOpenTaskModal={handleOpenTaskModal} />
      </div>
      <CardList plusPoint={plusPoint} data={tasks} />
      <Footer />
    </>
  );
};

export default PlanningPage;
