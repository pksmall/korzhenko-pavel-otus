import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { switchMap, retry, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import {
    ApiResponse,
    Language,
    TranslationDirection,
    WordPair,
} from "./app.interfaces";
import { translationDirectionToLanguagePair } from "./app.utils";

@Injectable({
    providedIn: "root",
})

export class TranslationService {
    private apiKey = environment.translationApiKey;
    private httpOptions = {
        response: "json",
        headers: new HttpHeaders({
            "x-rapidapi-host": "google-translate1.p.rapidapi.com",
            "x-rapidapi-key": this.apiKey,
            "accept-encoding": "application/gzip",
            "content-type": "application/x-www-form-urlencoded",
            "useQueryString": "true"
        }),
    };
    constructor(private http: HttpClient) {}

    translate(
        word: string,
        translationDirection: TranslationDirection
    ): Observable<WordPair> {
        let body = new URLSearchParams();
        body.set('source', translationDirection.split('-')[0]);
        body.set('q', word);
        body.set('target', translationDirection.split('-')[1]);
        return of(word).pipe(
            switchMap((word) =>
                this.http.post(
                  "https://google-translate1.p.rapidapi.com/language/translate/v2",
                  body.toString(),
                  this.httpOptions
                )
            ),
            map((response: ApiResponse) => {
                const languages: Language[] = translationDirectionToLanguagePair(
                    translationDirection
                );
                return {
                    added: new Date(),
                    original: {
                        spelling: word,
                        language: languages[0],
                    },
                    translation: {
                        spelling: response.data.translations[0].translatedText,
                        language: languages[1],
                    },
                };
            })
        );
    }
}
