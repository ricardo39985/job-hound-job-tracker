const Job = require('../../models/job');


module.exports = {
    create,

}
async function create(req, res) {
  try {
    const job = await Job.create(req.body);
    console.log(job)
    // res.json(job);
  } catch (err) {
    res.status(400).json(err);
  }
}
