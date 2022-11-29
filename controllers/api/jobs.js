const Job = require('../../models/job');

module.exports = {
  create,
  index,
};
async function create(req, res) {
  try {
    const job = await Job.create({...req.body,user:req.user});
    console.log(job);
    res.json(job);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}
async function index(req, res) {
  try {
    const jobs = await Job.find( {user:req.user})
    console.log(jobs);
    res.json(jobs);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
}
