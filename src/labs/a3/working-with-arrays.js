import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ArrayIndexAndLength from "./array-index-and-length";
import FilterFunction from "./filter-function";
import FindFunction from "./find-function";
import FindIndex from "./find-index";
import ForLoops from "./for-loops";
import JSONStringify from "./json-stringify";
import MapFunction from "./map-function";

function WorkingWithArrays() {
    console.log('Working with Arrays');

    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped, blockScoped,
        constant1, numberArray1, stringArray1
    ];

    console.log({
        numberArray1, stringArray1,
        variableArray1
    })

    return (
        <div>
            <h2>Working with Arrays</h2>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
            variableArray1 = {variableArray1}<br />
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <ForLoops />
            <MapFunction />
            <JSONStringify />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
        </div>
    );
}

export default WorkingWithArrays