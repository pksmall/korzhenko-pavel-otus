import { Component } from "@angular/core";
import { NavLink } from "./app.interfaces";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    title = "Learn Foreign Language";
    navLinks: NavLink[] = [
        { label: "Recently Added", path: "/recently-added" },
        { label: "Go", path: "/go" },
        { label: "Settings", path: "/settings" },
    ];
}
