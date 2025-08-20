export default class Author {
    public value: string;

    constructor(value: string) {
        this.isValid(value);
        this.value = value;
    }

    public isValid(value: string): boolean {
        if (typeof value !== 'string') {
            return false;
        }
        return true;
    }
}