import './example.test.js';
import { renderListItem } from '../render-utils.js';
const test = QUnit.test;

const test1 = {

};

const test2 = {

};

test('renderListItem should create element for list item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="in-cart">frozen pizza</li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderListItem(test1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('renderListItem should create element for list item without class', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li>coffee</li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderListItem(test2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});