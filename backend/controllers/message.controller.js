import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body
        const { id: receiverId } = req.params
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        //cosket.io functionalty will go here 

        await Promise.all([conversation.save(),newMessage.save()])

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
    }
}


export const getMessage=async(req,res)=>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.find({
            participants:{$all:[senderId,userToChatId]}
        }).populate("message")

        if(!conversation) return res.status(200).json([])

        const message=conversation.messages;

        res.status(200).json(message);
    } catch (error) {
        console.log("Error in getMEssage controller: ", error.message);
        return res.status(500).json({
            error:"Interval server error"
        })
    }
}