angular.module('app', ['base'])
    .controller('MainController', ['$scope', '$interval', function ($scope, $interval) {

        $scope.dataList = [];
        var ramdomInt = function () {
            return Math.ceil(Math.random() * 100)
        }
        for (var i = 0; i < 124; i++) {
            $scope.dataList.push({
                field_1: ramdomInt(), field_2: ramdomInt(), field_3: ramdomInt(), field_4: ramdomInt(), field_5: ramdomInt()
            })
        }

        $scope.tableConfig = {
            itemsPerPage: 10,
            maxPages: 5,
            fillLastPage: false
        }

        var setCurrentTime = function () {
            var currentTime = $.format.date(new Date(), 'yyyy-MM-dd ')
            currentTime += {
                Mon: '星期一',
                Tue: '星期二',
                Wed: '星期三',
                Thu: '星期四',
                Fri: '星期五',
                Sat: '星期六',
                Sun: '星期天'
            }[$.format.date(new Date(), 'E')];
            currentTime += $.format.date(new Date(), ' HH:mm')
            $scope.currentTime = currentTime;
        }

        setCurrentTime();
        $interval(function () {
            setCurrentTime();
        }, 1000)
    }])