import axios from "axios";

const URL = "https://todo-list-scyv.onrender.com/api/todos";

export const getAll = async () => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFinish = async () => {
  try {
    const res = await axios.get(`${URL}/finish`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUnfinish = async () => {
  try {
    const res = await axios.get(`${URL}/unfinish`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (id) => {
    try {
        const res = await axios.get(`${URL}/${id}`)
        return res.data;
    } catch (error) {
      console.log(error);
        
    }
}

export const updateTodo = async (id,todoObj) => {
  try {

    await axios.patch(`${URL}/${id}`,todoObj)
    console.log('Update success');
    
  } catch (error) {
    console.log(error);
  }
}

export const deleteTodo = async (id) =>{
  try {
    await axios.delete(`${URL}/${id}`)
    console.log("Delete success");
  } catch (error) {
    console.log(error);
    
  }
}

export const createTodo = async (todoObj) => {
  try {
    const res = await axios.post(URL,todoObj)
    console.log(res);
    
  } catch (error) {
    console.log(error);   
  }
}