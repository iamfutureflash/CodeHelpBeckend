const Todo = require('../models/Todo');

exports.getTodoByID = async (req, res) => {
    try {
        const _id = req.params.id;
        const TodoByID = await Todo.findById({_id:_id});
        if(!TodoByID){
            res.status(404).json({
                success:false,
                message:`No Data Found with Given ID : ${_id}`
            })
        }
        res.status(200)
        .json({
            success:true,
            data:TodoByID,
            message:`Todo id: ${_id} data successfully fetched`
        })
    } catch (e) {
        res.status(500).json({
            success: false,
            data: 'Internal server error',
            message: e.message
        })
    }
}