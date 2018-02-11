module.exports = app => {
  const blankRoute = (req,res) => res.json({ test: `You have reached a route that has not been defined. Perhaps you typed something in wrong.` });

  // TODO: Create route that goes to the users App

  app.use('/user', require('../api/user'));
  app.use('/project', require('../api/projects'));

  app.get('*', blankRoute);
}