import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res, next) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const createPost = async (req, res, next) => {
    const post = req.body;
    console.log(post);
    const newPost = await new PostMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
        res.send({ successMsg: 'created successfully' });
    } catch (err) {
        res.status(409).json({ errMgs: err.message });
    }
};
