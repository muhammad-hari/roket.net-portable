
//attached autocomplete widget to all the autocomplete controls
$(document).ready(function () {
    BindAutoComplete();
});
function BindAutoComplete() {

    $('[data-autocomplete]').each(function (index, element) {
        var sourceurl = $(element).attr('data-sourceurl');
        var autocompletetype = $(element).attr('data-autocompletetype');
        $(element).autocomplete({
            source: function (request, response) {
                $.ajax({
                    url: sourceurl,
                    dataType: "json",
                    data: { searchHint: request.term },
                    success: function (data) {
                        response($.map(data, function (item) {
                            if (autocompletetype == 'automapper') {
                                return {
                                    label: item.StudentName,
                                    value: item.StudentName,
                                    selectedValue: item.StudentID
                                };
                            }
                            else if (autocompletetype == 'department') {
                                return {
                                    label: item.DepartmentName,
                                    value: item.DepartmentName,
                                    selectedValue: item.DepartmentID

                                };//
                            }
                            else if (autocompletetype == 'employee') {
                                return {
                                    label: item.StudentName,
                                    value: item.StudentName,
                                    selectedValue: item.StudentID

                                };//
                            }
                        }));
                    },
                    error: function (data) {
                        alert(data);
                    },
                });
            },
            select: function (event, ui) {
                var valuetarget = $(this).attr('data-valuetarget');
                $("input:hidden[name='" + valuetarget + "']").val(ui.item.selectedValue);

                var selectfunc = $(this).attr('data-electfunction');
                if (selectfunc != null && selectfunc.length > 0) {
                    window[selectfunc](event, ui);
                    //funName();
                }
                //    selectfunc(event, ui);
            },
            change: function (event, ui) {
                var valuetarget = $(this).attr('data-valuetarget');


                $("input:hidden[name='" + valuetarget + "']").val('');
            },
        });
    });
}