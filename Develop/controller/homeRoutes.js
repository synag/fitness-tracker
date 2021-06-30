const router = require("express").Router();
var path = require("path");


//exercise home routes
router.get("/exercise", function(req, res) {
    try{
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
 } catch (err) {
          res.status(500).json(err);
        }
      });



      router.get("/exercise/:id", function(req, res) {
        try{
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
     } catch (err) {
              res.status(500).json(err);
            }
          });

          router.get("/stats", function(req, res) {
            try{
                res.sendFile(path.join(__dirname, "../public/stats.html"));
         } catch (err) {
                  res.status(500).json(err);
                }
              });


//   router.get("/exercise/:id", function(req, res) {

//     res.sendFile(path.join(__dirname, "../public/exercise.html"));
//   });
//   router.get("/stats", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/stats.html"));
//   });





// router.get("/exercise", async (req, res) => {
//     try {
//       const blogData = await BlogPost.findAll({});
//       const blogs = blogData.map((blogPost) => {
//         return blogPost.get({ plain: true });
//       });
//       res.render("exercise.html", {
       
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  

  
// //   router.get("/exercise/:id", async (req, res) => {
// //       try {
// //         // const blogData = await BlogPost.findAll({});
// //         // const blogs = blogData.map((blogPost) => {
// //         //   return blogPost.get({ plain: true });
// //         // });
// //         res.res.sendFile("exercise.html", {
         
// //         });
// //       } catch (err) {
// //         res.status(500).json(err);
// //       }
// //     });

// // //index home route


// // //stats homeRoute
// // router.get("/stats", async (req, res) => {
// //     try {
// //     //   const blogData = await BlogPost.findAll({});
// //     //   const blogs = blogData.map((blogPost) => {
// //     //     return blogPost.get({ plain: true });
// //     //   });
// //       res.render("../stats.html", {
        
// //       });
// //     } catch (err) {
// //       res.status(500).json(err);
// //     }
// //   });


module.exports = router;

