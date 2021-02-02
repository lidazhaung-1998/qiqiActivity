import axios from "./http";

const base = {
    // newYear: "//hot-active.qxiu.com/festival_common/newyearCRank2021/",
    // http://192.168.25.130:8080
    yuanxiao: "/data/yuanXiaoStage0",
    // yuanxiao: "http://hot.active.qxiu.com/festival_common/yuanXiaoStage01",
    // rich: "http://hot.active.qxiu.com/festival_common/yuandanall/",
    rich: "/data/"
    // https://hot-active.qxiu.com
};
const api = {
    // step 是yuanXiaoStage0 （1|2|3|4）
    promotedRank(step, type, page) {
        return axios.get(base.yuanxiao + step + "/ancwinstreakrank", {
            params: {
                type: type,
                page: page
            }
        });
    },
    finalGameRank(page) {
        return axios.get(base.yuanxiao + 'finalAnchorRank', {
            params: {
                page: page
            }
        });
    },


    richDivide(type, page) {
        return axios.get(base.rich + "awardPool", {
            params: {
                type: type
            }
        })
    },
    richRank(page) {
        return axios.get(base.rich + "userRank", {
            params: {
                type: page
            }
        })
    }
}
export default api;