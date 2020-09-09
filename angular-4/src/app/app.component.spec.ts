import {TestBed, async, ComponentFixture} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
        }).compileComponents().then(() => {
            fixture = TestBed.createComponent(AppComponent);
            app = fixture.componentInstance;
            fixture.detectChanges();
        });
    }));

    it("should create the app", () => {
        expect(app).toBeTruthy();
    });

    it("should have 'Learn Foreign Language' as a title", () => {
        expect(app.title).toEqual("Learn Foreign Language");
    });

    it("should render title", () => {
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector(".logo").textContent).toContain(
            "Learn Foreign Language"
        );
    });
});
