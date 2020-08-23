import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "app-study",
  templateUrl: "./study.component.html",
  styleUrls: ["./study.component.css"]
})
export class StudyComponent {
  wordToTranslate: string = "Translate it!";
  translation: string = "";

  onSubmit(form: FormsModule) {
    // @ts-ignore
    console.log(this.translation);
  }
}
