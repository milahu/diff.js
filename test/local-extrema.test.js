import { test } from 'zora';
import { localExtremaTest } from './local-extrema.helper.js';

// TODO test option yTolerance

const runSoloTestOnly = 0;
if (runSoloTestOnly) {
// solo test
// paste a test-case here



}
else {
// run all tests

test('finds minimum in middle of array', t => {
  //              0  1  2  3  4
  const values = [2, 1, 0, 1, 2];
  const minima = [[2, 2]];
  localExtremaTest(t, values, {}, { minima });
});

test('finds maximum in middle of array', t => {
  //              0  1  2  3  4
  const values = [2, 3, 4, 3, 2];
  const maxima = [[2, 2]];
  localExtremaTest(t, values, {}, { maxima });
});

test('finds max + min + max', t => {
  //              0  1  2  3  4  5  6  7  8
  const values = [2, 3, 4, 3, 2, 3, 4, 3, 2];
  const maxima = [[2, 2], [6, 6]];
  const minima = [[4, 4]];
  localExtremaTest(t, values, {}, { minima, maxima });
});

test('finds min + max + min', t => {
  //              0  1  2  3  4  5  6  7  8
  const values = [2, 1, 0, 1, 2, 1, 0, 1, 2];
  const minima = [[2, 2], [6, 6]];
  const maxima = [[4, 4]];
  localExtremaTest(t, values, {}, { minima, maxima });
});

test('finds high plateau at start of array', t => {
  //              0  1  2  3  4
  const values = [5, 5, 4, 3, 2];
  const maxima = [[0, 1]];
  localExtremaTest(t, values, {}, { maxima });
});

test('finds high plateau in middle of array', t => {
  //              0  1  2  3  4  5
  const values = [3, 4, 5, 5, 4, 3];
  const maxima = [[2, 3]];
  localExtremaTest(t, values, {}, { maxima });
});

test('finds high plateau at end of array', t => {
  //              0  1  2  3  4
  const values = [2, 3, 4, 5, 5];
  const maxima = [[3, 4]];
  localExtremaTest(t, values, {}, { maxima });
});

test('finds high plateau at start and end of array', t => {
  //              0  1  2  3  4  5  6
  const values = [5, 5, 4, 3, 4, 5, 5];
  const minima = [[3, 3]];
  const maxima = [[0, 1], [5, 6]];
  localExtremaTest(t, values, {}, { minima, maxima });
});

test('finds high plateau at start and middle and end of array', t => {
  //              0  1  2  3  4  5  6  7
  const values = [5, 5, 4, 5, 5, 4, 5, 5];
  const minima = [[2, 2], [5, 5]];
  const maxima = [[0, 1], [3, 4], [6, 7]];
  localExtremaTest(t, values, {}, { minima, maxima });
});

test('finds low plateau at start of array', t => {
  //              0  1  2  3  4
  const values = [5, 5, 6, 7, 8];
  const minima = [[0, 1]];
  localExtremaTest(t, values, {}, { minima });
});

test('finds low plateau in middle of array', t => {
  //              0  1  2  3  4  5
  const values = [7, 6, 5, 5, 6, 7];
  const minima = [[2, 3]];
  localExtremaTest(t, values, {}, { minima });
});

test('finds low plateau at end of array', t => {
  //              0  1  2  3
  const values = [7, 6, 5, 5];
  const minima = [[2, 3]];
  localExtremaTest(t, values, {}, { minima });
});

test('finds low plateau at start and end of array', t => {
  //              0  1  2  3  4  5  6
  const values = [5, 5, 6, 7, 6, 5, 5];
  const minima = [[0, 1], [5, 6]];
  const maxima = [[3, 3]];
  localExtremaTest(t, values, {}, { minima, maxima });
});

test('finds low plateau at start and middle and end of array', t => {
  //              0  1  2  3  4  5  6  7
  const values = [5, 5, 6, 5, 5, 6, 5, 5];
  const minima = [[0, 1], [3, 4], [6, 7]];
  const maxima = [[2, 2], [5, 5]];
  localExtremaTest(t, values, {}, { minima, maxima });
});

test('supports custom data format 1', t => {
  //              0  1  2  3
  const values = [7, 6, 5, 5];
  const minima = [[2, 3]];
  const data = {
    keys: Array.from({ length: values.length }).map((_, i) => i),
    values,
  };
  const options = {
    y: (data, idx) => data.values[idx],
    result: (data, idx) => data.keys[idx],
    length: (data) => data.values.length,
  };
  localExtremaTest(t, data, options, { minima });
});

test('supports custom data format 2', t => {
  //              0  1  2  3
  const values = [7, 6, 5, 5];
  const minima = [[2, 3]];
  const data = [
    Array.from({ length: values.length }).map((_, i) => i),
    values,
  ];
  const options = {
    y: (data, idx) => data[1][idx],
    result: (data, idx) => data[0][idx],
    length: (data) => data[1].length,
  };
  localExtremaTest(t, data, options, { minima });
});

test('supports custom data format 3', t => {
  //              0  1  2  3
  const values = [7, 6, 5, 5];
  const minima = [[2, 3]];
  const data = values.map((val, idx) => [idx, val]);
  const options = {
    y: (data, idx) => data[idx][1],
    result: (data, idx) => data[idx][0],
    length: (data) => data.length,
  };
  localExtremaTest(t, data, options, { minima });
});

test('returns empty result for less than 3 points', t => {
  //              0  1
  const values = [1, 1];
  localExtremaTest(t, values, {}, {});
});

test('finds rising plateau in middle of array', t => {
  //              0  1  2  3
  const values = [2, 3, 3, 4];
  const plateaus = [[1, 2]];
  localExtremaTest(t, values, {}, { plateaus });
});

test('finds falling plateau in middle of array', t => {
  //              0  1  2  3
  const values = [4, 3, 3, 2];
  const plateaus = [[1, 2]];
  localExtremaTest(t, values, {}, { plateaus });
});

}
