const http = require("http")
const port = 1337

function getMyBio() {
    const nama = "Muhammad Fahriansyah"
    const age = 18
    const address = "Jawa barat, kota depok, KEC. Cilodong, KEL. Sukamaju, JL. Graha Prima no.63 RT.004/007"
    const hobbies = ["Main game", "Baca manga", "Nonton Anime", "Bikin tools untuk developer", "Oprek - oprek linux", "Go'es sepedah"]
    const is_married = false
    const list_school = [
        {
            name: "SDN Sukamaju 10",
            year_in: 2007,
            year_out: 2013
        },
        {
            name: "SMP Yaspen Tugu Ibu 1 Depok",
            year_in: 2013,
            year_out: 2016
        },
        {
            name: "SMK Taruna Bhakti",
            year_in: 2016,
            year_out: 2019
        }
    ]
    const skills = [
        {
            skill_name: "Golang dev",
            level: "Advanced"
        },
        {
            skill_name: "Nodejs dev",
            level: "Advanced"
        },
        {
            skill_name: "Vuejs",
            level: "Advanced"
        },
        {
            skill_name: "React Native",
            level: "Beginner"
        },
        {
            skill_name: "Mysql, Postgress, MSSql, MariaDB",
            level: "Advanced"
        },
        {
            skill_name: "Html, css",
            level: "Expert"
        },
        {
            skill_name: "Php, Laravel, Lumen dan Slim 3",
            level: "Advanced"
        }
    ]
    const interest_in_coding = true

    let data = [
        {
            nama: nama,
            age: age,
            address: address,
            hobbies: hobbies,
            is_married: is_married,
            list_school: list_school,
            skills: skills,
            interest_in_coding: interest_in_coding
        }
    ]

    return data
}

http.createServer((req, res) => {
    
    res.writeHead(200, {
        "Content-type" : "application/json"
    })

    let mybio = JSON.stringify(getMyBio())

    res.write(mybio) 

    res.end()
}).listen(port)

console.log(`Server REST API started at : http://localhost:${port}`)

// console.log(myBio())