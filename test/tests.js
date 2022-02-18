import './example.test.js';
import { renderListItem } from '../render-utils.js';
const test = QUnit.test;

const test1 = {
    created_at: '2022-02-17T22:42:43+00:00',
    id: 1,
    in_cart: true,
    item: 'frozen pizza',
    name: 'Marcus',
    user_id: '5b56e264-a73f-4564-a52a-1cfed3b37504'
};

const test2 = {
    created_at: '2022-02-17T22:43:00+00:00',
    id: 2,
    in_cart: false,
    item: 'coffee',
    name: 'Marcus',
    user_id: '5b56e264-a73f-4564-a52a-1cfed3b37504'
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
    expect.equal(actual.outerHTML, expected);
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