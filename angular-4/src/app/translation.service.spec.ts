import { TranslationService } from "./translation.service";
import {
    TranslationDirection,
    WordPair,
    Language,
    ApiResponse, GoogleItem, Translations,
} from "./app.interfaces";
import { of } from "rxjs";

describe("Translation Service", () => {
    let httpClientSpy: { post: jasmine.Spy };
    let service: TranslationService;

    const testWord: string = "test";
    const testTranslation: string = "тест";
    const testTranslationDirection: TranslationDirection =
        TranslationDirection.EnToRu;
    const testWordPair: WordPair = {
        added: new Date(),
        original: {
            language: Language.En,
            spelling: testWord,
        },
        translation: {
            language: Language.Ru,
            spelling: testTranslation,
        },
    };
    const Item: GoogleItem = {
        translatedText: testTranslation
    }
    const testResponse: ApiResponse = {
        code: 200,
        lang: "en-ru",
        data: {
            "translations": Item
        }
    };

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj("HttpClient", ['post']);
        httpClientSpy.post.and.returnValue(of(testResponse));
        service = new TranslationService(<any>httpClientSpy);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    it("should translate a word", () => {
        service
            .translate(testWord, testTranslationDirection)
            .subscribe((translation) => {
                expect(translation.original).toEqual(testWordPair.original);
                expect(translation.translation).toEqual(testWordPair.translation);
            });
        expect(httpClientSpy.post.calls.count()).toEqual(1);
    });
});
