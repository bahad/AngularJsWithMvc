(function () {
    app.controller('TestMy', function ($scope, $http) {
        $scope.GetPageData = function (pageNum) {
            $http.get('/Home/GetPaggedData', { params: { pageNumber: pageNum, pageSize: $scope.pageSize } }).then(function (response) {
                $scope.Products = response.data.Data;
                $scope.PaggingTemplate(response.data.TotalPages, response.data.CurrentPage);
            });
        };
        var init = function () {
            $scope.GetPageData(1);
        };

        init();

        $scope.PaggingTemplate = function (totalPage, currentPage) {
            $scope.showForwardBtn = true;
            $scope.TotalPages = totalPage;
            $scope.CurrentPage = currentPage;
            $scope.PageNumberArray = Array();

            var countIncr = 1;
            for (var i = currentPage; i <= totalPage; i++) {
                $scope.PageNumberArray[0] = currentPage;
                if (totalPage != currentPage && $scope.PageNumberArray[countIncr - 1] != totalPage) {
                    $scope.PageNumberArray[countIncr] = i + 1;
                }
                countIncr++;
            };
            $scope.PageNumberArray = $scope.PageNumberArray.slice(0, 5);
            $scope.FirstPage = 1;
            $scope.LastPage = totalPage;
            if (totalPage != currentPage) {
                $scope.ForwardOne = currentPage + 1;
            }
            $scope.BackwardOne = currentPage - 1;
            if (totalPage == currentPage) {
                $scope.showForwardBtn = false;
            }
        };


    });
}).call(angular);