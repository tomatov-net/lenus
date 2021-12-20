const {Router} = require('express');
const router = Router();
const {Timeline} = require('../../database/models');


router.get('/timelines', async function (req, res, next) {
    const data = await Timeline.findAll();
    res.json(data);
});

router.post('/timelines', async function (req, res, next) {
    const timeline = await Timeline.create({
        title: req.body.title,
        date: req.body.date,
        weight: req.body.weight,
        happiness: req.body.happiness,
        comment: req.body.comment,
    });
    res.json(timeline);
});

router.patch('/timelines/:id', async function (req, res, next) {
    const timeline = await Timeline.findOne({where: {id: req.params.id}});
    if (timeline) {
        await timeline.update({
            weight: req.body.weight,
            happiness : req.body.happiness,
            title: req.body.title,
            date: req.body.date,
        });
    }
    res.json(timeline);
});

router.delete('/timelines/:id', async function (req, res, next) {
    const timeline = await Timeline.destroy({where: {id: req.params.id}});
    res.json(timeline);
});

router.get('/timelines/:id', function (req, res, next) {
});

module.exports = router;