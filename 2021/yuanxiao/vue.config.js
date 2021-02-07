module.exports = {
    publicPath: './',
    productionSourceMap: false,
    devServer: {
        // proxy:'http://192.168.25.130:8080',
        before(app) {
            app.get('/data/state',function(req,res){
                res.send( {
                    "errcode": 0,
                    "result": 0,
                    "errmsg": "",
                    "status": 200
                })
            })
            app.get("/data/yuanXiaoStage01/grouped",function (req,res) {
                res.send( {
                    "errcode": 0,
                    "result": false,
                    "errmsg": "",
                    "status": 200
                })
            })
            app.get('/data/yuanXiaoStage01/allAnchors',function (req,res) {
                res.send({
                    "errcode": 0,
                    "result": {
                        "list": [
                            {
                                "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorId": 369661,
                                "anchorName": "全部",
                                "rankNo": 1,
                                "roomId": 0,
                                "scores": 0,
                                "state": 0,
                                "timeStampe": 9223372036854776000
                            },
                            {
                                "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorId": 369661,
                                "anchorName": "全部",
                                "rankNo":2,
                                "roomId": 0,
                                "scores": 0,
                                "state": 0,
                                "timeStampe": 9223372036854776000
                            },
                            {
                                "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorId": 369661,
                                "anchorName": "全部",
                                "rankNo": 3,
                                "roomId": 0,
                                "scores": 0,
                                "state": 0,
                                "timeStampe": 9223372036854776000
                            },
                            {
                                "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorId": 369661,
                                "anchorName": "全部",
                                "rankNo": 4,
                                "roomId": 0,
                                "scores": 0,
                                "state": 0,
                                "timeStampe": 9223372036854776000
                            },
                            {
                                "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorId": 369661,
                                "anchorName": "全部",
                                "rankNo": 5,
                                "roomId": 0,
                                "scores": 0,
                                "state": 0,
                                "timeStampe": 9223372036854776000
                            },
                            {
                                "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorId": 369661,
                                "anchorName": "全部",
                                "rankNo": 6,
                                "roomId": 0,
                                "scores": 0,
                                "state": 0,
                                "timeStampe": 9223372036854776000
                            },
                            {
                                "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorId": 369661,
                                "anchorName": "全部",
                                "rankNo": 7,
                                "roomId": 0,
                                "scores": 0,
                                "state": 0,
                                "timeStampe": 9223372036854776000
                            },
                            {
                                "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorId": 369661,
                                "anchorName": "全部",
                                "rankNo": 8,
                                "roomId": 0,
                                "scores": 0,
                                "state": 0,
                                "timeStampe": 9223372036854776000
                            },
                            {
                                "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorId": 369661,
                                "anchorName": "全部",
                                "rankNo": 9,
                                "roomId": 0,
                                "scores": 0,
                                "state": 0,
                                "timeStampe": 9223372036854776000
                            },
                            {
                                "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorId": 369661,
                                "anchorName": "全部",
                                "rankNo": 10,
                                "roomId": 0,
                                "scores": 0,
                                "state": 0,
                                "timeStampe": 9223372036854776000
                            },
                        ],
                        "totalPage": 1
                    },
                    "errmsg": "",
                    "status": 200
                })
            })
            app.get('/data/yuanXiaoStage01/anchors', function (req, res) {
                let {type, page} = req.query;
                if (type == 0) {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                    "anchorId": 369661,
                                    "anchorName": "汤圆队",
                                    "rankNo": 1,
                                    "roomId": 0,
                                    "scores": 100,
                                    "state": 0,
                                    "timeStampe": 9223372036854776000
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                    "anchorId": 369661,
                                    "anchorName": "汤圆队",
                                    "rankNo": 2,
                                    "roomId": 0,
                                    "scores": 100,
                                    "state": 0,
                                    "timeStampe": 9223372036854776000
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                    "anchorId": 369661,
                                    "anchorName": "汤圆队",
                                    "rankNo": 3,
                                    "roomId": 0,
                                    "scores": 100,
                                    "state": 0,
                                    "timeStampe": 9223372036854776000
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                    "anchorId": 369661,
                                    "anchorName": "汤圆队",
                                    "rankNo": 4,
                                    "roomId": 0,
                                    "scores": 100,
                                    "state": 0,
                                    "timeStampe": 9223372036854776000
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                    "anchorId": 369661,
                                    "anchorName": "汤圆队",
                                    "rankNo": 5,
                                    "roomId": 0,
                                    "scores": 100,
                                    "state": 0,
                                    "timeStampe": 9223372036854776000
                                }
                            ],
                            "totalPage": 1
                        },
                        "errmsg": "",
                        "status": 200
                    })
                } else {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                    "anchorId": 369661,
                                    "anchorName": "饺子",
                                    "rankNo": 1,
                                    "roomId": 0,
                                    "scores": 100,
                                    "state": 0,
                                    "timeStampe": 9223372036854776000
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                    "anchorId": 369661,
                                    "anchorName": "饺子",
                                    "rankNo": 2,
                                    "roomId": 0,
                                    "scores": 100,
                                    "state": 0,
                                    "timeStampe": 9223372036854776000
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                    "anchorId": 369661,
                                    "anchorName": "饺子",
                                    "rankNo": 3,
                                    "roomId": 0,
                                    "scores": 100,
                                    "state": 0,
                                    "timeStampe": 9223372036854776000
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                    "anchorId": 369661,
                                    "anchorName": "饺子",
                                    "rankNo": 4,
                                    "roomId": 0,
                                    "scores": 100,
                                    "state": 0,
                                    "timeStampe": 9223372036854776000
                                },
                                {
                                    "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                    "anchorId": 369661,
                                    "anchorName": "饺子",
                                    "rankNo": 5,
                                    "roomId": 0,
                                    "scores": 100,
                                    "state": 0,
                                    "timeStampe": 9223372036854776000
                                }
                            ],
                            "totalPage": 1
                        },
                        "errmsg": "",
                        "status": 200
                    })
                }
            })
            app.get('/data/yuanXiaoStage01/anchorIden', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": 0,
                    "errmsg": "",
                    "status": 200
                });
            })
            app.get('/data/yuanXiaoStage02/ancwinstreakrank', function (req, res) {
                let {page, type} = req.query;
                if (type == 0) {
                    if (page == 0) {
                        res.send({
                            "errcode": 0,
                            "result": {
                                "list": [
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
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿6",
                                        "diffScores": 0,
                                        "rankNo": 6,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿7",
                                        "diffScores": 0,
                                        "rankNo": 7,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿8",
                                        "diffScores": 0,
                                        "rankNo": 8,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿9",
                                        "diffScores": 0,
                                        "rankNo": 9,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿10",
                                        "diffScores": 0,
                                        "rankNo": 10,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                ],
                                "totalPage": 3
                            },
                            "errmsg": "",
                            "status": 200
                        })
                    } else if (page == 1) {
                        res.send({
                            "errcode": 0,
                            "result": {
                                "list": [
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿11",
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
                                        "anchorName": "蜜兔儿22",
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
                                        "anchorName": "蜜兔儿33",
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
                                        "anchorName": "蜜兔儿44",
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
                                        "anchorName": "蜜兔儿55",
                                        "diffScores": 0,
                                        "rankNo": 5,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿66",
                                        "diffScores": 0,
                                        "rankNo": 6,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿77",
                                        "diffScores": 0,
                                        "rankNo": 7,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿88",
                                        "diffScores": 0,
                                        "rankNo": 8,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿99",
                                        "diffScores": 0,
                                        "rankNo": 9,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿100",
                                        "diffScores": 0,
                                        "rankNo": 10,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                ],
                                "totalPage": 3
                            },
                            "errmsg": "",
                            "status": 200
                        })
                    } else if (page == 2) {
                        res.send({
                            "errcode": 0,
                            "result": {
                                "list": [
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
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿6",
                                        "diffScores": 0,
                                        "rankNo": 6,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿7",
                                        "diffScores": 0,
                                        "rankNo": 7,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿8",
                                        "diffScores": 0,
                                        "rankNo": 8,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿9",
                                        "diffScores": 0,
                                        "rankNo": 9,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿10",
                                        "diffScores": 0,
                                        "rankNo": 10,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                ],
                                "totalPage": 3
                            },
                            "errmsg": "",
                            "status": 200
                        })
                    }
                } else {
                    if (page == 0) {
                        res.send({
                            "errcode": 0,
                            "result": {
                                "list": [
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "饺子",
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
                                        "anchorName": "饺子",
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
                                        "anchorName": "饺子",
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
                                        "anchorName": "饺子",
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
                                        "anchorName": "饺子",
                                        "diffScores": 0,
                                        "rankNo": 5,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "饺子",
                                        "diffScores": 0,
                                        "rankNo": 6,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "饺子",
                                        "diffScores": 0,
                                        "rankNo": 7,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "饺子",
                                        "diffScores": 0,
                                        "rankNo": 8,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "饺子",
                                        "diffScores": 0,
                                        "rankNo": 9,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "饺子",
                                        "diffScores": 0,
                                        "rankNo": 10,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                ],
                                "totalPage": 3
                            },
                            "errmsg": "",
                            "status": 200
                        })
                    } else if (page == 1) {
                        res.send({
                            "errcode": 0,
                            "result": {
                                "list": [
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿11",
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
                                        "anchorName": "蜜兔儿22",
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
                                        "anchorName": "蜜兔儿33",
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
                                        "anchorName": "蜜兔儿44",
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
                                        "anchorName": "蜜兔儿55",
                                        "diffScores": 0,
                                        "rankNo": 5,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿66",
                                        "diffScores": 0,
                                        "rankNo": 6,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿77",
                                        "diffScores": 0,
                                        "rankNo": 7,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿88",
                                        "diffScores": 0,
                                        "rankNo": 8,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿99",
                                        "diffScores": 0,
                                        "rankNo": 9,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "蜜兔儿100",
                                        "diffScores": 0,
                                        "rankNo": 10,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                ],
                                "totalPage": 3
                            },
                            "errmsg": "",
                            "status": 200
                        })
                    } else if (page == 2) {
                        res.send({
                            "errcode": 0,
                            "result": {
                                "list": [
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "饺子",
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
                                        "anchorName": "饺子",
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
                                        "anchorName": "饺子",
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
                                        "anchorName": "饺子",
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
                                        "anchorName": "饺子",
                                        "diffScores": 0,
                                        "rankNo": 5,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "饺子",
                                        "diffScores": 0,
                                        "rankNo": 6,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "饺子",
                                        "diffScores": 0,
                                        "rankNo": 7,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "饺子",
                                        "diffScores": 0,
                                        "rankNo": 8,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "饺子",
                                        "diffScores": 0,
                                        "rankNo": 9,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                    {
                                        "ancPic": "http://qiqi-resource.qxiu.com/op/2019/08/20/fb563c1c261b4bb59cbdca96af467577.jpg",
                                        "anchorId": 445442,
                                        "anchorName": "饺子",
                                        "diffScores": 0,
                                        "rankNo": 10,
                                        "roomId": 200016,
                                        "scores": 999900,
                                        "showDiff": 1,
                                        "state": 2,
                                        "timeStampe": 1610955035487
                                    },
                                ],
                                "totalPage": 3
                            },
                            "errmsg": "",
                            "status": 200
                        })
                    }
                }

            });
            app.get('/data/yuanXiaoStage03/pklist', function (req, res) {
                let {type} = req.query;
                if (type == 0) {
                    res.send({
                        "errcode": 0,
                        "result": [
                            {
                                "anchorId1": 369661,
                                "anchorId2": 369656,
                                "anchorName1": "汤圆1",
                                "anchorName2": "汤圆2",
                                "anchorPic1": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorPic2": "",
                                "endTime": "2021-02-02 17:00:00",
                                "score1": 1,
                                "score2": 1,
                                "startTime": "2021-02-02 16:00:00",
                                "win": 0
                            },
                            {
                                "anchorId1": 369661,
                                "anchorId2": 369656,
                                "anchorName1": "汤圆3",
                                "anchorName2": "汤圆4",
                                "anchorPic1": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorPic2": "",
                                "endTime": "2021-02-02 17:00:00",
                                "score1": 0,
                                "score2": 2,
                                "startTime": "2021-02-02 17:00:00",
                                "win": 2
                            },
                            {
                                "anchorId1": 369661,
                                "anchorId2": 369656,
                                "anchorName1": "汤圆5",
                                "anchorName2": "汤圆6",
                                "anchorPic1": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorPic2": "",
                                "endTime": "2021-02-02 17:00:00",
                                "score1": 2,
                                "score2": 1,
                                "startTime": "2021-02-02 18:00:00",
                                "win": 1
                            }
                        ],
                        "errmsg": "",
                        "status": 200
                    })
                } else {
                    res.send({
                        "errcode": 0,
                        "result": [
                            {
                                "anchorId1": 369661,
                                "anchorId2": 369656,
                                "anchorName1": "饺子1",
                                "anchorName2": "饺子2",
                                "anchorPic1": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorPic2": "",
                                "endTime": "2021-02-02 17:00:00",
                                "score1": 1,
                                "score2": 2,
                                "startTime": "2021-02-02 16:00:00",
                                "win": 2
                            },
                            {
                                "anchorId1": 369661,
                                "anchorId2": 369656,
                                "anchorName1": "饺子3",
                                "anchorName2": "饺子4",
                                "anchorPic1": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorPic2": "",
                                "endTime": "2021-02-02 17:00:00",
                                "score1": 2,
                                "score2": 0,
                                "startTime": "2021-02-02 17:00:00",
                                "win": 1
                            },
                            {
                                "anchorId1": 369661,
                                "anchorId2": 369656,
                                "anchorName1": "饺子",
                                "anchorName2": "饺子6",
                                "anchorPic1": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                                "anchorPic2": "",
                                "endTime": "2021-02-02 17:00:00",
                                "score1": 1,
                                "score2": 1,
                                "startTime": "2021-02-02 18:00:00",
                                "win": 0
                            }
                        ],
                        "errmsg": "",
                        "status": 200
                    })
                }
            });
            app.get('/data/yuanXiaoStage04/pklist', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": [
                        {
                            "anchorId1": 369661,
                            "anchorId2": 369656,
                            "anchorName1": "369661#11369661#1136",
                            "anchorName2": "",
                            "anchorPic1": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                            "anchorPic2": "",
                            "endTime": "2021-02-02 17:00:00",
                            "score1": 1,
                            "score2": 1,
                            "startTime": "2021-02-02 16:00:00",
                            "win": 0
                        },
                        {
                            "anchorId1": 369661,
                            "anchorId2": 369656,
                            "anchorName1": "369661#11369661#1136",
                            "anchorName2": "",
                            "anchorPic1": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                            "anchorPic2": "",
                            "endTime": "2021-02-02 17:00:00",
                            "score1": 1,
                            "score2": 1,
                            "startTime": "2021-02-02 16:01:00",
                            "win": 0
                        },
                        {
                            "anchorId1": 369661,
                            "anchorId2": 369656,
                            "anchorName1": "369661#11369661#1136",
                            "anchorName2": "",
                            "anchorPic1": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                            "anchorPic2": "",
                            "endTime": "2021-02-02 17:00:00",
                            "score1": 1,
                            "score2": 1,
                            "startTime": "2021-02-02 16:02:00",
                            "win": 0
                        },
                        {
                            "anchorId1": 369661,
                            "anchorId2": 369656,
                            "anchorName1": "369661#11369661#1136",
                            "anchorName2": "",
                            "anchorPic1": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                            "anchorPic2": "",
                            "endTime": "2021-02-02 17:00:00",
                            "score1": 1,
                            "score2": 1,
                            "startTime": "2021-02-02 16:03:00",
                            "win": 0
                        },
                        {
                            "anchorId1": 369661,
                            "anchorId2": 369656,
                            "anchorName1": "369661#11369661#1136",
                            "anchorName2": "",
                            "anchorPic1": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg",
                            "anchorPic2": "",
                            "endTime": "2021-02-02 17:00:00",
                            "score1": 1,
                            "score2": 1,
                            "startTime": "2021-02-02 16:04:00",
                            "win": 0
                        },
                    ],
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/yuanXiaoStage04/anchorSuccRank', function (req, res) {
                res.send({
                    "errcode": 0,
                    "result": [
                        {
                            "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg@style@s640",
                            "anchorId": 369661,
                            "anchorName": "369661#11369661#1136",
                            "rankNo": 1,
                            "roomId": 0,
                            "scores": 10,
                            "state": 0,
                            "timeStampe": 1612256548382
                        },
                        {
                            "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg@style@s640",
                            "anchorId": 369661,
                            "anchorName": "369661#11369661#1136",
                            "rankNo": 2,
                            "roomId": 0,
                            "scores": 10,
                            "state": 0,
                            "timeStampe": 1612256548382
                        },
                        {
                            "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg@style@s640",
                            "anchorId": 369661,
                            "anchorName": "369661#11369661#1136",
                            "rankNo": 3,
                            "roomId": 0,
                            "scores": 10,
                            "state": 0,
                            "timeStampe": 1612256548382
                        },
                        {
                            "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg@style@s640",
                            "anchorId": 369661,
                            "anchorName": "369661#11369661#1136",
                            "rankNo": 4,
                            "roomId": 0,
                            "scores": 10,
                            "state": 0,
                            "timeStampe": 1612256548382
                        },
                        {
                            "ancPic": "http://qiqi-resource.qxiu.com/op/2018/01/12/6d213dec5cee4ce283f90c0414db41ee.jpg@style@s640",
                            "anchorId": 369661,
                            "anchorName": "369661#11369661#1136",
                            "rankNo": 5,
                            "roomId": 0,
                            "scores": 10,
                            "state": 0,
                            "timeStampe": 1612256548382
                        },
                    ],
                    "errmsg": "",
                    "status": 200
                })
            });
            app.get('/data/userRank', function (req, res) {
                let type = req.query.type;
                if (type == 0) {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "award": 0,
                                    "rank": 1,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "汤圆",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 2,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "汤圆",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 3,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "汤圆",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 4,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "汤圆",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 5,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "汤圆",
                                    "userPic": ""
                                },
                            ],
                            "totalPage": 1
                        },
                        "errmsg": "",
                        "status": 200
                    })
                } else {
                    res.send({
                        "errcode": 0,
                        "result": {
                            "list": [
                                {
                                    "award": 0,
                                    "rank": 1,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "饺子",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 2,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "饺子",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 3,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "饺子",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 4,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "饺子",
                                    "userPic": ""
                                },
                                {
                                    "award": 0,
                                    "rank": 5,
                                    "scores": 100,
                                    "timeStamp": 1593415844143,
                                    "userId": 153494569,
                                    "userNickName": "饺子",
                                    "userPic": ""
                                },
                            ],
                            "totalPage": 1
                        },
                        "errmsg": "",
                        "status": 200
                    })
                }
            });
            app.get('/data/awardPool', function (req, res) {
                let type = req.query.type;
                if (type == 0) {
                    res.send({
                        "errcode": 0,
                        "result": "汤圆",
                        "errmsg": "",
                        "status": 200
                    })
                } else {
                    res.send({
                        "errcode": 0,
                        "result": "饺子",
                        "errmsg": "",
                        "status": 200
                    })
                }
            });
        }
    }
}