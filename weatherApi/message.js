function messageInformation(message, head, status){
  let bgColorResult = '';
  let loaderColor = '';

  if(status){
    bgColorResult = '#87e35d',
    loaderColor = '#388a13'
  }else{
    bgColorResult = '#c95b51',
    loaderColor = '#e34739'
  }
    $.toast({
      heading: head,          //title
      text: message,          //message
      // icon: info,             // icon type
      loader: true,        // Change it to false to disable loader
      loaderBg: loaderColor,  // To change the background
      allowToastClose: true, // Boolean value true or false
      bgColor: bgColorResult,
      textAlign:'left',
      hideAfter: 5000,
      position:'bottom-center'
  })
}