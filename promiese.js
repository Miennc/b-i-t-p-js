const promise =   new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('việc 1');  
    resolve();    // dữ liệu được truyền từ trên xuống dưới res thành công rej thất bại
  }, 1000);
}
);
promise.then(()=>{
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('việc 2');
      resolve();
    }, 2000);
  }
  );
}).then(()=>{
  console.log('việc 3');
})
