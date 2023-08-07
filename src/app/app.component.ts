import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'officehtml-angular';
  uploadFile(e: any) {
    console.log(e.target.value)
    $(document).ready(() => {
      console.log($("#select_file"))

    })


  }
  ngOnInit() {
    $(document).ready(() => {
      console.log('hi i am jquery')
      $("#resolte-contaniner").html("");
      $("#resolte-contaniner").show();
      $("#resolte-text").show();
      $("#select_file").show();
      $("#file_p").show();
      $("#a_file").hide();
      $("#resolte-contaniner").officeToHtml({
        inputObjId: "select_file",
        pdfSetting: {
          setLang: "",
          setLangFilesPath: "" /*"include/pdf/lang/locale" - relative to app path*/
        }
      });

    });
  }
}
