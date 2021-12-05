function InitHTML() {
     jQuery.get('/View/_nav.html', function (data) {
          $("#navbar-bottom").html(data);
     });

     jQuery.get('/View/_CovidHealthStatus.html', function (data) {
          $(".CovidHealthStatus").html(data);
          LoadVaccineStatus();
          LoadTestStatus();
     });

     jQuery.get('/View/_topBanner.html', function (data) {
          $(".topbanner").html(data);
     });

     jQuery.get('/View/_SafeEntryCheckin.html', function (data) {
          $(".SafeEntryCheckin").html(data);
     }); 
     
     jQuery.get('/View/_sharingApp.html', function (data) {
          $(".sharingApp").html(data);
     });
}

function LoadVaccineStatus() {
     jQuery.get('/View/_NotVacinated.html', function (data) {
          $(".vaccineStatus").html(data);
     });
}

function LoadTestStatus() {
     jQuery.get('/View/_NoTestStatus.html', function (data) {
          $(".testStatus").html(data);
     });

}

function refreshStatus() {
     if ($(".refreshStatus").hasClass("fa-spin"))
          $(".refreshStatus").removeClass("fa-spin")
     else
          $(".refreshStatus").addClass("fa-spin")
}

function MockChangeVaccineStatus() {
     if ($(".vaccineStatus .roundEdge").hasClass("NotVaccinated"))
     {
          jQuery.get('/View/_Vacinated.html', function (data) {
               $(".vaccineStatus").html(data);
          });
     }
     else
     {
          jQuery.get('/View/_NotVacinated.html', function (data) {
               $(".vaccineStatus").html(data);
          });
     }
}

function triggerNavAction(e)
{     
     $(".red").removeClass("red");
     $(".navBtn"+e).addClass("red");
}
