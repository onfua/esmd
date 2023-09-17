import axios from "axios"

const host = "http://localhost:1337"

const api = axios.create({
    baseURL : host,
    headers : {
        Authorization : "Bearer 130cb666436788ded0a72f4e94850e124b888777f74c9799cc67428cb780013a59b3cf2f51df26188b63870a565facc56d3103ca49359b00ad8b27a244c7b15ca434f5c09718d8d8454fb8f0f06bae5ccedc3f252c430f7c6162f2c272e1aaf4f93fb08c3adbde778d049188cd1e9cbeb5ba6c2762682a135085f4d57df200ab"
    }
})

export {host}

export default api