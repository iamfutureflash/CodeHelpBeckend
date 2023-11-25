const Todo = require('../models/Todo');

exports.getTodo = async (req, res) => {
    try {
        const allTodos = await Todo.find({});
        res.status(200)
        .json({
            success:true,
            data:allTodos,
            message:'Entire Todo Data is Fetched'
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            data: 'Internal server error',
            message: e.message
        })
    }
}