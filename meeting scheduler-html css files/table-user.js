
	 $(function () {
        $('#hover, #striped, #condensed').click(function () {
            var classes = 'table';

            if ($('#hover').prop('checked')) {
                classes += ' table-hover';
            }
            if ($('#condensed').prop('checked')) {
                classes += ' table-condensed';
            }
            $('#table-style').bootstrapTable('destroy')
                .bootstrapTable({
                    classes: classes,
                    striped: $('#striped').prop('checked')
                });
        });
    });

    function rowStyle(row, index) {
        var classes = ['active', 'success', 'info', 'warning', 'danger'];

        if (index % 2 === 0 && index / 2 < classes.length) {
            return {
                classes: classes[index / 2]
            };
        }
        return {};
    }
	
	function priceSorter(a, b) {
        a = +a.substring(1); // remove $
        b = +b.substring(1);
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    }
	
	function nameFormatter(value, row) {
        var icon = row.id % 2 === 0 ? 'glyphicon-star' : 'glyphicon-star-empty'

        return '<i class="glyphicon ' + icon + '"></i> ' + value;
    }

    function priceFormatter(value) {
        // 16777215 == ffffff in decimal
        var color = '#'+Math.floor(Math.random() * 6777215).toString(16);
        return '<div  style="color: ' + color + '">' +
                '<i class="glyphicon glyphicon-usd"></i>' +
                value.substring(1) +
                '</div>';
    }
	
	 $(function () {
        $('#large-columns-table').next().click(function () {
            $(this).hide();
            buildTable($('#table-large-columns'), 50, 50);
        });
    });
	
	// client side
    function responseHandler(res) {
        return res.repos;
    }

    // server side
    /*
    function responseHandler(res) {
        return {
            rows: res.repos;
            total: res.repos.length
        }
    }
    */
	function stateFormatter(value, row, index) {
        if (index === 2) {
            return {
                disabled: true
            };
        }
        if (index === 5) {
            return {
                disabled: true,
                checked: true
            }
        }
        return value;
    }
	
	$(function () {
        $('#basic-events-table').next().click(function () {
            $(this).hide();

            var $result = $('#events-result');

            $('#events-table').bootstrapTable({
                /*
                onAll: function (name, args) {
                    console.log('Event: onAll, data: ', args);
                }
                onClickRow: function (row) {
                    $result.text('Event: onClickRow, data: ' + JSON.stringify(row));
                },
                onDblClickRow: function (row) {
                    $result.text('Event: onDblClickRow, data: ' + JSON.stringify(row));
                },
                onSort: function (name, order) {
                    $result.text('Event: onSort, data: ' + name + ', ' + order);
                },
                onCheck: function (row) {
                    $result.text('Event: onCheck, data: ' + JSON.stringify(row));
                },
                onUncheck: function (row) {
                    $result.text('Event: onUncheck, data: ' + JSON.stringify(row));
                },
                onCheckAll: function () {
                    $result.text('Event: onCheckAll');
                },
                onUncheckAll: function () {
                    $result.text('Event: onUncheckAll');
                },
                onLoadSuccess: function (data) {
                    $result.text('Event: onLoadSuccess, data: ' + data);
                },
                onLoadError: function (status) {
                    $result.text('Event: onLoadError, data: ' + status);
                },
                onColumnSwitch: function (field, checked) {
                    $result.text('Event: onSort, data: ' + field + ', ' + checked);
                },
                onPageChange: function (number, size) {
                    $result.text('Event: onPageChange, data: ' + number + ', ' + size);
                },
                onSearch: function (text) {
                    $result.text('Event: onSearch, data: ' + text);
                }
                */
            }).on('all.bs.table', function (e, name, args) {
                console.log('Event:', name, ', data:', args);
            }).on('click-row.bs.table', function (e, row, $element) {
                $result.text('Event: click-row.bs.table, data: ' + JSON.stringify(row));
            }).on('dbl-click-row.bs.table', function (e, row, $element) {
                $result.text('Event: dbl-click-row.bs.table, data: ' + JSON.stringify(row));
            }).on('sort.bs.table', function (e, name, order) {
                $result.text('Event: sort.bs.table, data: ' + name + ', ' + order);
            }).on('check.bs.table', function (e, row) {
                $result.text('Event: check.bs.table, data: ' + JSON.stringify(row));
            }).on('uncheck.bs.table', function (e, row) {
                $result.text('Event: uncheck.bs.table, data: ' + JSON.stringify(row));
            }).on('check-all.bs.table', function (e) {
                $result.text('Event: check-all.bs.table');
            }).on('uncheck-all.bs.table', function (e) {
                $result.text('Event: uncheck-all.bs.table');
            }).on('load-success.bs.table', function (e, data) {
                $result.text('Event: load-success.bs.table');
            }).on('load-error.bs.table', function (e, status) {
                $result.text('Event: load-error.bs.table, data: ' + status);
            }).on('column-switch.bs.table', function (e, field, checked) {
                $result.text('Event: column-switch.bs.table, data: ' +
                    field + ', ' + checked);
            }).on('page-change.bs.table', function (e, size, number) {
                $result.text('Event: page-change.bs.table, data: ' + number + ', ' + size);
            }).on('search.bs.table', function (e, text) {
                $result.text('Event: search.bs.table, data: ' + text);
            });
        });
    });
	
	 function operateFormatter(value, row, index) {
        return [
            '<a class="like" href="javascript:void(0)" title="Like">',
                '<i class="glyphicon glyphicon-heart"></i>',
            '</a>',
            '<a class="edit ml10" href="javascript:void(0)" title="Edit">',
                '<i class="glyphicon glyphicon-edit"></i>',
            '</a>',
            '<a class="remove ml10" href="javascript:void(0)" title="Remove">',
                '<i class="glyphicon glyphicon-remove"></i>',
            '</a>'
        ].join('');
    }

    window.operateEvents = {
        'click .like': function (e, value, row, index) {
            alert('You click like icon, row: ' + JSON.stringify(row));
            console.log(value, row, index);
        },
        'click .edit': function (e, value, row, index) {
            alert('You click edit icon, row: ' + JSON.stringify(row));
            console.log(value, row, index);
        },
        'click .remove': function (e, value, row, index) {
            alert('You click remove icon, row: ' + JSON.stringify(row));
            console.log(value, row, index);
        }
    };
	
	$(function () {
        $('#table-methods').next().click(function () {
            $(this).hide();

            var id = 0,
                getRows = function () {
                    var rows = [];

                    for (var i = 0; i < 10; i++) {
                        rows.push({
                            id: id,
                            name: 'test' + id,
                            price: '$' + id
                        });
                        id++;
                    }
                    return rows;
                },
                // init table use data
                $table = $('#table-methods-table').bootstrapTable({
                    data: getRows()
                });

            $('#get-selections').click(function () {
                alert('Selected values: ' + JSON.stringify($table.bootstrapTable('getSelections')));
            });
            $('#get-data').click(function () {
                alert('current data: ' + JSON.stringify($table.bootstrapTable('getData')));
            });
            // This demonstrates utilizing the data-method attribute to use one 
            //     jQuery handler to execute multiple methods. 
            // ($this).data('method') retrieves the value of the data-method 
            //     attribute of the object that was clicked which is then passed to 
            //     the bootstrapTable function. 
            // Only the load and append methods require a parameter                                 
            $('#load-data, #append-data, #check-all, #uncheck-all, ' +
                    '#show-loading, #hide-loading').click(function () {
                $table.bootstrapTable($(this).data('method'), getRows());
            });
            $('#refresh').click(function () {
                $table.bootstrapTable('refresh', {
                    url: 'data1.json'
                });
            });
            $('#remove-data').click(function () {
                var selects = $table.bootstrapTable('getSelections');
                    ids = $.map(selects, function (row) {
                        return row.id;
                    });

                $table.bootstrapTable('remove', {
                    field: 'id',
                    values: ids
                });
            });
            $('#update-row').click(function () {
                $table.bootstrapTable('updateRow', {
                    index: 1,
                    row: {
                        name: 'test111111',
                        price: '$111111'
                    }
                });
            });
            $('#merge-cells').click(function () {
                $table.bootstrapTable('mergeCells', {
                    index: 1,
                    field: 'name',
                    colspan: 2,
                    rowspan: 3
                })
            });
            $('#show-column, #hide-column').click(function () {
                $table.bootstrapTable($(this).data('method'), 'id');
            });
        });
    });
	
	
	
	
	
