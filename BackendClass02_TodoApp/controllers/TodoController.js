// import todo schema
const todo = require("../models/todo");

// define route handler

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await todo.create({ title, description });
        res.status(200).json({
            success: true,
            data: response,
            message: 'Entry Created Successfully'
        }
        );
    }
    catch (error) {
        console.log('====================================');
        console.error(error);
        console.log('====================================');
        console.log('====================================');
        console.log(error);
        console.log('====================================');
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: error.message,
        })
    }
}

exports.getAllTodo = async (req, res) => {
    try {
        const response = await todo.find();
        res.status(200).json({
            success: true,
            data: response,
            message: 'entire todo data fetched successfully',
        })
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            data: 'internal server error',
            message: e.message,
        })
    }
}
exports.getTodoByID = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await todo.findById({ _id: id });
        if (!response) {
            res.status(404).json({
                success: false,
                message: 'no data found with given id'
            })
        }

        res.status(200).json({
            success: true,
            data: response,
            message: `getting todo successfully for id ${id}`,
        })
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            data: 'internal server error',
            message: e.message,
        })
    }
}
exports.deleteTodoByID = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await todo.findByIdAndDelete(id);
        if (!response) {
            res.status(404).json({
                success: false,
                message: 'no data found with given id'
            })
        }
        res.status(200).json({
            success: true,
            data: response,
            message: `delete todo successfully for id ${id}`,
        })
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            data: 'internal server error',
            message: e.message,
        })
    }
}
exports.updateTodoByID = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        const response = await todo.findByIdAndUpdate({ _id: id }, { title: title, description: description });
        if (!response) {
            res.status(404).json({
                success: false,
                message: 'no data found with given id'
            })
        }

        res.status(200).json({
            success: true,
            data: response,
            message: `update todo successfully for id ${id}`,
        })
    }
    catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            data: 'internal server error',
            message: e.message,
        })
    }
}