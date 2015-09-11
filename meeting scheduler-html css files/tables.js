<table data-url="data1.json" data-height="299" data-click-to-select="true">
    <thead>
        <tr>
            <th data-field="state" data-checkbox="true"></th>
            <th data-field="id" data-align="right">Item ID</th>
            <th data-field="name" data-align="center">Item Name</th>
            <th data-field="price" data-align="">Item Price</th>
        </tr>
    </thead>
</table>

<table id="table-javascript"></table>
<script>
    $(function () {
        $('#via-javascript-table').next().click(function () {
            $(this).hide();

            $('#table-javascript').bootstrapTable({
                method: 'get',
                url: 'data2.json',
                cache: false,
                height: 400,
                striped: true,
                pagination: true,
                pageSize: 50,
                pageList: [10, 25, 50, 100, 200],
                search: true,
                showColumns: true,
                showRefresh: true,
                minimumCountColumns: 2,
                clickToSelect: true,
                columns: [{
                    field: 'state',
                    checkbox: true
                }, {
                    field: 'id',
                    title: 'Item ID',
                    align: 'right',
                    valign: 'bottom',
                    sortable: true
                }, {
                    field: 'name',
                    title: 'Item Name',
                    align: 'center',
                    valign: 'middle',
                    sortable: true,
                    formatter: nameFormatter
                }, {
                    field: 'price',
                    title: 'Item Price',
                    align: 'left',
                    valign: 'top',
                    sortable: true,
                    formatter: priceFormatter,
                    sorter: priceSorter
                }, {
                    field: 'operate',
                    title: 'Item Operate',
                    align: 'center',
                    valign: 'middle',
                    clickToSelect: false,
                    formatter: operateFormatter,
                    events: operateEvents
                }]
            });
        });
    });
</script>