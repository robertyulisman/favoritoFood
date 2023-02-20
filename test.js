let videos = [
    {
      id: 1,
      product_id: 'training_video_test_1',
      video_title: 'Video title 1',
      video_short_description: 'desc 1',
    },
    {
      id: 2,
      product_id: 'training_video_test_2',
      video_title: 'Video title 2',
      video_short_description: 'desc 2',
    },
    {
      id: 3,
      product_id: 'training_video_test_3',
      video_title: 'Video title 3',
      video_short_description: 'desc 3',
    },
  ],
  storeProducts = [
    {
      product_id: 'training_video_test_1',
      prduct_title: 'training_video_test_1',
      price: 100,
    },
    {
      product_id: 'training_video_test_2',
      prduct_title: 'training_video_test_2',
      price: 100,
    },
  ],
  mapped = storeProducts.reduce((a, c) => ((a[c.product_id] = c), a), {}),
  result = videos.map(o => Object.assign(o, mapped[o.product_id]));

console.log(result);
