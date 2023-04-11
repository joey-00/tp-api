const db = require('../../database/models');
const sequelize = db.sequelize;

module.exports = {
    list: async (req, res) => {
        try {
            const genres = await db.Genre .findAll()

            return res.status(200).json({
                ok : true,
                meta : {
                    status :200,
                    total : genres.length,
                },
                data : genres,
            })

            }catch (error) {
                console.log(error);
                return res.status(500).json({
                    msg : error.message
                })
        }
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id).then(genre => {
                res.render('genresDetail.ejs', {genre});
            });
    }

}

 = genresController;