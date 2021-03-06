import { Injectable } from "@angular/core";
import { WordPair, AppSettings } from "./app.interfaces";

@Injectable({
    providedIn: "root",
})
export class StorageService {
    private wordsListName = "learnLanguagesApp.words";
    private settingsListName = "learnLanguagesApp.settings";

    getWords(): WordPair[] {
        return localStorage.getItem(this.wordsListName)
            ? JSON.parse(localStorage.getItem(this.wordsListName), (key, values) => {
                if (key === "added" && values == null) {
                    return new Date();
                } else if (key === "added" && values != null) {
                    return new Date(values);
                } else {
                    return values;
                }
            })
            : [];
    }

    setWords(words: WordPair[]): void {
        localStorage.setItem(this.wordsListName, JSON.stringify(words));
    }

    addWord(word: WordPair): void {
        const words: WordPair[] = this.getWords();
        words.push(word);
        this.setWords(words);
    }

    getSettings(): AppSettings {
        return localStorage.getItem(this.settingsListName)
            ? JSON.parse(localStorage.getItem(this.settingsListName))
            : {};
    }

    setSettings(settings: AppSettings): void {
        localStorage.setItem(this.settingsListName, JSON.stringify(settings));
    }
}
