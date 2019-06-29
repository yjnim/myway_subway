
function getSelectedArr(selectedArr, introduction){
    $.ajax({ 
        type: "GET",
        url: "/create",
        data: { 
            'selectedArr' : selectedArr,
            'introduction' : introduction,
        }, 
        dataType: "text",
        success: function(response){ 
            alert("선택하신 샌드위치가 저장되었습니다.")
        },
        error:function(request,status,error){
            alert("code:" + request.status + "\n" + "error:" + error);
        },
    });
  }