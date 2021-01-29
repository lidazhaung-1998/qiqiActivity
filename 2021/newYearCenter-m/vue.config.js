module.exports = {

    publicPath: './',
    productionSourceMap: false,
    devServer: {
        // proxy: 'http://192.168.25.130:8080',
        before(app) {
            app.get('/data/anchorRank', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": [
                        {
                            "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                            "anchorId": 445442,
                            "anchorName": "蜜兔儿1",
                            "diffScores": 0,
                            "rankNo": 1,
                            "roomId": 200016,
                            "scores": 999900,
                            "showDiff": 1,
                            "state": 2,
                            "timeStampe": 1610955035487
                        },
                        {
                            "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                            "anchorId": 445442,
                            "anchorName": "蜜兔儿2",
                            "diffScores": 0,
                            "rankNo": 2,
                            "roomId": 200016,
                            "scores": 999900,
                            "showDiff": 1,
                            "state": 2,
                            "timeStampe": 1610955035487
                        },
                        {
                            "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                            "anchorId": 445442,
                            "anchorName": "蜜兔儿3",
                            "diffScores": 0,
                            "rankNo": 3,
                            "roomId": 200016,
                            "scores": 999900,
                            "showDiff": 1,
                            "state": 2,
                            "timeStampe": 1610955035487
                        },
                        {
                            "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                            "anchorId": 445442,
                            "anchorName": "蜜兔儿4",
                            "diffScores": 0,
                            "rankNo": 4,
                            "roomId": 200016,
                            "scores": 999900,
                            "showDiff": 1,
                            "state": 2,
                            "timeStampe": 1610955035487
                        },
                        {
                            "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                            "anchorId": 445442,
                            "anchorName": "蜜兔儿5",
                            "diffScores": 0,
                            "rankNo": 5,
                            "roomId": 200016,
                            "scores": 999900,
                            "showDiff": 1,
                            "state": 2,
                            "timeStampe": 1610955035487
                        },
                    ],
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/anchorInfo', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": {
                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                        "anchorId": 445442,
                        "anchorName": "蜜兔儿",
                        "diffScores": 0,
                        "rankNo": 1,
                        "roomId": 200016,
                        "scores": 999900,
                        "showDiff": 1,
                        "state": 2,
                        "timeStampe": 1610955035487
                    },
                    "errmsg": "",
                    "status": 200
                });
            });
            app.get('/data/anchorTask', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": [
                        {
                            "goodsId": 4470,
                            "goodsName": "么么哒",
                            "goodsPic": "",
                            "minute": 8,
                            "state": 2
                        },
                        {
                            "goodsId": 4471,
                            "goodsName": "巴掌",
                            "goodsPic": "",
                            "minute": 18,
                            "state": 1
                        },
                        {
                            "goodsId": 4472,
                            "goodsName": "私人飞机",
                            "goodsPic": "",
                            "minute": 28,
                            "state": 0
                        }
                    ],
                    "errmsg": "",
                    "status": 200
                });
            });
            app.get('/data/anchorContinueCard', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": {
                        "list": [
                            {
                                "clear": 3,
                                "limit": 7,
                                "state": 0
                            },
                            {
                                "clear": 3,
                                "limit": 14,
                                "state": 0
                            },
                            {
                                "clear": 3,
                                "limit": 21,
                                "state": 0
                            },
                            {
                                "clear": 3,
                                "limit": 28,
                                "state": 0
                            }
                        ],
                        "currCards": 3
                    },
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/card', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": {
                        "msg": "成功",
                        "succ": true
                    },
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/anchorOnMic', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": {
                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                        "anchorId": 445442,
                        "anchorName": "蜜兔儿",
                        "rankNo": 0,
                        "roomId": 200016,
                        "scores": 0.2684047222222222,
                        "state": 2,
                        "timeStampe": 9223372036854776000
                    },
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/VanchorRank', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": [
                        {
                            "ancPic": "",
                            "anchorId": 445442,
                            "anchorName": "",
                            "greatUserId": 153494569,
                            "greatUserName": "酷炫牛人",
                            "greatUserPic": "",
                            "greatUserScore": 9999,
                            "rankNo": 1,
                            "roomId": 0,
                            "scores": 9999,
                            "state": 0,
                            "timeStampe": 1610955035487
                        },
                        {
                            "ancPic": "",
                            "anchorId": 445442,
                            "anchorName": "",
                            "greatUserId": 153494569,
                            "greatUserName": "酷炫牛人",
                            "greatUserPic": "",
                            "greatUserScore": 9999,
                            "rankNo": 2,
                            "roomId": 0,
                            "scores": 9999,
                            "state": 0,
                            "timeStampe": 1610955035487
                        },
                        {
                            "ancPic": "",
                            "anchorId": 445442,
                            "anchorName": "",
                            "greatUserId": 153494569,
                            "greatUserName": "酷炫牛人",
                            "greatUserPic": "",
                            "greatUserScore": 9999,
                            "rankNo": 3,
                            "roomId": 0,
                            "scores": 9999,
                            "state": 0,
                            "timeStampe": 1610955035487
                        },
                        {
                            "ancPic": "",
                            "anchorId": 445442,
                            "anchorName": "",
                            "greatUserId": 153494569,
                            "greatUserName": "酷炫牛人",
                            "greatUserPic": "",
                            "greatUserScore": 9999,
                            "rankNo": 4,
                            "roomId": 0,
                            "scores": 9999,
                            "state": 0,
                            "timeStampe": 1610955035487
                        },
                        {
                            "ancPic": "",
                            "anchorId": 445442,
                            "anchorName": "",
                            "greatUserId": 153494569,
                            "greatUserName": "酷炫牛人",
                            "greatUserPic": "",
                            "greatUserScore": 9999,
                            "rankNo": 5,
                            "roomId": 0,
                            "scores": 9999,
                            "state": 0,
                            "timeStampe": 1610955035487
                        },
                    ],
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/VanchorInfo', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": {
                        "ancPic": "",
                        "anchorId": 445442,
                        "anchorName": "",
                        "greatUserId": 153494569,
                        "greatUserName": "酷炫牛人",
                        "greatUserPic": "",
                        "greatUserScore": 9999,
                        "rankNo": 3,
                        "roomId": 0,
                        "scores": 9999,
                        "state": 0,
                        "timeStampe": 1610955035487
                    },
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/VuserRank', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": [
                        {
                            "greatAnchorId": 445442,
                            "greatAnchorName": "蜜兔儿",
                            "greatAnchorPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                            "greatAnchorScore": 9999,
                            "rank": 1,
                            "scores": 9999,
                            "timeStamp": 1610955035487,
                            "userId": 153494569,
                            "userNickName": "",
                            "userPic": ""
                        },
                        {
                            "greatAnchorId": 445442,
                            "greatAnchorName": "蜜兔儿",
                            "greatAnchorPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                            "greatAnchorScore": 9999,
                            "rank": 2,
                            "scores": 9999,
                            "timeStamp": 1610955035487,
                            "userId": 153494569,
                            "userNickName": "",
                            "userPic": ""
                        },
                        {
                            "greatAnchorId": 445442,
                            "greatAnchorName": "蜜兔儿",
                            "greatAnchorPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                            "greatAnchorScore": 9999,
                            "rank": 3,
                            "scores": 9999,
                            "timeStamp": 1610955035487,
                            "userId": 153494569,
                            "userNickName": "",
                            "userPic": ""
                        },
                        {
                            "greatAnchorId": 445442,
                            "greatAnchorName": "蜜兔儿",
                            "greatAnchorPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                            "greatAnchorScore": 9999,
                            "rank": 4,
                            "scores": 9999,
                            "timeStamp": 1610955035487,
                            "userId": 153494569,
                            "userNickName": "",
                            "userPic": ""
                        },
                        {
                            "greatAnchorId": 445442,
                            "greatAnchorName": "蜜兔儿",
                            "greatAnchorPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                            "greatAnchorScore": 9999,
                            "rank": 5,
                            "scores": 9999,
                            "timeStamp": 1610955035487,
                            "userId": 153494569,
                            "userNickName": "",
                            "userPic": ""
                        }
                    ],
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/VuserInfo', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": {
                        "greatAnchorId": 445442,
                        "greatAnchorName": "蜜兔儿",
                        "greatAnchorPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                        "greatAnchorScore": 9999,
                        "rank": 1,
                        "scores": 9999,
                        "timeStamp": 1610955035487,
                        "userId": 153494569,
                        "userNickName": "",
                        "userPic": ""
                    },
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/count', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": 519,
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/today', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": 2,
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/roomScoreRank', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": [
                        {
                            "rankNo": 1,
                            "roomId": 222039,
                            "roomName": "xxx",
                            "roomPic": "http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg",
                            "score": 95872151
                        },
                        {
                            "rankNo": 2,
                            "roomId": 222039,
                            "roomName": "xxx",
                            "roomPic": "http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg",
                            "score": 95872151
                        },
                        {
                            "rankNo": 3,
                            "roomId": 222039,
                            "roomName": "xxx",
                            "roomPic": "http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg",
                            "score": 95872151
                        },
                        {
                            "rankNo": 4,
                            "roomId": 222039,
                            "roomName": "xxx",
                            "roomPic": "http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg",
                            "score": 95872151
                        },
                        {
                            "rankNo": 5,
                            "roomId": 222039,
                            "roomName": "xxx",
                            "roomPic": "http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg",
                            "score": 95872151
                        }
                    ],
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/roomOnMicRank', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": [
                        {
                            "rankNo": 1,
                            "roomId": 222039,
                            "roomName": "xxxxxx",
                            "roomPic": "http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg",
                            "score": 95872151
                        },
                        {
                            "rankNo": 2,
                            "roomId": 222039,
                            "roomName": "xxxxxx",
                            "roomPic": "http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg",
                            "score": 95872151
                        },
                        {
                            "rankNo": 3,
                            "roomId": 222039,
                            "roomName": "xxxxxx",
                            "roomPic": "http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg",
                            "score": 95872151
                        },
                        {
                            "rankNo": 4,
                            "roomId": 222039,
                            "roomName": "xxxxxx",
                            "roomPic": "http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg",
                            "score": 95872151
                        },
                        {
                            "rankNo": 5,
                            "roomId": 222039,
                            "roomName": "xxx",
                            "roomPic": "http://resource.qxiu.com/upload/eb70861abf046ae2b098.jpg",
                            "score": 95872151
                        }
                    ],
                    "errmsg": "",
                    "status": 200
                })
            })
        }
    }
}