let messageArr = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).send(messageArr)
    },
    create: (req, res) => {
        const {text, time} = req.body;
        messageArr.push({id, text, time});
        id++;
        res.status(200).send(messageArr)
    },
    update: (req, res) => {
        const {text} = req.body;
        const updateId = req.params.id;
        const messageId = messageArr.findIndex(message => message.id == updateId)
        let message = messageArr[messageId];

        messageArr[messageId] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };        
        res.status(200).send(messageArr)
    },
    delete: (req, res) => {
        const deleteId = req.params.id;
        const messageId = messageArr.findIndex(message => message.id == deleteId)
        messageArr.splice(messageId, 1)        
        res.status(200).send(messageArr)
    }
}