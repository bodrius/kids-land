import React from "react";
import { useSelector } from "react-redux";
import { CardList } from "../../common/cardList/CardList";
import data from "../../common/cardList/data.json";
import { PlanningPoints } from "../PlanningPoints/PlanningPoints";
import { AddCustomTask } from "../AddCustomTask/AddCustomTask";
import { Footer } from "../Footer/Footer";
import { NewTaskModal } from "../newTaskModal/NewTaskModal";
import { services } from "../../services/services";

const PlanningPage = () => {
  const [tasks, setTasks] = React.useState(data.user.tasks);
  const [allUserPoints, setAllUserPoints] = React.useState(0);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [customTask, setCustomTask] = React.useState({});
  const token = useSelector((state) => state.user.userToken);
  const total = tasks.reduce((prev, current) => {
    const days = current.days.filter((day) => day.isActive === true).length;
    return prev + current.taskPoints * days;
  }, 0);
  console.log("total", total);
  const plusPoint = (p) => {
    console.log("p", p);
    setAllUserPoints(allUserPoints + p);
  };
  console.log("allUserPoints", allUserPoints);

  function handleOpenTaskModal() {
    setModalIsOpen(true);
  }

  function handleCloseTaskModal() {
    setModalIsOpen(false);
  }

  function handleCollectCustomTask(task) {
    setCustomTask(task);
  }

  async function answerFromServer(token, customTask) {
    const answer = await services
      .createUserTask(token, customTask)
      .then(({data: {tasks}, status}) => {
        status === 200 && console.log('tasks', tasks.map((task) => {
          return `${task.title}, ${task.imgName}`
        }))
      });

    console.log("answer", answer);
  }

  React.useEffect(() => {
    // console.log('customTask', customTask)
    answerFromServer(token, customTask);
  }, [customTask]);

  return (
    <>
      {modalIsOpen && (
        <NewTaskModal
          onClose={handleCloseTaskModal}
          onHandleCollectCustomTask={handleCollectCustomTask}
        />
      )}
      <PlanningPoints />
      <AddCustomTask handleOpenTaskModal={handleOpenTaskModal} />
      <CardList plusPoint={plusPoint} data={tasks} />
      <Footer />
    </>
  );
};

export default PlanningPage;
