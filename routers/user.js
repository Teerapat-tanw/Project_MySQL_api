const mysqlConnection = require('../config')
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, field) => {
        if (!err) {
            // const users = {
            //     Uid1: {
            //         //โหนด
            //         device: {
            //             //ในโหนดมีกี่โปรแกรม
            //             device1: {
            //                 id: rows[0].Id,
            //                 fullname: rows[0].Fullname,
            //                 Username: rows[0].Username,
            //                 Email: rows[0].Email,
            //                 Password: rows[0].Password
            //             },
            //             device2: {
            //                 id: rows[1].Id,
            //                 fullname: rows[1].Fullname,
            //                 Username: rows[1].Username,
            //                 Email: rows[1].Email,
            //                 Password: rows[1].Password
            //             },
            //             device3: {
            //                 id: rows[2].Id,
            //                 fullname: rows[2].Fullname,
            //                 Username: rows[2].Username,
            //                 Email: rows[2].Email,
            //                 Password: rows[2].Password
            //             }
            //         }
            //     },
            //     Uid2: {
            //         //โหนด
            //         device: {
            //             //ในโหนดมีกี่โปรแกรม
            //             device2: {
            //                 id: rows[0].Id,
            //                 fullname: rows[0].Fullname,
            //                 Username: rows[0].Username,
            //                 Email: rows[0].Email,
            //                 Password: rows[0].Password
            //             },
            //             device2: {
            //                 id: rows[1].Id,
            //                 fullname: rows[1].Fullname,
            //                 Username: rows[1].Username,
            //                 Email: rows[1].Email,
            //                 Password: rows[1].Password
            //             },
            //             device3: {
            //                 id: rows[2].Id,
            //                 fullname: rows[2].Fullname,
            //                 Username: rows[2].Username,
            //                 Email: rows[2].Email,
            //                 Password: rows[2].Password
            //             }
            //         }
            //     }
            // }
            res.send(rows)
        }
        else {
            res.send('Cannot')
        }
    })
});

router.post('/', (req, res, next) => {
    // console.log(req.body)
    const Fullname = req.body.Fullname
    const Username = req.body.Username
    const Email = req.body.Email
    const Password = req.body.Password
    const Birthdate = req.body.Birthdate
    const Gender = req.body.Gender
    const Phone = req.body.Phone

    const users = [Fullname, Username, Email, Password, Birthdate, Gender, Phone]
    const sql = mysqlConnection.query("INSERT INTO users(Fullname,Username,Email,Password,Birthdate,Gender,Phone) VALUES(?)",
        [users], (err, rows, fields) => {
            if (rows)
                res.send('Success')
            else
                res.send('Not')
        })
});


module.exports = router;