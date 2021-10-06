import {variance} from "./data/stats_helpers.js";
import { maxAndMin } from "../mild/mild_1.js";

/**
 * Gets the sum of an array of numbers.
 * @param array
 * @returns {*}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * prototype functions. Very useful
 */
export function getSum(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }
    return sum;
}


/**
 * Calculates the median of an array of numbers.
 * @param {number[]} array
 * @returns {number|*}
 *
 * example:
 * let array = [3,2,5,6,2,7,4,2,7,5];
 * console.log(getMedian(array)); // 4.5
 */
export function getMedian(array) {
    array.sort((a,b) => a-b);
    let mid = array.length/2;
    if (mid % 1) { // odd length array
        return array[mid - 0.5];
    } else {
        return (array[mid - 1] + array[mid]) /2;
    }
}

/**
 * Calculates statistics (see below) on an array of numbers.
 * Look at the stats_helper.js file. It does variance which is used to calculate std deviation.
 * @param {number[]} array
 * @returns {{min: *, median: *, max: *, variance: *, mean: *, length: *, sum: *, standard_deviation: *}}
 *
 * example:
 * getStatistics([3,2,4,5,5,5,2,6,7])
 * {
  length: 9,
  sum: 39,
  mean: 4.333333333333333,
  median: 5,
  min: 2,
  max: 7,
  variance: 2.6666666666666665,
  standard_deviation: 1.632993161855452
 }
 */
export function getStatistics(array) {
    let output = {};
    output.length = array.length;
    output.sum = getSum(array);
    output.mean = output.sum/output.length;
    output.median = getMedian(array);
    output.min = Math.min(...array);
    output.max = Math.max(...array);
    output.variance = variance(array, output.mean);
    output.standard_deviation = Math.sqrt(output.variance);
    return output;
}

