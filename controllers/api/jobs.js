const Job = require('../../models/job');

module.exports = {
  create,
  index,
  delete: deleteJob,
  updateStatus,
};

async function create(req, res) {
  try {
    console.log(req.body);
    const job = await Job.create({ ...req.body, user: req.user });

    res.json(job);
  } catch (error) {
    res.status(400).json(error);
  }
}
async function index(req, res) {
  try {
    const jobs = await Job.find({ user: req.user });
    res.json(jobs);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
async function deleteJob(req, res) {
  try {
    console.log(req.body.id);
    const job = await Job.findByIdAndDelete(req.body.id);
    res.json({ id: req.body.id });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}
async function updateStatus(req, res) {
  try {
    const job = await Job.findById(req.params.id);
    job.status=req.body.status
    await job.save()
    console.log({company:job.company,status:job.status} )
    res.json(job);
  } catch (error) {
    res.status(400).json(error);
  }
}
