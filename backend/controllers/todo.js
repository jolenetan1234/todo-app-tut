import Todo from "../models/todo.js";

// contain API methods (i think)
export const todoAll = async (req, res, next) => {
    try {
        // get data
        const allTodos = await Todo.find().exec();
        res.json(allTodos); // sends a JSON response
    } catch (err) {
        res.status(404).json({ message: "Todo not found", error: err.message });
    };
};

export const todoCreate = async (req, res, next) => {
    // req body should contain the data needed to create a new document.
    try {
        const result = await Todo.create(req.body);
        res.json({ message: "Todo added successfully", result});
    } catch (err) {
        res.status(404).json({ message: "Failed to create todo", error: err.message });
    };
};

export const todoDetails = async (req, res, next) => {
    try {
        const result = await Todo.findById(req.params.id).exec();
        res.send(result);
        // res.json(result);
    } catch (err) {
        res.status(404).json({ message: "Todo not found", error: err.message });
        console.log(err);
    };
};

export const todoUpdate = async (req, res, next) => {
    try {
        // res.send(req.params);
        const result = await Todo.findByIdAndUpdate(req.params.id, req.body).exec();
        res.json(result);
    } catch (err) {
        res.status(404).json({ message: "Failed to update todo", error: err.message });
        console.log(err);
    };
};

export const todoDelete = async (req, res, next) => {
    try {
        // res.send("NOT IMPLEMENTED: todoDelete");
        const result = await Todo.findByIdAndDelete(req.params.id).exec();
        res.json({ "successfully deleted": result });
    } catch (err) {
        res.status(404).json({ message: "Failed to delete todo", error: err.message });
        console.log(err);
    };
};