const tf = require('@tensorflow/tfjs');

// Optional Load the binding:
// Use '@tensorflow/tfjs-node-gpu' if running with GPU.
require('@tensorflow/tfjs-node');

//! FIRST DEMO
// Train a simple model:
// const model = tf.sequential();
// model.add(tf.layers.dense({ units: 100, activation: 'relu', inputShape: [10] }));
// model.add(tf.layers.dense({ units: 1, activation: 'linear' }));
// model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

// const xs = tf.randomNormal([100, 10]);
// const ys = tf.randomNormal([100, 1]);

// model.fit(xs, ys, {
//   epochs: 100,
//   callbacks: {
//     onEpochEnd: (epoch, log) => console.log(`Epoch ${epoch}: loss = ${log.loss}`)
//   }
// });

//! LAB #21
//! Exercise 1
// // const xs = tf.tensor1d([1, 2, 3]);
// // const xs = tf.tensor([[1, 2, 3], [11, 22, 33]]);
// // const xs = tf.tensor([1, 2, 3, 4, 5, 6], [1, 6]);
// const xs1 = tf.tensor([1, 2, 3, 4, 5, 6], [1, 6]);
// const xs2 = tf.tensor([1, 2, 3, 4, 5, 6], [6, 1]);
// // const ys = xs.mul(tf.scalar(5));
// const ys = xs1.equal(xs2);
// ys.print();

//! Exercise 2
// function getYs(xs, m, c) {
//   // To implement
//   return xs.mul(m).add(tf.scalar(c))
// }
// const t1 = tf.tensor1d([1,5,10]);
// const t2 = getYs(t1, 2, 1);
// t2.print();

//! Exercise 3
// const t3 = tf.tensor1d([25, 76, 4, 23, -5, 22]);
// const max = t3.max(); // 76
// const min = t3.min(); // -5
// const t3Normalised = t3.sub(min).div(max.sub(min));
// t3Normalised.print();

// /*
// const original = 23;
// const minAsNumber = min.dataSync()[0];
// const maxAsNumber = max.dataSync()[0];
// const normalised = (original - minAsNumber) / (maxAsNumber - minAsNumber);
// */

//! Exercise 4
for (let i = 0; i < 100; i++) {
  tf.tensor1d([1, 2, 3]).dispose();
}

const y = tf.tidy(() => {
  for (let i = 0; i < 100; i++) {
    tf.tensor1d([4, 5, 6])
  }
});

console.log(tf.memory());

/*
tf.tensor([[[[[4, 3], [5, 2], [4, 3], [5, 2]]]]]).print()
// is the same than
tf.tensor([4, 3, 5, 2, 4, 3, 5, 2], [1, 1, 1, 4, 2]).print()
*/

// tf.tensor([[[4], [5]]]).print()
// // is the same than
// tf.tensor([4, 5], [1, 2, 1]).print()
// // is the same than
// tf.tensor3d([4, 5], [1, 2, 1]).print()

