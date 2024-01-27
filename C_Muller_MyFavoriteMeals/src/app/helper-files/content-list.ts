import { Content } from '../helper-files/content-interface';

export class ContentList{

    // Private array of type Content
    private contentArray: Content[];

    // Constructor that initially sets the array to be empty
    constructor() {
        this.contentArray = [];
    }

    // Getter function that returns your Content array
    get getContentArray() {
        return this.contentArray;
    }

    // Function that adds 1 Content item to the end of the array
    addContentItem(contentItem: Content) {
        this.contentArray.push(contentItem);
    }

    // Function that returns the number of items in the array
    getNumOfItems() {
        return this.contentArray.length;
    }

    // Function that takes an input of an index of the array and returns a reader-friendly html output of a Content item's properties at that index.
    outputHtmlContent(i: number): string {
        const contentItem:Content = this.contentArray[i];

        const imgTag = `<img src="${contentItem.imgURL}">`;

        return `<div>
        <h3>${contentItem.title}</h3>
        <p>Description: ${contentItem.description}</p>
        <p>Creator: ${contentItem.creator}</p>
        <p>Type: ${contentItem.type}</p>
        <p>${imgTag}</p>
        </div>`;
    }
}