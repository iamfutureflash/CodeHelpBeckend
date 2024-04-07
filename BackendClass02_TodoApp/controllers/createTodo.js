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
        console.error(err);
        console.log('====================================');
        console.log('====================================');
        console.log(err);
        console.log('====================================');
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: err.message,
        })
    }
}