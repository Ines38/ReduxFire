// const express = require('mongoose')
// const router = express.router()
// const mongoose = require('mongoose')
// const User = mongoose.model('user')

// router.get('/', (req, res) => {
//     res.render('user/addOrEdit',{
//         viewtitle: 'insert user'
//     })
// })

// router.post('/', (req, res) => {
//     if(req.body._id == ''){
//         insertRecord(req, res)
//     } else{
//         updateRecord(req, res)
//     }
// })

// function insertRecord(req, res){
//     var user = new User();
//     user.firstname = req.body.firstname;
//     user.lastname = req.body.lastname;
//     user.email = req.body.email;
//     user.phone = req.body.phone;
//     user.password = req.body.password;
//     user.role = req.body.role;
//     user.save((err, doc) => {
//         if(!err) {
//            res.redirect('user/list')
//         }else{
//             console.log('Error during insert: '+err)
//         }
//     })
// }

// function updateRecord(req, res){
//     user.findOneAndUpdate(
//         {_id: req.body._id},
//         req.body,
//         {new: true},
//         (err, doc) => {
//             if(!err){
//                 res.redirect("user/list");
//             } else{
//                 console.log('Error during update', +err);
//             }
//         }
//     );
// }

// router.get('/list', (req, res) => {
//     User.find((err, docs) => {
//         if(!err) {
//             res.render('user/list', {
//                 list: docs
//             })
//         } else{
//             console.log('Error in retrieval' +err)
//         }
//     })
// })
