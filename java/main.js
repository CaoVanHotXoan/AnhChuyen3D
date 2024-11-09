window.addEventListener("load", () => {
  Swal.fire({
    title: "Chỉnh âm lượng vừa đủ vì có nhạc >.0",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Okay",
    cancelButtonText: "Canner",
  }).then((result) => {
    if (result.isConfirmed) {
      document.querySelector(".song").play();
   
    } else {
      document.querySelector(".song").play();
      
    }
  });
});
