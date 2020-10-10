const mysqlConnection = require('../config')
const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) => {
    mysqlConnection.query('SELECT * FROM sensors', (err, rows, field) => {

        if (!err) {

            const users = {
                Uid1: {
                    //โหนด
                    devices: {
                        //ในโหนดมีกี่โปรแกรม
                        device: {
                            id: rows[0].Id,
                            Devicename: rows[0].Devicename,
                            Temperature: rows[0].Temperature,
                            Humidity: rows[0].Humidity,
                            Light: rows[0].Light
                        },
                        device: {
                            id: rows[0].Id,
                            Devicename: rows[0].Devicename,
                            Temperature: rows[0].Temperature,
                            Humidity: rows[0].Humidity,
                            Light: rows[0].Light
                        },
                        device: {
                            id: rows[0].Id,
                            Devicename: rows[0].Devicename,
                            Temperature: rows[0].Temperature,
                            Humidity: rows[0].Humidity,
                            Light: rows[0].Light
                        }
                    },
                    
                },
                Uid2: {
                    //โหนด
                    devices: {
                        //ในโหนดมีกี่โปรแกรม
                        device: {
                            id: rows[0].Id,
                            Devicename: rows[0].Devicename,
                            Temperature: rows[0].Temperature,
                            Humidity: rows[0].Humidity,
                            Light: rows[0].Light
                        }

                    }
                }
            }
       
            res.send(users)
        }
        else {
            res.send('Cannot Sensors')
        }
    })
})

router.post('/', (req, res, next) => {
    // res.send(req.body)

    const Device = req.body.Device
    const Devicename = req.body.Devicename
    const Temperature = req.body.Temperature
    const Humidity = req.body.Humidity
    const Light = req.body.Light

    const sensors = [Device, Devicename, Temperature, Humidity, Light]

    var sqll = mysqlConnection.query("INSERT INTO sensors(Device,Devicename,Temperature,Humidity,Light) VALUES(?)",
        [sensors], (err, rows, field) => {
            if (rows) {
                res.send('Complete')
            }
            else {
                res.send('Not Complete')
            }
        })

})


module.exports = router;