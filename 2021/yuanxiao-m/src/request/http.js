import axios from "axios";
import {queryString, cookie} from "../assets/javascript/common";

var query = {
    userId: queryString('userId') || queryString('userid') || cookie.get('userId') || cookie.get('userid'),
    anchorId: queryString('anchorId') || cookie.get('anchorId'),
    mcheck: queryString('mcheck') || queryString('meck') || cookie.get('meck')
};
var instance = axios.create({timeout: 1000 * 10});
instance.interceptors.request.use(
    config => {
        for (var key in config.params) {
            if(!query[key]){
                continue;
            }
            config.params[key] = query[key];
        }
        return config;
    },
    error => Promise.reject(error)
)
instance.interceptors.response.use(
    res => {
        return res.status === 200 ? Promise.resolve(res) : Promise.reject(res);
    },
    error => Promise.reject(error)
)
export default instance;