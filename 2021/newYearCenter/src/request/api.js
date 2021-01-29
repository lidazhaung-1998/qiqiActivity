import axios from "./http";

const base = {
    newYear: "//hot-active.qxiu.com/festival_common/newyearCRank2021/",
    valentine: "//hot-active.qxiu.com/festival_common/valentine2021/"
    // http://192.168.25.130:8080
    // https://hot-active.qxiu.com
};
const api = {
    // 正式
    // 主播C位榜
    anchorCenterRank() {
        return axios.get(base.newYear + 'anchorRank');
    },
    // 主播C位个人信息
    anchorCenterInfo() {
        return axios.get(base.newYear + 'anchorInfo', {
            params: {
                anchorId: true
            }
        })
    },
    // 主播个人打卡信息
    anchorClockInInfo() {
        return axios.get(base.newYear + 'anchorTask', {
            params: {
                anchorId: true
            }
        })
    },
    // 主播连续打卡信息
    anchorContinueClockInInfo() {
        return axios.get(base.newYear + 'anchorContinueCard', {
            params: {
                anchorId: true
            }
        })
    },
    // 主播进行打卡
    anchorClockIn(day) {
        return axios.get(base.newYear + 'card', {
            params: {
                userId: true,
                mcheck: true,
                day:day
            }
        })
    },
    anchorGetClockInAward(index) {
        return axios.get(base.newYear + 'continueCardAward', {
            params: {
                userId: true,
                mcheck: true,
                index:index
            }
        })
    },
    // 主播在麦时长
    anchorLiveTime() {
        return axios.get(base.newYear + 'anchorOnMic', {
            params: {
                anchorId: true,
            }
        })
    },
    //  主播情人节榜
    anchorValentineRank() {
        return axios.get(base.valentine + 'anchorRank')
    },
    //  主播情人节个人信息
    anchorSelfValentineInfo() {
        return axios.get(base.valentine + 'anchorInfo', {
            params: {
                anchorId: true,
            }
        })
    },
    //  用户情人节榜
    userValentineRank() {
        return axios.get(base.valentine + 'userRank')
    },
    //  用户情人节个人信息
    userSelfValentineInfo() {
        return axios.get(base.valentine + 'userInfo', {
            params: {
                userId: true,
            }
        })
    },
    valentineCount() {
        return axios.get(base.valentine + 'count')
    },
    today() {
        return axios.get(base.newYear + 'today')
    },
    guildRank() {
        return axios.get(base.newYear + 'roomScoreRank')
    },
    guildRoomOnMicRank() {
        return axios.get(base.newYear + 'roomOnMicRank')
    },

    // 测试
    // 主播C位榜
    // anchorCenterRank() {
    //     return axios.get('/data/anchorRank');
    //     // return axios.get(base.newYear + 'anchorRank');
    // },
    // // 主播C位个人信息
    // anchorCenterInfo() {
    //     return axios.get('/data/anchorInfo', {
    //         params: {
    //             anchorId: true
    //         }
    //     })
    // },
    // // 主播个人签到信息
    // anchorClockInInfo() {
    //     return axios.get('/data/anchorTask', {
    //         params: {
    //             anchorId: true
    //         }
    //     })
    // },
    // // 主播连续签到信息
    // anchorContinueClockInInfo() {
    //     return axios.get('/data/anchorContinueCard', {
    //         params: {
    //             anchorId: true
    //         }
    //     })
    // },
    // // 主播进行打卡
    // anchorClockIn() {
    //     return axios.get('/data/card', {
    //         params: {
    //             anchorId: true,
    //             mcheck: true
    //         }
    //     })
    // },
    // // 主播在麦时长
    // anchorLiveTime() {
    //     return axios.get('/data/anchorOnMic', {
    //         params: {
    //             anchorId: true,
    //         }
    //     })
    // },
    //
    // anchorValentineRank() {
    //     return axios.get('/data/VanchorRank')
    // },
    // anchorSelfValentineInfo() {
    //     return axios.get('/data/VanchorInfo', {
    //         params: {
    //             anchorId: true,
    //         }
    //     })
    // },
    // userValentineRank() {
    //     return axios.get('/data/VuserRank')
    // },
    // userSelfValentineInfo() {
    //     return axios.get('/data/VuserInfo', {
    //         params: {
    //             userId: true,
    //         }
    //     })
    // },
    // valentineCount() {
    //     return axios.get('/data/count')
    // },
    // today() {
    //     return axios.get('/data/today')
    // },
    // guildRank() {
    //     return axios.get('/data/roomScoreRank')
    // },
    // guildRoomOnMicRank() {
    //     return axios.get('/data/roomOnMicRank')
    // }
}
export default api;