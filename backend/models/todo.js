import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ToDoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
});

const ToDoModel = mongoose.model("todo", ToDoSchema);
export default ToDoModel;