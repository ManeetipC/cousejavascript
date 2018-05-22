$(function () {
  (function ($) {
    var global = this;
    $.fn.addchart = function (label, color, addtime) {
      var blog = $(`<div class="col-sm-4">
      <button type="button" class="close" >
                          <span aria-hidden="true">&times;</span>
                        </button>
        <canvas></canvas>
    </div>`);

      blog.find("canvas").realtimeChart(2000, {
        dataset: {
          label: label,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: color
        }
      });
      $(".createchart").append(blog);
      blog.find("button.close").click(function () {
        blog.remove();
      });
    };
    $.fn.confirm = function (title) {
      var element = this;
      var dialog = $('<div class="modal" role="dialog" />');
      dialog.html(`
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title"">${title}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                       
                      
                      <div class="col-md-12">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="spanchart">พิมพ์ชื่อ Chart</span>
                        </div>
                        <input type="text" class="form-control" id="txtnamechart" placeholder="" aria-describedby="inputGroupPrepend" required>
                        <div class="invalid-feedback">
                          กรุณาพิมพ์ชื่อตาราง
                        </div>
                      </div>
                    </div>
<br/>

                    <div class="col-md-12">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="spanchart">เลือกสี</span>
                      </div>
                      <input type="color" id="txtcodecolor">
                      <div class="invalid-feedback">
                        กรุณาเลือกสี
                      </div>
                    </div>
                  </div>
                  <br/>

                  
                  <div class="col-md-12">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="spanchart">ระบุเวลา Chart</span>
                    </div>
                    <input type="text" class="form-control" id="txtaddtime" placeholder="" aria-describedby="inputGroupPrepend" required>
                    <div class="invalid-feedback">
                      กรุณาพิมพ์ชื่อตาราง
                    </div>
                  </div>
                </div>

                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" role="action-ok">OK</button>
                      </div>
                    </div>
                  </div>
         
                `);

      return new Promise((resolve, reject) => {
        var isConfirmed = false;

        $(dialog).on("hidden.bs.modal", function (e) {
          if (isConfirmed) resolve();
          else reject();
        });

        dialog.find('button[role="action-ok"]').click(function () {
          isConfirmed = true;
          dialog.modal("hide");
        });

        dialog.modal({
          backdrop: "static",
          keyboard: false
        });
      });
    };
  })(jQuery);

  $("#btnadd").click(function () {
    $("body")
      .confirm("กรุณาเพิ่มค่า")
      .then(function () {
        $("#chart").addchart(
          $("#txtnamechart").val(),
          $("#txtcodecolor").val(),
          $("#txtaddtime").val()
        );
      })
      .catch(function () {
        // alert("cancel");
      });
  });
});