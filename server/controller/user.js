const userDetails = require("../model/user");

module.exports = {
  add: async (req, res) => {
    try {
      //validate request
      let details = req.body;

      if (!details) {
        res.status(400).json({
          error: true,
          message: "content cannot be empty",
        });
      }
      // add user
      const user = await new userDetails(details);
      user
        .save()
        .then((response) => {
          res.status(200).json({
            error: false,
            message: "success",
            response,
          });
        })
        .catch((error) => {
          res.status(422).json({
            error: true,
            message: error + "",
          });
        });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error + "",
      });
    }
  },
  // get user details
  fetch: async (req, res) => {
    try {
      await userDetails
        .find()
        .then((user) => {
          res.status(200).json({
            error: false,
            message: "fetching data success",
            user,
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: true,
            message: "cannot fetch data",
          });
        });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error + "",
      });
    }
  },
  //  update user details
  modify: async(req, res) => {
    try {
      data = req.body;

      if (!data) {
        return res.status(400).json({
          error: true,
          message: "data to update connot be empty",
        });
      }
      const id = req.params.id;

      await userDetails
        .findByIdAndUpdate(req.params.id, req.body, {
          userFindAndModify: false,
        })
        .then((data) => {
          if (!data) {
            res.status(404).json({
              error: true,
              message: `connot update user with ${id} `,
            });
          } else {
            res.status(200).json({
              error: false,
              data,
            });
          }
        })
        .catch((error) => {
          res.status(500).json({
            error: true,
            message: "error in update the user information",
          });
        });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error + "",
      });
    }
  },
  // delete the user
  delete:async (req, res) => {
    try {
      const id = req.params.id;
      
       await  userDetails.findByIdAndDelete(req.params.id)
        .then(data => {
          
          if (!data) {
            res.status(404).json({
              error: true,
              message: `cannot delete using this id ${id}`,
            });
          } else {
            res.status(200).json({
              error: false,
              message: "user deleted successfully",
            });
          }
        })
        .catch((err) => {
          res.status(500).json({
            error: true,
            message: "cannot delete the user",
          });
        });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: error + "",
      });
    }
  },
};
