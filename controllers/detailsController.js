exports.getMe=(req,res, next)=>{

    res.status(200).json({
        slackUsername: 'temitayodev',
        backend: true,
        age: 20,
        bio: 'My name is Akinsanya Temitayo, I am currently a student of University of Lagos, studying Electrical/Electronics Engineering. I am a Nodejs Backend developer'


    })

}