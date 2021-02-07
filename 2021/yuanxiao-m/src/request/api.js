import axios from "./http";

const base = {
    // 本地测试
    // yuanxiao: "/data/yuanXiaoStage0",
    // rich: "/data/"
    // 联调
    // yuanxiao: "http://192.168.25.130:8080/festival_common/yuanXiaoStage0",
    // rich: "http://192.168.25.130:8080/festival_common/yuandanall/",
    // 内网测试
    yuanxiao: "//hot-active.qxiu.com/festival_common/yuanXiaoStage0",
    rich: "//hot-active.qxiu.com/festival_common/yuandanall/",
    // https://hot-active.qxiu.com
};
const api = {
    actState() {
        return axios.get(base.rich + 'state');
    },
    groupState(step) {
        return axios.get(base.yuanxiao + step + "/grouped");
    },
    allAnchors(step, page) {
        return axios.get(base.yuanxiao + step + "/allAnchors", {
            params: {
                page: page
            }
        })
    },
    // step 是yuanXiaoStage0 （1|2|3|4）
    anchors(step, type, page) {
        return axios.get(base.yuanxiao + step + "/anchors", {
            params: {
                type: type,
                page: page
            }
        })
    },
    anchorIden(step) {
        return axios.get(base.yuanxiao + step + "/anchorIden", {
            params: {
                anchorId: true
            }
        })
    },
    // 二阶段
    promotedRank(step, type, page) {
        return axios.get(base.yuanxiao + step + "/ancwinstreakrank", {
            params: {
                type: type,
                page: page
            }
        });
    },
    // 三阶段
    knockoutPKList(step, type) {
        return axios.get(base.yuanxiao + step + "/pklist", {
            params: {
                type: type
            }
        });
    },
    // 四段
    finalPKList(step, index) {
        return axios.get(base.yuanxiao + step + "/pklist", {
            params: {
                index: index
            }
        })
    },
    finalGameRank(step, page) {
        return axios.get(base.yuanxiao + step + '/anchorSuccRank', {
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
    richRank(type, page) {
        return axios.get(base.rich + "userRank", {
            params: {
                type: type,
                page: page
            }
        })
    },
    richInfo() {
        return axios.get(base.rich + "userInfo", {
            params: {
                userId: true
            }
        })
    }
}
export default api;