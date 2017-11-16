module.exports = {
    getUsers: (req, res) => {
        req.app.get("db").get_users().then(response => {
          res.json(response);
        });
      },
    
      getAllVehicles: (req, res) => {
        req.app.get("db").getAllVehicles().then(result => {
          res.json(result);
        });
      },
    
      addUser: (req, res) => {
        const newUser = [req.body.name, req.body.email];
        req.app.get("db").add_user(newUser).then(response => {
          res.json(response);
        });
      },
    
      addVehicle: (req, res) => {
        const newVehicle = [
          req.body.make,
          req.body.model,
          req.body.year,
          req.body.owner_id
        ];
        req.app.get("db").add_vehicle(newVehicle).then(response => {
          res.json(response);
        });
      },
    
      getVehicleCount: (req, res) => {
        const count = [req.params.userId];
        req.app.get("db").get_vehicle_count(count).then(response => {
          res.json(response);
        });
      },
    
    
      getVehicleById: (req, res) => {
        const id = [
          req.params.userId
        ]
        req.app.get('db')
        .get_vehicle_by_id(id).then(response => {
          res.json(response)
        })
      },
    
      findAllVehiclesByEmail: (req, res) => {
      if (req.query.userEmail) {
        req.app.get('db')
        .get_vehicle_by_email([req.query.userEmail]).then(response => {
          res.json(response)
        })
      } else if (req.query.userFirstStart) {
          const first = req.query.userFirstStart;
          req.app.get('db')
          .get_vehicle_by_first_name([first + '%']).then(response => {
            res.json(response)
          })
        }
      },
    
      getVehiclesByYear: (req, res) => {
      req.app.get('db')
      .get_vehicles_by_year().then(response => {
        res.json(response)
      })
    },
    
    changeOwner: (req, res) => {
      const change = [
        Number(req.params.vehicleId),
        Number(req.params.userId)
      ]
      req.app.get('db')
      .update_owner(change).then(response => {
        res.send(response)
      })
    },
    
    removeOwner: (req, res) => {
      const owner = [
        req.params.userId,
        req.params.vehicleId
      ]
      req.app.get('db')
      .remove_owner(owner).then(response => {
        res.send(response)
      })
    },
    
    removeVehicle: (req, res) => {
      const vehicle = [
        req.params.vehicleId
      ]
      req.app.get('db')
      .remove_vehicle(vehicle).then(response => {
        res.send(response)
      })
    }
}
