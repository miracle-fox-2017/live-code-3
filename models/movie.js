const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/movie.db')


class Movie {
    static findAll() {
        return new Promise((resolve, reject) => {
            let query = `select * from Movies m left join ProductionHouses p on m.prodHouseId = p.id`
            db.all(query, function (err, rows) {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    }

    static findById(id) {
        return new Promise((resolve, reject) => {
            let query = `select * from Movies where id = ${id}`
            db.each(query, function (err, row) {
                if (err) {
                    reject(err)
                } else {
                    resolve(row)
                }
            })

        })
    }

    static updateData(id, newData) {
        return new Promise((resolve, reject) => {
            let query = `update Movies set name = ${newData.name}, released_year = name = ${newData.released_year}, prodHouseId = ${newData.prodHouseId}`
            db.run(query, function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}

module.exports = Movie