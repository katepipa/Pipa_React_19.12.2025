import service from "../../services/todos.service";

const todosItemLoader = async ({ params }) => {
  return service.get(params.id);
};

export default todosItemLoader;
