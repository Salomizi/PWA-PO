export class Projet {
    screenshots: string[];
    description: string;
    directory_name: string;

    constructor(message: string, screenshot_number: number, directory_name: string) {
        this.description = message;
        this.screenshots = new Array();
        for (var i = 1; i <= screenshot_number; i++) {
            this.screenshots.push(String(i));
        }

        this.directory_name = directory_name;
    }
}