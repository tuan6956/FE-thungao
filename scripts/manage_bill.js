
$(function () {
    // $('[data-toggle="tooltip"]').tooltip();   
    $('.bill-status').tooltip({html: true, placement: "right", container: ".main-container",
        title:  `
                    <div class="tooltip-last-bill-container">
                        <div class='last-bill-title'> Đơn hàng trước đó
                        </div>
                        <div class='last-bill-body'>
                            <div>
                                <span class='col-sm-3 col-form-label'>Loại gạo: </span>
                                <span >Phường/Xã*</span>
                            </div>  
                            <div>
                                <span class='col-sm-3 col-form-label'>Số kg: </span>
                                <span >20kg</span>
                            </div>  
                            <div>
                                <span class='col-sm-3 col-form-label' >Giá: </span>
                                <span >250,000</span>
                            </div>  
                            <div>
                                <span class='col-sm-3 col-form-label' >Ngày đặt: </span>
                                <span >01/07/2020</span>
                            </div>  
                        </div>
                    </div>
                `
    }); 
    $('#exampleModal').on('show.bs.modal', function (event) {

        var button = $(event.relatedTarget) // Button that triggered the modal
        console.log(button);

        var recipient = button.data('whatever') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this)
        modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('.modal-body input').val(recipient)
      })
    // $('#orderModal').modal({
    //     keyboard: true,
    //     backdrop: "static",
    //     show: false,

    // }).on('show', function () {

    // });

    // $(".table-striped").find('tr[data-id]').on('click', function () {
    //     debugger;

    //     //do all your operation populate the modal and open the modal now. DOnt need to use show event of modal again

    //     $('#orderDetails').html($('<b> Order Id selected: ' + $(this).data('id') + '</b>'));
    //     $('#orderModal').modal('show');



    // });

});