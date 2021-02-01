import axios from "./http";

const base = {
    // newYear: "//hot-active.qxiu.com/festival_common/newyearCRank2021/",
    // http://192.168.25.130:8080
    yuanxiao: "/data/"
    // https://hot-active.qxiu.com
};
const api = {
    promotedRank(url, page) {
        return axios.get(base.yuanxiao + url, {
            params: {
                page: page
            }
        })
    },
    finalGameRank(page) {
        return axios.get(base.yuanxiao + 'finalAnchorRank', {
            params: {
                page: page
            }
        });
    },
    richRank(url, page) {
        return axios.get(base.yuanxiao + url, {
            params: {
                page: page
            }
        })
    }
}
export default api;