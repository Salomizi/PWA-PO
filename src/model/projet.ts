export class Projet {
    screenshot_name: string;
    description: string;
    client_logo_name: string;

    constructor(message: string, screenshot_name: string, client_logo_name: string) {
        this.description = message;
        this.screenshot_name = screenshot_name;
        this.client_logo_name = client_logo_name;
    }
}